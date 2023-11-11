import * as fs from 'fs/promises'
import * as path from 'path'
import { inferSchema, initParser } from 'udsv'
import { writeJson, readJson } from "@editorialapp/datatools/json"
import * as dirname from '@editorialapp/datatools/dirname'
import { readDirs } from '@editorialapp/datatools/fs'

import {
    from_presentation_to_votewa,
    from_votewa_to_presentation,
    presentation_order
} from './lookup.js'

const source_data_directory = dirname.join(import.meta.url, 'source_data/')
const processed_data_directory = dirname.join(import.meta.url, 'processed_data/')

const results_files = await readDirs(path.join(source_data_directory, 'results'), { readFiles: true })
const overview_files = await readDirs(path.join(source_data_directory, 'overview'), { readFiles: true })
const metadata = await readJson(path.join(source_data_directory, 'metadata.json'))

const overview_lookup = {}
for (const file of overview_files) {
    const parsed_filename = parse_filename(file.name)
    overview_lookup[`${parsed_filename.month}_${parsed_filename.day}`] = JSON.parse(file.file)
}

const latest_filename = get_latest_filename(results_files)

for (const file of results_files) {
    const parsed_csv = parse_csv(file.file)
    const parsed_filename = parse_filename(file.name)
    const overview_key = `${parsed_filename.month}_${parsed_filename.day}`
    const overview = overview_lookup[overview_key]

    const results = create_results({
        parsed_csv,
        overview
    })

    const filename = `${parsed_filename.date}_${parsed_filename.county}_${parsed_filename.month}_${parsed_filename.day}`
    await writeJson(path.join(processed_data_directory, `${filename}.json`), results, { minify: false })

    if (filename === latest_filename) {
        await writeJson(path.join(processed_data_directory, 'latest.json'), results, { minify: false })
    }
}

function get_latest_filename (files) {
    const sorted = files.sort((a, b) => {
        const {day: day_a} = parse_filename(a.name)
        const {day: day_b} = parse_filename(b.name)
        return day_b - day_a
    })

    return sorted[0].name
}

function create_results ({ parsed_csv, overview }) {
    const results = {
        overview,
        propositions: [],
        offices: []
    }

    const grouped_results = group_results(parsed_csv)

    for (const [race, candidates] of Object.entries(grouped_results)) {
        const row = {
            Race: candidates[0].Race,
        }
        const title = from_votewa_to_presentation[race]
        const formatted_candidates = (candidates || []).map((candidate) => {
            return format_candidate(candidate)
        }).sort((a, b) => {
            return b.votes - a.votes
        })

        if (race.includes('Proposition')) {
            results.propositions.push(create_row({...row, title, candidates: formatted_candidates, metadata: metadata[title] }))
        } else {
            results.offices.push(create_row({...row, title, candidates: formatted_candidates, metadata: metadata[title] }))
        }
    }

    return results
}

function group_results (results) {
    return results.reduce((grouped, row) => {
        if (!grouped[row.Race]) {
            grouped[row.Race] = []
        }

        grouped[row.Race].push(row)

        return grouped
    }, {})
}

function format_candidate (candidate) {
    return {
        name: candidate.Candidate,
        party: candidate.Party,
        votes: candidate.Votes,
        percentage: candidate.PercentageOfTotalVotes,
        jurisdiction: candidate.JurisdictionName,
    }
}

function create_row (options) {
    return {
        title: options.title,
        candidates: options.candidates,
        metadata: options.metadata
    }
}

function parse_filename (filename) {
    const [date, county, month, day] = filename.split('_')
    return {
        date,
        county,
        month,
        day
    }
}

function parse_csv (csv) {
    const schema = inferSchema(csv)
    const parser = initParser(schema)
    return parser.typedObjs(csv)
}

function get_jurisdiction (race, parsed_csv) {
    const row = parsed_csv.find((row) => {
        return row.Race == race
    })

    return row.JurisdictionName
}

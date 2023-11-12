import * as path from 'path'
import Database from 'better-sqlite3'
import { markdownDirectoryToTable } from '@editorialapp/datatools';
import { join } from '@editorialapp/datatools/dirname'
import { writeJson } from '@editorialapp/datatools/json'

const dataDirectory = join(import.meta.url, '../src/data');
const postsDirectory = path.join(dataDirectory, 'posts');
const topicsDirectory = path.join(dataDirectory, 'topics');
const linksDirectory = path.join(dataDirectory, 'links');
const postsJsonFilepath = path.join(dataDirectory, 'posts.json');
const topicsJsonFilepath = path.join(dataDirectory, 'topics.json');
const linksJsonFilepath = path.join(dataDirectory, 'links.json');

const db = new Database(':memory:')

await markdownDirectoryToTable({
    directoryFilepath: postsDirectory,
    tableName: 'posts',
    db,
    sanitize: false,
    columns: {
        title: 'TEXT',
        slug: 'TEXT',
        author: 'TEXT',
        author_slug: 'TEXT',
        created: 'INT64',
        updated: 'INT64',
        topics: 'TEXT[]',
        content: 'TEXT',
        promoted: 'BOOLEAN',
        published: 'BOOLEAN',
    }
})

await markdownDirectoryToTable({
    directoryFilepath: topicsDirectory,
    tableName: 'topics',
    db,
    sanitize: false,
    columns: {
        title: 'TEXT',
        slug: 'TEXT',
        content: 'TEXT',
        promoted: 'BOOLEAN',
        published: 'BOOLEAN',
    }
})

// await markdownDirectoryToTable({
//     directoryFilepath: linksDirectory,
//     tableName: 'links',
//     db,
//     sanitize: false,
//     columns: {
//         title: 'TEXT',
//         slug: 'TEXT',
//         created: 'INT64',
//         updated: 'INT64',
//         content: 'TEXT',
//         topics: 'TEXT[]',
//         promoted: 'BOOLEAN',
//         published: 'BOOLEAN',
//     }
// })

const posts = db.prepare('SELECT * FROM posts where published = True ORDER BY created DESC;').all()
const topics = db.prepare('SELECT * FROM topics where published = True;').all()
// const links = db.prepare('SELECT * FROM links ORDER BY created DESC;').all()

await writeJson(postsJsonFilepath, posts)
await writeJson(topicsJsonFilepath, topics)
// await writeJson(linksJsonFilepath, links)

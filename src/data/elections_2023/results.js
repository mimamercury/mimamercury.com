const prefers_independent = 'Prefers Independent Party'
const prefers_republican = 'Prefers Republican Party'
const prefers_democratic = 'Prefers Democratic Party'

const locations = {
    thurston: {
        name: 'Thurston County',
        type: 'County',
    },
    olympia: {
        name: 'Olympia',
        type: 'City',
    },
    tumwater: {
        name: 'Tumwater',
        type: 'City',
    },
    lacey: {
        name: 'Lacey',
        type: 'City',
    },
    tenino: {
        name: 'Tenino',
        type: 'City',
    },
    yelm: {
        name: 'Yelm',
        type: 'City',
    },
    rainier: {
        name: 'Rainier',
        type: 'City',
    },
    bucoda: {
        name: 'Bucoda',
        type: 'City',
    },
    rochester: {
        name: 'Rochester',
        type: 'City',
    },
    grand_mound: {
        name: 'Grand Mound',
        type: 'City',
    },
    port_of_olympia: {
        name: 'Port of Olympia',
        type: 'Port',
    },
}

const school_districts = {
    centralia: {
        name: 'Centralia School District No. 401-L'
    },
    griffin: {
        name: 'Griffin School District No. 324'
    },
    north_thurston: {
        name: 'North Thurston Public Schools'
    },
    olympia: {
        name: 'Olympia School District No. 111'
    },
    rainier: {
        name: 'Rainier School District No. 307'
    },
    rochester: {
        name: 'Rochester School District No. 401'
    },
    tenino: {
        name: 'Tenino School District No. 402'
    },
    tumwater: {
        name: 'Tumwater School District No. 33'
    },
    yelm: {
        name: 'Yelm Community Schools'
    }
}


const fire = {
    lacey: {
        name: 'Fire District No. 3',
        location: locations.lacey,
    },
    east_olympia: {
        name: 'Fire District No. 6',
        location: locations.olympia,
    },
    south_bay: {
        name: 'Fire District No. 8',
        location: locations.tumwater,
    },
    mclane_black_lake: {
        name: 'Fire Protection District No. 9',
    },
}

export const results = {
        overview: {
            title:'Total results',
            total_ballots: 41138,
            total_ballots_blank: 12,
        },
        propositions: [
            {
                title: 'Proposition No. 1',
                description: 'Sales and use tax for law enforcement protection, corresponding prosecution and public defense services, and elections security.',
                approved: 22312,
                rejected: 16250,
                contest_totals: 41138,
                overvotes: 2,
                undervotes: 2574
            },
        ],
        offices: [
            {
                title: 'County Commissioner, District No. 4',
                description: 'One year unexpired term',
                location: locations.thurston,
                overvotes: 2,
                undervotes: 2018,
                contest_totals: 41138,
                candidates: [
                    {
                        name: 'Vivian Eason',
                        party: prefers_independent,
                        votes: 19905,
                    },
                    {
                        name: 'Wayne Fournier',
                        party: prefers_democratic,
                        votes: 19078,
                    },
                    {
                        name: 'Write-in',
                        votes: 135,
                    }
                ]
            },
            {
                title: 'County Commissioner, District No. 5', 
                description: 'Three year unexpired term',
                location: locations.thurston,
                overvotes: 0,
                undervotes: 1845,
                contest_totals: 0,
                candidates: [
                    {
                        name: 'Emily Clouse',
                        party: prefers_democratic,
                        votes: 23095,
                    },
                    {
                        name: 'Terry S. Ballard',
                        party: 'States No Party Preference',
                        votes: 16065,
                    },
                    {
                        name: 'Write-in',
                        votes: 133,
                    }
                ]
            },
            {
                title: 'Port Commissioner, District No. 1',
                description: 'Four year term',
                location: locations.port_of_olympia,
                overvotes: 0,
                undervotes: 2732,
                contest_totals: 41138,
                candidates: [
                    {
                        name: 'Jasmine Vasavada',
                        party: null,
                        votes: 19240,
                    },
                    {
                        name: 'Bill McGregor',
                        party: null,
                        votes: 19018,
                    },
                    {
                        name: 'Write-in',
                        votes: 148,
                    }
                ]
            },
            {
                title: 'Port Commissioner, District No. 4', 
                description: 'Two or four year term',
                location: locations.port_of_olympia,
                overvotes: 0,
                undervotes: 3112,
                contest_totals: 0,
                candidates: [
                    {
                        name: 'Rose Chiu Gunderson',
                        party: null,
                        votes: 18782,
                    },
                    {
                        name: 'Maggie Sanders',
                        party: null,
                        votes: 19056,
                    },
                    {
                        name: 'Write-in',
                        votes: 188,
                    }
                ]
            },
            {
                title: 'Port Commissioner, District No. 5', 
                description: 'Two or four year term',
                location: locations.port_of_olympia,
                overvotes: 0,
                undervotes: 0,
                contest_totals: 0,
                candidates: [
                    {
                        name: 'Sarah Tonge',
                        party: null,
                        votes: 19516,
                    },
                    {
                        name: 'Troy Kirby',
                        party: null,
                        votes: 18190,
                    },
                    {
                        name: 'Write-in',
                        votes: 160,
                    }
                ]
            },
            {
                title: 'Mayor', 
                description: 'Two year unexpired term',
                location: locations.bucoda,
                overvotes: 0,
                undervotes: 2,
                contest_totals: 46,
                candidates: [
                    {
                        name: 'Robert F. Gordon',
                        party: null,
                        votes: 44,
                    },
                    {
                        name: 'Write-in',
                        votes: 0,
                    }
                ]
            },
            {
                title: 'Town Council Position No. 1',
                description: 'Short + four year term',
                location: locations.bucoda,
                overvotes: 0,
                undervotes: 8,
                contest_totals: 46,
                candidates: [
                    {
                        name: 'Callie Carpenter',
                        party: null,
                        votes: 37,
                    },
                    {
                        name: '',
                        party: null,
                        votes: 0,
                    },
                    {
                        name: 'Write-in',
                        votes: 1,
                    }
                ]
            },
            {
                title: 'Town Council Position No. 2',
                description: 'Four year term',
                location: locations.bucoda,
                overvotes: 0,
                undervotes: 9,
                contest_totals: 46,
                candidates: [
                    {
                        name: 'Steven Lyle',
                        party: null,
                        votes: 36,
                    },
                    {
                        name: '',
                        party: null,
                        votes: 0,
                    },
                    {
                        name: 'Write-in',
                        votes: 1,
                    }
                ]
            },
            {
                title: 'Town Council Position No. 4',
                description: 'Four year term',
                location: locations.bucoda,
                overvotes: 0,
                undervotes: 8,
                contest_totals: 46,
                candidates: [
                    {
                        name: 'Michelle Layton',
                        party: null,
                        votes: 38,
                    },
                    {
                        name: 'Write-in',
                        votes: 0,
                    }
                ]
            },
            {
                title: 'Town Council Position No. 5',
                description: 'Two year unexpired term',
                location: locations.bucoda,
                overvotes: 0,
                undervotes: 7,
                contest_totals: 46,
                candidates: [
                    {
                        name: 'Kiersten Presley',
                        party: null,
                        votes: 39,
                    },
                    {
                        name: 'Write-in',
                        votes: 0,
                    }
                ]
            },
            {
                title: 'City Council Position No. 1',
                description: 'Four year term',
                location: locations.lacey,
                overvotes: 0,
                undervotes: 1246,
                contest_totals: 6533,
                candidates: [
                    {
                        name: 'Malcolm Miller',
                        party: null,
                        votes: 5163,
                    },
                    {
                        name: 'Write-in',
                        votes: 124,
                    }
                ]
            },
            {
                title: 'City Council Position No. 2',
                description: 'Four year term',
                location: locations.lacey,
                overvotes: 0,
                undervotes: 384,
                contest_totals: 6533,
                candidates: [
                    {
                        name: 'Spencer Zeman',
                        party: null,
                        votes: 2617,
                    },
                    {
                        name: 'Lenny Greenstein',
                        party: null,
                        votes: 3501,
                    },
                    {
                        name: 'Write-in',
                        votes: 31,
                    }
                ]
            },
            {
                title: 'City Council Position No. 3',
                description: 'Four year term',
                location: locations.lacey,
                overvotes: 0,
                undervotes: 412,
                contest_totals: 6533,
                candidates: [
                    {
                        name: 'Nicolas Dunning',
                        party: null,
                        votes: 3927,
                    },
                    {
                        name: 'Ed Kunkel',
                        party: null,
                        votes: 2153,
                    },
                    {
                        name: 'Write-in',
                        votes: 41,
                    }
                ]
            },
            {
                title: 'Mayor',
                description: 'Four year term',
                location: locations.olympia,
                overvotes: 0,
                undervotes: 236,
                contest_totals: 8330,
                candidates: [
                    {
                        name: 'Dontae Payne',
                        party: null,
                        votes: 5425,
                    },
                    {
                        name: 'David Ross',
                        party: null,
                        votes: 2626,
                    },
                    {
                        name: 'Write-in',
                        votes: 43,
                    }
                ]
            },
            {
                title: 'City Council Position No. 2',
                description: 'Four year term',
                location: locations.olympia,
                overvotes: 0,
                undervotes: 2075,
                contest_totals: 0,
                candidates: [
                    {
                        name: 'Yen Huynh',
                        party: null,
                        votes: 6013,
                    },
                    {
                        name: 'Write-in',
                        votes: 242,
                    }
                ]
            },
            {
                title: 'City Council Position No. 3',
                description: 'Four year term',
                location: locations.olympia,
                overvotes: 0,
                undervotes: 2060,
                contest_totals: 8330,
                candidates: [
                    {
                        name: 'Dani Madrone',
                        party: null,
                        votes: 6037,
                    },
                    {
                        name: 'Write-in',
                        votes: 233,
                    }
                ]
            },
            {
                title: 'City Council Position No. 2',
                description: 'Four year term',
                location: locations.rainier,
                overvotes: 0,
                undervotes: 14,
                contest_totals: 278,
                candidates: [
                    {
                        name: 'Damion Green',
                        party: null,
                        votes: 114,
                    },
                    {
                        name: 'Ryan Roth',
                        party: null,
                        votes: 148,
                    },
                    {
                        name: 'Write-in',
                        votes: 2,
                    }
                ]
            },
            {
                title: 'City Council Position No. 4',
                description: 'Four year term',
                location: locations.rainier,
                overvotes: 0,
                undervotes: 64,
                contest_totals: 278,
                candidates: [
                    {
                        name: 'Ron Kemp',
                        party: null,
                        votes: 208,
                    },
                    {
                        name: 'Write-in',
                        votes: 6,
                    }
                ]
            },
            {
                title: 'Mayor',
                description: 'Four year term',
                location: locations.tenino,
                overvotes: 0,
                undervotes: 5,
                contest_totals: 267,
                candidates: [
                    {
                        name: 'David Watterson',
                        party: null,
                        votes: 131,
                    },
                    {
                        name: 'Linda Gotovac',
                        party: null,
                        votes: 131,
                    },
                    {
                        name: 'Write-in',
                        votes: 0,
                    }
                ]
            },
            {
                title: 'City Council Position No. 2',
                description: 'Four year term',
                location: locations.tenino,
                overvotes: 0,
                undervotes: 61,
                contest_totals: 267,
                candidates: [
                    {
                        name: 'Elaine Klamn',
                        party: null,
                        votes: 200,
                    },
                    {
                        name: 'Write-in',
                        votes: 6,
                    }
                ]
            },
            {
                title: 'City Council Position No. 5',
                description: 'Four year term',
                location: locations.tenino,
                overvotes: 0,
                undervotes: 67,
                contest_totals: 267,
                candidates: [
                    {
                        name: 'Jeff Eisel',
                        party: null,
                        votes: 196
                    },
                    {
                        name: 'Write-in',
                        votes: 4,
                    }
                ]
            },
            {
                title: 'City Council Position No. 1',
                description: 'Four year term',
                location: locations.tumwater,
                overvotes: 0,
                undervotes: 966,
                contest_totals: 3501,
                candidates: [
                    {
                        name: 'Leatta Dahlhoff',
                        party: null,
                        votes: 2479,
                    },
                    {
                        name: 'Write-in',
                        votes: 56,
                    }
                ]
            },
            {
                title: 'City Council Position No. 2',
                description: 'Four year term',
                location: locations.tumwater,
                overvotes: 0,
                undervotes: 926,
                contest_totals: 3501,
                candidates: [
                    {
                        name: 'Angela Jefferson',
                        party: null,
                        votes: 2529,
                    },
                    {
                        name: 'Write-in',
                        votes: 46,
                    }
                ]
            },
            {
                title: 'City Council Position No. 3',
                description: 'Four year term',
                location: locations.tumwater,
                overvotes: 0,
                undervotes: 422,
                contest_totals: 3501,
                candidates: [
                    {
                        name: 'Doris Atkinson',
                        party: null,
                        votes: 493,
                    },
                    {
                        name: 'Joan Cathey',
                        party: null,
                        votes: 2556,
                    },
                    {
                        name: 'Write-in',
                        votes: 30,
                    }
                ]
            },
            {
                title: 'City Council Position No. 7',
                description: 'Four year term',
                location: locations.tumwater,
                overvotes: 0,
                undervotes: 265,
                contest_totals: 3501,
                candidates: [
                    {
                        name: 'Andrea McGhee',
                        party: null,
                        votes: 1563,
                    },
                    {
                        name: 'Kelly Von Holtz',
                        party: null,
                        votes: 1660,
                    },
                    {
                        name: 'Write-in',
                        votes: 13,
                    }
                ]
            },
            {
                title: 'City Council Position No. 1',
                description: 'Four year term',
                location: locations.yelm,
                overvotes: 0,
                undervotes: 31,
                contest_totals: 615,
                candidates: [
                    {
                        name: 'Stephanie Kangiser',
                        party: null,
                        votes: 293,
                    },
                    {
                        name: 'Tracey Wood',
                        party: null,
                        votes: 288,
                    },
                    {
                        name: 'Write-in',
                        votes: 3,
                    }
                ]
            },
            {
                title: 'City Council Position No. 2',
                description: 'Short + four year term',
                location: locations.yelm,
                overvotes: 0,
                undervotes: 36,
                contest_totals: 615,
                candidates: [
                    {
                        name: 'Joseph Dale Richardson',
                        party: null,
                        votes: 294,
                    },
                    {
                        name: 'Jerry Toompas',
                        party: null,
                        votes: 280,
                    },
                    {
                        name: 'Write-in',
                        votes: 5,
                    }
                ]
            },
            {
                title: 'City Council Position No. 6',
                description: 'Short + four year term',
                location: locations.yelm,
                overvotes: 0,
                undervotes: 34,
                contest_totals: 615,
                candidates: [
                    {
                        name: 'Trevor Palmer',
                        party: null,
                        votes: 287,
                    },
                    {
                        name: 'Ashley Lea Brooks',
                        party: null,
                        votes: 290,
                    },
                    {
                        name: 'Write-in',
                        votes: 0,
                    }
                ]
            },
            {
                title: 'School Board Director, Position No. 2',
                description: 'Four year term',
                location: school_districts.centralia,
                overvotes: 0,
                undervotes: 17,
                contest_totals: 67,
                candidates: [
                    {
                        name: 'Maritza Bravo',
                        party: null,
                        votes: 48,
                    },
                    {
                        name: 'Write-in',
                        votes: 2,
                    }
                ]
            },
            {
                title: 'School Board Director, Position No. 3',
                description: 'Four year term',
                location: school_districts.centralia,
                overvotes: 0,
                undervotes: 20,
                contest_totals: 67,
                candidates: [
                    {
                        name: 'Andrea Ware',
                        party: null,
                        votes: 45,
                    },
                    {
                        name: 'Write-in',
                        votes: 2
                    }
                ]
            },
            {
                title: 'School Board Director, Position No. 4',
                description: 'Four year term',
                location: school_districts.centralia,
                overvotes: 0,
                undervotes: 3,
                contest_totals: 67,
                candidates: [
                    {
                        name: 'Mandi McDougall',
                        party: null,
                        votes: 22,
                    },
                    {
                        name: 'Sarah Holmes',
                        party: null,
                        votes: 42,
                    },
                    {
                        name: 'Write-in',
                        votes: 0,
                    }
                ]
            },
            {
                title: 'School Board Director, Position No. 1',
                description: 'Four year term',
                location: school_districts.griffin,
                overvotes: 0,
                undervotes: 78,
                contest_totals: 1483,
                candidates: [
                    {
                        name: 'Matt Dorcy',
                        party: null,
                        votes: 624,
                    },
                    {
                        name: 'Tesa Frevert',
                        party: null,
                        votes: 776,
                    },
                    {
                        name: 'Write-in',
                        votes: 0,
                    }
                ]
            },
            {
                title: 'School Board Director, Position No. 2',
                description: 'Four year term',
                location: school_districts.griffin,
                overvotes: 0,
                undervotes: 402,
                contest_totals: 1483,
                candidates: [
                    {
                        name: 'Emma Rose',
                        party: null,
                        votes: 1047,
                    },
                    {
                        name: 'Write-in',
                        votes: 34,
                    }
                ]
            },
            {
                title: 'School Board Director, Position No. 3',
                description: 'Four year term',
                location: school_districts.griffin,
                overvotes: 0,
                undervotes: 172,
                contest_totals: 1483,
                candidates: [
                    {
                        name: 'David Kangiser',
                        party: null,
                        votes: 549,
                    },
                    {
                        name: 'Blair Baker',
                        party: null,
                        votes: 747,
                    },
                    {
                        name: 'Write-in',
                        votes: 15,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 1',
                description: 'Four year term',
                location: school_districts.north_thurston,
                overvotes: 0,
                undervotes: 1120,
                contest_totals: 62,
                candidates: [
                    {
                        name: 'Veronica Shriver',
                        party: null,
                        votes: 6047,
                    },
                    {
                        name: 'Gretchen Maliska',
                        party: null,
                        votes: 6832,
                    },
                    {
                        name: 'Write-in',
                        votes: 62,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 4',
                description: 'Four year term',
                location: school_districts.north_thurston,
                overvotes: 0,
                undervotes: 1187,
                contest_totals: 0,
                candidates: [
                    {
                        name: 'Stephanie Scott',
                        party: null,
                        votes: 6265,
                    },
                    {
                        name: 'Esperanza A. Badillo-Diiorio',
                        party: null,
                        votes: 6520,
                    },
                    {
                        name: 'Write-in',
                        votes: 89,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 5',
                description: 'Four year term',
                location: school_districts.north_thurston,
                overvotes: 0,
                undervotes: 1066,
                contest_totals: 14061,
                candidates: [
                    {
                        name: 'Michelle J. Gipson',
                        party: null,
                        votes: 6585,
                    },
                    {
                        name: 'David G. Newkirk',
                        party: null,
                        votes: 6356,
                    },
                    {
                        name: 'Write-in',
                        votes: 54,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 1',
                description: 'Four year term',
                location: school_districts.olympia,
                overvotes: 1,
                undervotes: 768,
                contest_totals: 11617,
                candidates: [
                    {
                        name: 'Maria R. Flores',
                        party: null,
                        votes: 7044,
                    },
                    {
                        name: 'Talauna Reed',
                        party: null,
                        votes: 3421,
                    },
                    {
                        name: 'Write-in',
                        votes: 383,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 2',
                description: 'Four year term',
                location: school_districts.olympia,
                overvotes: 0,
                undervotes: 746,
                contest_totals: 11617,
                candidates: [
                    {
                        name: 'Jess Tourtellotte-Palumbo',
                        party: null,
                        votes: 6087,
                    },
                    {
                        name: 'Frank Durocher',
                        party: null,
                        votes: 4748,
                    },
                    {
                        name: 'Write-in',
                        votes: 36,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 4',
                description: 'Four year term',
                location: school_districts.olympia,
                overvotes: 0,
                undervotes: 839,
                contest_totals: 11617,
                candidates: [
                    {
                        name: 'Hilary Seidel',
                        party: null,
                        votes: 6557,
                    },
                    {
                        name: 'Leslie Van Leishout',
                        party: null,
                        votes: 4151,
                    },
                    {
                        name: 'Write-in',
                        votes: 70,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 1',
                description: 'Four year term',
                location: school_districts.rainier,
                overvotes: 0,
                undervotes: 96,
                contest_totals: 824,
                candidates: [
                    {
                        name: 'Amanda Siemandel',
                        party: null,
                        votes: 427,
                    },
                    {
                        name: 'Aaron Lang',
                        party: null,
                        votes: 296,
                    },
                    {
                        name: 'Write-in',
                        votes: 0,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 2',
                description: 'Four year term',
                location: school_districts.rainier,
                overvotes: 0,
                undervotes: 73,
                contest_totals: 824,
                candidates: [
                    {
                        name: 'Jerry F. Sprouffske',
                        party: null,
                        votes: 420,
                    },
                    {
                        name: 'Jon Palmer',
                        party: null,
                        votes: 326,
                    },
                    {
                        name: 'Write-in',
                        votes: 5,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 3',
                description: 'Four year term',
                location: school_districts.rainier,
                overvotes: 0,
                undervotes: 75,
                contest_totals: 824,
                candidates: [
                    {
                        name: 'Dana Morgan Spivey',
                        party: null,
                        votes: 542,
                    },
                    {
                        name: 'Brian Hackethal',
                        party: null,
                        votes: 205,
                    },
                    {
                        name: 'Write-in',
                        votes: 2,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 2',
                description: 'Four year term',
                location: school_districts.rochester,
                overvotes: 0,
                undervotes: 178,
                contest_totals: 1934,
                candidates: [
                    {
                        name: 'Grant Rodeheaver',
                        party: null,
                        votes: 1115,
                    },
                    {
                        name: 'Wava Garza',
                        party: null,
                        votes: 631,
                    },
                    {
                        name: 'Write-in',
                        votes: 10,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 3',
                description: 'Four year term',
                location: school_districts.rochester,
                overvotes: 0,
                undervotes: 172,
                contest_totals: 1934,
                candidates: [
                    {
                        name: 'Penelope Mena',
                        party: null,
                        votes: 736,
                    },
                    {
                        name: 'Susie Hawes',
                        party: null,
                        votes: 1013,
                    },
                    {
                        name: 'Write-in',
                        votes: 13,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 4',
                description: 'Four year term',
                location: school_districts.rochester,
                overvotes: 0,
                undervotes: 198,
                contest_totals: 1934,
                candidates: [
                    {
                        name: 'James Neil Turner',
                        party: null,
                        votes: 870,
                    },
                    {
                        name: 'Michael L. Morrow',
                        party: null,
                        votes: 854,
                    },
                    {
                        name: 'Write-in',
                        votes: 12,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 2',
                description: 'Four year term',
                location: school_districts.tenino,
                overvotes: 0,
                undervotes: 153,
                contest_totals: 1779,
                candidates: [
                    {
                        name: 'Ryan T. Hilton',
                        party: null,
                        votes: 253,
                    },
                    {
                        name: 'Jennifer Johnson',
                        party: null,
                        votes: 1363,
                    },
                    {
                        name: 'Write-in',
                        votes: 10,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 3',
                description: 'Four year term',
                location: school_districts.tenino,
                overvotes: 0,
                undervotes: 462,
                contest_totals: 1779,
                candidates: [
                    {
                        name: 'Adam Barr',
                        party: null,
                        votes: 1262,
                    },
                    {
                        name: 'Write-in',
                        votes: 55,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 4',
                description: 'Four year term',
                location: school_districts.tenino,
                overvotes: 0,
                undervotes: 399,
                contest_totals: 1779,
                candidates: [
                    {
                        name: 'Jessica Reeves-Rush',
                        party: null,
                        votes: 1348,
                    },
                    {
                        name: 'Write-in',
                        votes: 32,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 1',
                description: 'Two year unexpired term',
                location: school_districts.tumwater,
                overvotes: 0,
                undervotes: 653,
                contest_totals: 6334,
                candidates: [
                    {
                        name: 'Jeff (Cowboy) Curry',
                        party: null,
                        votes: 2109,
                    },
                    {
                        name: 'Jill Tokarczyk Adams',
                        party: null,
                        votes: 3545,
                    },
                    {
                        name: 'Write-in',
                        votes: 27,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 2',
                description: 'Four year term',
                location: school_districts.tumwater,
                overvotes: 0,
                undervotes: 1862,
                contest_totals: 6334,
                candidates: [
                    {
                        name: 'Casey Taylor',
                        party: null,
                        votes: 4221,
                    },
                    {
                        name: 'Write-in',
                        votes: 251,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 3',
                description: 'Four year term',
                location: school_districts.tumwater,
                overvotes: 0,
                undervotes: 1883,
                contest_totals: 6334,
                candidates: [
                    {
                        name: 'Scott Killough',
                        party: null,
                        votes: 4359,
                    },
                    {
                        name: 'Write-in',
                        votes: 92,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 2',
                description: 'Four year term',
                location: school_districts.yelm,
                overvotes: 0,
                undervotes: 310,
                contest_totals: 3039,
                candidates: [
                    {
                        name: 'Eric Heid',
                        party: null,
                        votes: 1124,
                    },
                    {
                        name: 'Casey Shaw',
                        party: null,
                        votes: 1567,
                    },
                    {
                        name: 'Write-in',
                        votes: 38,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 3',
                description: 'Four year term',
                location: school_districts.yelm,
                overvotes: 0,
                undervotes: 262,
                contest_totals: 3039,
                candidates: [
                    {
                        name: 'Allyn Verbal',
                        party: null,
                        votes: 1089,
                    },
                    {
                        name: 'Denise Hendrickson',
                        party: null,
                        votes: 1672,
                    },
                    {
                        name: 'Write-in',
                        votes: 16,
                    }
                ]
            },
            {
                title: 'School Board Director, District No. 5',
                description: 'Four year term',
                location: school_districts.yelm,
                overvotes: 1,
                undervotes: 256,
                contest_totals: 3039,
                candidates: [
                    {
                        name: 'Bill Hauss',
                        party: null,
                        votes: 1573,
                    },
                    {
                        name: 'Karen (Kay) Anderson',
                        party: null,
                        votes: 1190,
                    },
                    {
                        name: 'Write-in',
                        votes: 19,
                    }
                ]
            },
        ]
    }


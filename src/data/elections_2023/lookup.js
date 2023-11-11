const prefers_independent = 'Prefers Independent Party'
const prefers_republican = 'Prefers Republican Party'
const prefers_democratic = 'Prefers Democratic Party'

export const parties = {
    prefers_independent,
    prefers_republican,
    prefers_democratic,
    no_preference: 'States No Party Preference'
}

export const locations = {
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

export const school_districts = {
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


export const fire = {
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
        location: locations.olympia,
    },
    mclane_black_lake: {
        name: 'Fire Protection District No. 9',
        location: locations.olympia,
    },
    district_12: {
        name: 'Fire Protection District No. 12',
        location: locations.tenino,
    },
    griffin: {
        name: 'Fire Protection District No. 13',
        location: locations.thurston,
    },
    bald_hills: {
        name: 'Fire Protection District No. 17',
    },
    southeast_thurston: {
        name: 'SE Thurston Fire Authority',
    },
    west_thurston: {
        name: 'West Thurston Regional Fire Authority',
    },
    west_thurston_littlerock: {
        name: 'West Thurston Regional Fire Authority (Littlerock)',
    },
}

export const parks = {
    tanglewilde: {
        name: 'Tanglewilde Parks & Recreation District No. 1',
    },
}

export const cemetary = {
    grand_mound: {
        name: 'Cemetery District No. 1',
    },
    yelm: {
        name: 'Cemetery District No. 2',
    }
}

export const from_votewa_to_presentation = {
    "Thurston Proposition No. 1 Sales and Use Tax for Law Enforcement Protection, Corresponding Prosecution and Public Defense Services, and Elections Security": "Proposition No. 1",
    "COMMISSIONER DISTRICT ALL COUNTY Commissioner, District No. 4": "Thurston County County Commissioner, District No. 4",
    "COMMISSIONER DISTRICT ALL COUNTY Commissioner, District No. 5": "Thurston County County Commissioner, District No. 5",
    "PORT OF OLYMPIA Port Commissioner, District No. 1": "Port of Olympia Port Commissioner, District No. 1",
    "PORT OF OLYMPIA Port Commissioner, District No. 4": "Port of Olympia Port Commissioner, District No. 4",
    "PORT OF OLYMPIA Port Commissioner, District No. 5": "Port of Olympia Port Commissioner, District No. 5",
    "Town of Bucoda Mayor": "Bucoda Mayor",
    "Town of Bucoda Town Council, Position No. 1": "Bucoda Town Council Position No. 1",
    "Town of Bucoda Town Council, Position No. 2": "Bucoda Town Council Position No. 2",
    "Town of Bucoda Town Council, Position No. 4": "Bucoda Town Council Position No. 4",
    "Town of Bucoda Town Council, Position No. 5": "Bucoda Town Council Position No. 5",
    "CITY OF LACEY City Council, Position No. 1": "Lacey City Council Position No. 1",
    "CITY OF LACEY City Council, Position No. 2": "Lacey City Council Position No. 2",
    "CITY OF LACEY City Council, Position No.  3": "Lacey City Council Position No. 3",
    "City of Olympia Mayor": "Olympia Mayor",
    "City of Olympia City Council, Position No. 2": "Olympia City Council Position No. 2",
    "City of Olympia City Council, Position No. 3": "Olympia City Council Position No. 3",
    "City of Rainier City Council, Position No. 2": "Rainier City Council Position No. 2",
    "City of Rainier City Council, Position No. 4": "Rainier City Council Position No. 4",
    "City of Tenino Mayor": "Tenino Mayor",
    "City of Tenino City Council, Position No. 2": "Tenino City Council Position No. 2",
    "City of Tenino City Council, Position No. 5": "Tenino City Council Position No. 5",
    "City of Tumwater City Council, Position No. 1": "Tumwater City Council Position No. 1",
    "City of Tumwater City Council, Position No. 2": "Tumwater City Council Position No. 2",
    "City of Tumwater City Council, Position No. 3": "Tumwater City Council Position No. 3",
    "City of Tumwater City Council, Position No. 7": "Tumwater City Council Position No. 7",
    "CITY OF YELM City Council, Position No. 1": "Yelm City Council Position No. 1",
    "CITY OF YELM City Council, Position No. 2": "Yelm City Council Position No. 2",
    "CITY OF YELM City Council, Position No. 6": "Yelm City Council Position No. 6",
    "CENTRALIA SCHOOL DISTRICT NO. 401 Director Position 2": "Centralia School District No. 401-L School Board Director, Position No. 2",
    "CENTRALIA SCHOOL DISTRICT NO. 401 Director Position 3": "Centralia School District No. 401-L School Board Director, Position No. 3",
    "CENTRALIA SCHOOL DISTRICT NO. 401 Director Position 4": "Centralia School District No. 401-L School Board Director, Position No. 4",
    "Griffin School District No. 324 School Board Director, Position No. 1": "Griffin School District No. 324 School Board Director, Position No. 1",
    "Griffin School District No. 324 School Board Director, Position No. 2": "Griffin School District No. 324 School Board Director, Position No. 2",
    "Griffin School District No. 324 School Board Director, Position No. 3": "Griffin School District No. 324 School Board Director, Position No. 3",
    "NORTH THURSTON PUBLIC SCHOOLS School Board Director, District No. 1": "North Thurston Public Schools School Board Director, District No. 1",
    "NORTH THURSTON PUBLIC SCHOOLS School Board Director, District No. 4": "North Thurston Public Schools School Board Director, District No. 4",
    "NORTH THURSTON PUBLIC SCHOOLS School Board Director, District No. 5": "North Thurston Public Schools School Board Director, District No. 5",
    "Olympia School District No. 111 School Board Director, District No. 1": 'Olympia School District No. 111 School Board Director, District No. 1',
    "Olympia School District No. 111 School Board Director, District No. 2": 'Olympia School District No. 111 School Board Director, District No. 2',
    "Olympia School District No. 111 School Board Director, District No. 4": 'Olympia School District No. 111 School Board Director, District No. 4',
    "RAINIER SCHOOL DISTRICT NO. 307 School Board Director, District No. 1": 'Rainier School District No. 307 School Board Director, District No. 1',
    "RAINIER SCHOOL DISTRICT NO. 307 School Board Director, District No. 2": 'Rainier School District No. 307 School Board Director, District No. 2',
    "RAINIER SCHOOL DISTRICT NO. 307 School Board Director, District No. 3": 'Rainier School District No. 307 School Board Director, District No. 3',
    "ROCHESTER SCHOOL DISTRICT NO. 401 School Board Director, District No. 2": 'Rochester School District No. 401 School Board Director, District No. 2',
    "ROCHESTER SCHOOL DISTRICT NO. 401 School Board Director, District No. 3": 'Rochester School District No. 401 School Board Director, District No. 3',
    "ROCHESTER SCHOOL DISTRICT NO. 401 School Board Director, District No. 4": 'Rochester School District No. 401 School Board Director, District No. 4',
    "TENINO SCHOOL DISTRICT NO. 402 School Board Director, District No. 2": 'Tenino School District No. 402 School Board Director, District No. 2',
    "TENINO SCHOOL DISTRICT NO. 402 School Board Director, District No. 3": 'Tenino School District No. 402 School Board Director, District No. 3',
    "TENINO SCHOOL DISTRICT NO. 402 School Board Director, District No. 4": 'Tenino School District No. 402 School Board Director, District No. 4',
    "Tumwater School District No. 033 School Board Director, District No. 1": 'Tumwater School District No. 33 School Board Director, District No. 1',
    "Tumwater School District No. 033 School Board Director, District No. 2": 'Tumwater School District No. 33 School Board Director, District No. 2',
    "Tumwater School District No. 033 School Board Director, District No. 3": 'Tumwater School District No. 33 School Board Director, District No. 3',
    "Yelm Community Schools School Board Director, District No. 2": 'Yelm Community Schools School Board Director, District No. 2',
    "Yelm Community Schools School Board Director, District No. 3": 'Yelm Community Schools School Board Director, District No. 3',
    "Yelm Community Schools School Board Director, District No. 5": 'Yelm Community Schools School Board Director, District No. 5',
    "FIRE PROTECTION DISTRICT NO. 03 - LACEY Fire Commissioner, Position No. 3": 'Fire District No. 3 Fire Commissioner, Position No. 3',
    "FIRE PROTECTION DISTRICT NO. 03 - LACEY Fire Commissioner, Position No. 4": 'Fire District No. 3 Fire Commissioner, Position No. 4',
    "Fire Protection District No. 06 - East Olympia Fire Commissioner, Position No. 3": 'Fire District No. 6 Fire Commissioner, Position No. 3',
    "Fire Protection District No. 08 - South Bay Fire Commissioner, Position No. 1": 'Fire District No. 8 Fire Commissioner, Position No. 1',
    "Fire Protection District No. 08 - South Bay Fire Commissioner, Position No. 2": 'Fire District No. 8 Fire Commissioner, Position No. 2',
    "FIRE PROTECTION DISTRICT NO. 9 - MCLANE BLACK LAKE Fire Commissioner, Position No. 3": 'Fire Protection District No. 9 Fire Commissioner, Position No. 3',
    "FIRE PROTECTION DISTRICT NO. 9 - MCLANE BLACK LAKE Fire Commissioner, Position No.  4": 'Fire Protection District No. 9 Fire Commissioner, Position No. 4',
    "FIRE PROTECTION DISTRICT NO. 9 - MCLANE BLACK LAKE Fire Commissioner, Position No. 5": 'Fire Protection District No. 9 Fire Commissioner, Position No. 5',
    "FIRE PROTECTION DISTRICT 12 Fire Commissioner, Position No. 4": 'Fire Protection District No. 12 Fire Commissioner, Position No. 4',
    "Fire Protection District No. 13 - Griffin Fire Commissioner, Position No. 1": 'Fire Protection District No. 13 Fire Commissioner, Position No. 1',
    "Fire Protection District No. 13 - Griffin Fire Commissioner, Position No. 3": 'Fire Protection District No. 13 Fire Commissioner, Position No. 3',
    "FIRE PROTECTION DISTRICT NO. 17 - BALD HILLS Fire Commissioner, Position No. 1": 'Fire Protection District No. 17 Fire Commissioner, Position No. 1',
    "SE Thurston Fire Authority Sub Region 1 Fire Commissioner, Position No. 2": 'SE Thurston Fire Authority Sub Region 1 Fire Commissioner, Position No. 2',
    "SE Thurston Fire Authority Sub Region 2 Fire Commissioner, Position No. 2 ": 'SE Thurston Fire Authority Sub Region 2 Fire Commissioner, Position No. 2',
    "SE Thurston Fire Authority Sub Region 3 Fire Commissioner, Position No. 1": 'SE Thurston Fire Authority Sub Region 3 Fire Commissioner, Position No. 1',
    "SE Thurston Fire Authority Sub Region 3 Fire Commissioner, Position No. 2": 'SE Thurston Fire Authority Sub Region 3 Fire Commissioner, Position No. 2',
    "WEST THURSTON  REGIONAL FIRE AUTHORITY ROCHESTER Fire Commissioner, Position No. 1": 'West Thurston Regional Fire Authority Fire Commissioner, Position No. 1',
    "WEST THURSTON  REGIONAL FIRE AUTHORITY LITTLEROCK Fire Commissioner, Position No. 2": 'West Thurston Regional Fire Authority (Littlerock) Fire Commissioner, Position No. 2',
    "TANGLEWILDE PARKS &amp; RECREATION DISTRICT NO. 1 Parks &amp; Recreation Commissioner, Position No. 1": 'Tanglewilde Parks & Recreation District No. 1 Parks & Recreation Commissioner, Position No. 1',
    "TANGLEWILDE PARKS &amp; RECREATION DISTRICT NO. 1 Parks &amp; Recreation Commissioner, Position No. 5": 'Tanglewilde Parks & Recreation District No. 1 Parks & Recreation Commissioner, Position No. 5',
    "CEMETERY DISTRICT NO. 1 (GRAND MOUND) Cemetery Commissioner, Position No. 3": 'Cemetery District No. 1 Cemetary Commissioner, Position No. 3',
    "Cemetery District No. 2 (Yelm) Cemetery Commissioner, Position No. 3": 'Cemetery District No. 2 Cemetery Commissioner, Position No. 3'
}

export const from_presentation_to_votewa = {
    "Proposition No. 1": "Thurston Proposition No. 1 Sales and Use Tax for Law Enforcement Protection, Corresponding Prosecution and Public Defense Services, and Elections Security",
    "Thurston County County Commissioner, District No. 4": "COMMISSIONER DISTRICT ALL COUNTY Commissioner, District No. 4",
    "Thurston County County Commissioner, District No. 5": "COMMISSIONER DISTRICT ALL COUNTY Commissioner, District No. 5",
    "Port of Olympia Port Commissioner, District No. 1": "PORT OF OLYMPIA Port Commissioner, District No. 1",
    "Port of Olympia Port Commissioner, District No. 4": "PORT OF OLYMPIA Port Commissioner, District No. 4",
    "Port of Olympia Port Commissioner, District No. 5": "PORT OF OLYMPIA Port Commissioner, District No. 5",
    "Bucoda Mayor": "Town of Bucoda Mayor",
    "Bucoda Town Council Position No. 1": "Town of Bucoda Town Council, Position No. 1",
    "Bucoda Town Council Position No. 2": "Town of Bucoda Town Council, Position No. 2",
    "Bucoda Town Council Position No. 4": "Town of Bucoda Town Council, Position No. 4",
    "Bucoda Town Council Position No. 5": "Town of Bucoda Town Council, Position No. 5",
    "Lacey City Council Position No. 1": "CITY OF LACEY City Council, Position No. 1",
    "Lacey City Council Position No. 2": "CITY OF LACEY City Council, Position No. 2",
    "Lacey City Council Position No. 3": "CITY OF LACEY City Council, Position No.  3",
    "Olympia Mayor": "City of Olympia Mayor",
    "Olympia City Council Position No. 2": "City of Olympia City Council, Position No. 2",
    "Olympia City Council Position No. 3": "City of Olympia City Council, Position No. 3",
    "Rainier City Council Position No. 2": "City of Rainier City Council, Position No. 2",
    "Rainier City Council Position No. 4": "City of Rainier City Council, Position No. 4",
    "Tenino Mayor": "City of Tenino Mayor",
    "Tenino City Council Position No. 2": "City of Tenino City Council, Position No. 2",
    "Tenino City Council Position No. 5": "City of Tenino City Council, Position No. 5",
    "Tumwater City Council Position No. 1": "City of Tumwater City Council, Position No. 1",
    "Tumwater City Council Position No. 2": "City of Tumwater City Council, Position No. 2",
    "Tumwater City Council Position No. 3": "City of Tumwater City Council, Position No. 3",
    "Tumwater City Council Position No. 7": "City of Tumwater City Council, Position No. 7",
    "Yelm City Council Position No. 1": "CITY OF YELM City Council, Position No. 1",
    "Yelm City Council Position No. 2": "CITY OF YELM City Council, Position No. 2",
    "Yelm City Council Position No. 6": "CITY OF YELM City Council, Position No. 6",
    "Centralia School District No. 401-L School Board Director, Position No. 2": "CENTRALIA SCHOOL DISTRICT NO. 401 Director Position 2",
    "Centralia School District No. 401-L School Board Director, Position No. 3": "CENTRALIA SCHOOL DISTRICT NO. 401 Director Position 3",
    "Centralia School District No. 401-L School Board Director, Position No. 4": "CENTRALIA SCHOOL DISTRICT NO. 401 Director Position 4",
    "Griffin School District No. 324 School Board Director, Position No. 1": "Griffin School District No. 324 School Board Director, Position No. 1",
    "Griffin School District No. 324 School Board Director, Position No. 2": "Griffin School District No. 324 School Board Director, Position No. 2",
    "Griffin School District No. 324 School Board Director, Position No. 3": "Griffin School District No. 324 School Board Director, Position No. 3",
    "North Thurston Public Schools School Board Director, District No. 1": "NORTH THURSTON PUBLIC SCHOOLS School Board Director, District No. 1",
    "North Thurston Public Schools School Board Director, District No. 4": "NORTH THURSTON PUBLIC SCHOOLS School Board Director, District No. 4",
    "North Thurston Public Schools School Board Director, District No. 5": "NORTH THURSTON PUBLIC SCHOOLS School Board Director, District No. 5",
    "Olympia School District No. 111 School Board Director, District No. 1": "Olympia School District No. 111 School Board Director, District No. 1",
    "Olympia School District No. 111 School Board Director, District No. 2": "Olympia School District No. 111 School Board Director, District No. 2",
    "Olympia School District No. 111 School Board Director, District No. 4": "Olympia School District No. 111 School Board Director, District No. 4",
    "Rainier School District No. 307 School Board Director, District No. 1": "RAINIER SCHOOL DISTRICT NO. 307 School Board Director, District No. 1",
    "Rainier School District No. 307 School Board Director, District No. 2": "RAINIER SCHOOL DISTRICT NO. 307 School Board Director, District No. 2",
    "Rainier School District No. 307 School Board Director, District No. 3": "RAINIER SCHOOL DISTRICT NO. 307 School Board Director, District No. 3",
    "Rochester School District No. 401 School Board Director, District No. 2": "ROCHESTER SCHOOL DISTRICT NO. 401 School Board Director, District No. 2",
    "Rochester School District No. 401 School Board Director, District No. 3": "ROCHESTER SCHOOL DISTRICT NO. 401 School Board Director, District No. 3",
    "Rochester School District No. 401 School Board Director, District No. 4": "ROCHESTER SCHOOL DISTRICT NO. 401 School Board Director, District No. 4",
    "Tenino School District No. 402 School Board Director, District No. 2": "TENINO SCHOOL DISTRICT NO. 402 School Board Director, District No. 2",
    "Tenino School District No. 402 School Board Director, District No. 3": "TENINO SCHOOL DISTRICT NO. 402 School Board Director, District No. 3",
    "Tenino School District No. 402 School Board Director, District No. 4": "TENINO SCHOOL DISTRICT NO. 402 School Board Director, District No. 4",
    "Tumwater School District No. 33 School Board Director, District No. 1": "Tumwater School District No. 033 School Board Director, District No. 1",
    "Tumwater School District No. 33 School Board Director, District No. 2": "Tumwater School District No. 033 School Board Director, District No. 2",
    "Tumwater School District No. 33 School Board Director, District No. 3": "Tumwater School District No. 033 School Board Director, District No. 3",
    "Yelm Community Schools School Board Director, District No. 2": "Yelm Community Schools School Board Director, District No. 2",
    "Yelm Community Schools School Board Director, District No. 3": "Yelm Community Schools School Board Director, District No. 3",
    "Yelm Community Schools School Board Director, District No. 5": "Yelm Community Schools School Board Director, District No. 5",
    "Fire District No. 3 Fire Commissioner, Position No. 3": "FIRE PROTECTION DISTRICT NO. 03 - LACEY Fire Commissioner, Position No. 3",
    "Fire District No. 3 Fire Commissioner, Position No. 4": "FIRE PROTECTION DISTRICT NO. 03 - LACEY Fire Commissioner, Position No. 4",
    "Fire District No. 6 Fire Commissioner, Position No. 3": "Fire Protection District No. 06 - East Olympia Fire Commissioner, Position No. 3",
    "Fire District No. 8 Fire Commissioner, Position No. 1": "Fire Protection District No. 08 - South Bay Fire Commissioner, Position No. 1",
    "Fire District No. 8 Fire Commissioner, Position No. 2": "Fire Protection District No. 08 - South Bay Fire Commissioner, Position No. 2",
    "Fire Protection District No. 9 Fire Commissioner, Position No. 3": "FIRE PROTECTION DISTRICT NO. 9 - MCLANE BLACK LAKE Fire Commissioner, Position No. 3",
    "Fire Protection District No. 9 Fire Commissioner, Position No. 4": "FIRE PROTECTION DISTRICT NO. 9 - MCLANE BLACK LAKE Fire Commissioner, Position No.  4",
    "Fire Protection District No. 9 Fire Commissioner, Position No. 5": "FIRE PROTECTION DISTRICT NO. 9 - MCLANE BLACK LAKE Fire Commissioner, Position No. 5",
    "Fire Protection District No. 12 Fire Commissioner, Position No. 4": "FIRE PROTECTION DISTRICT 12 Fire Commissioner, Position No. 4",
    "Fire Protection District No. 13 Fire Commissioner, Position No. 1": "Fire Protection District No. 13 - Griffin Fire Commissioner, Position No. 1",
    "Fire Protection District No. 13 Fire Commissioner, Position No. 3": "Fire Protection District No. 13 - Griffin Fire Commissioner, Position No. 3",
    "Fire Protection District No. 17 Fire Commissioner, Position No. 1": "FIRE PROTECTION DISTRICT NO. 17 - BALD HILLS Fire Commissioner, Position No. 1",
    "SE Thurston Fire Authority Sub Region 1 Fire Commissioner, Position No. 2": "SE Thurston Fire Authority Sub Region 1 Fire Commissioner, Position No. 2",
    "SE Thurston Fire Authority Sub Region 2 Fire Commissioner, Position No. 2": "SE Thurston Fire Authority Sub Region 2 Fire Commissioner, Position No. 2 ",
    "SE Thurston Fire Authority Sub Region 3 Fire Commissioner, Position No. 1": "SE Thurston Fire Authority Sub Region 3 Fire Commissioner, Position No. 1",
    "SE Thurston Fire Authority Sub Region 3 Fire Commissioner, Position No. 2": "SE Thurston Fire Authority Sub Region 3 Fire Commissioner, Position No. 2",
    "West Thurston Regional Fire Authority Fire Commissioner, Position No. 1": "WEST THURSTON  REGIONAL FIRE AUTHORITY ROCHESTER Fire Commissioner, Position No. 1",
    "West Thurston Regional Fire Authority (Littlerock) Fire Commissioner, Position No. 2": "WEST THURSTON  REGIONAL FIRE AUTHORITY LITTLEROCK Fire Commissioner, Position No. 2",
    "Tanglewilde Parks & Recreation District No. 1 Parks & Recreation Commissioner, Position No. 1": "TANGLEWILDE PARKS &amp; RECREATION DISTRICT NO. 1 Parks &amp; Recreation Commissioner, Position No. 1",
    "Tanglewilde Parks & Recreation District No. 1 Parks & Recreation Commissioner, Position No. 5": "TANGLEWILDE PARKS &amp; RECREATION DISTRICT NO. 1 Parks &amp; Recreation Commissioner, Position No. 5",
    "Cemetery District No. 1 Cemetary Commissioner, Position No. 3": "CEMETERY DISTRICT NO. 1 (GRAND MOUND) Cemetery Commissioner, Position No. 3",
    "Cemetery District No. 2 Cemetery Commissioner, Position No. 3": "Cemetery District No. 2 (Yelm) Cemetery Commissioner, Position No. 3",
}

export const presentation_order = [
    "Proposition No. 1",
    "Thurston County County Commissioner, District No. 4",
    "Thurston County County Commissioner, District No. 5",
    "Port of Olympia Port Commissioner, District No. 1",
    "Port of Olympia Port Commissioner, District No. 4",
    "Port of Olympia Port Commissioner, District No. 5",
    "Olympia Mayor",
    "Olympia City Council Position No. 2",
    "Olympia City Council Position No. 3",
    "Lacey City Council Position No. 1",
    "Lacey City Council Position No. 2",
    "Lacey City Council Position No. 3",
    "Tumwater City Council Position No. 1",
    "Tumwater City Council Position No. 2",
    "Tumwater City Council Position No. 3",
    "Tumwater City Council Position No. 7",
    "Tenino Mayor",
    "Tenino City Council Position No. 2",
    "Tenino City Council Position No. 5",
    "Yelm City Council Position No. 1",
    "Yelm City Council Position No. 2",
    "Yelm City Council Position No. 6",
    "Bucoda Mayor",
    "Bucoda Town Council Position No. 1",
    "Bucoda Town Council Position No. 2",
    "Bucoda Town Council Position No. 4",
    "Bucoda Town Council Position No. 5",
    "Rainier City Council Position No. 2",
    "Rainier City Council Position No. 4",
    "Centralia School District No. 401-L School Board Director, Position No. 2",
    "Centralia School District No. 401-L School Board Director, Position No. 3",
    "Centralia School District No. 401-L School Board Director, Position No. 4",
    "Griffin School District No. 324 School Board Director, Position No. 1",
    "Griffin School District No. 324 School Board Director, Position No. 2",
    "Griffin School District No. 324 School Board Director, Position No. 3",
    "North Thurston Public Schools School Board Director, District No. 1",
    "North Thurston Public Schools School Board Director, District No. 4",
    "North Thurston Public Schools School Board Director, District No. 5",
    "Olympia School District No. 111 School Board Director, District No. 1",
    "Olympia School District No. 111 School Board Director, District No. 2",
    "Olympia School District No. 111 School Board Director, District No. 4",
    "Rainier School District No. 307 School Board Director, District No. 1",
    "Rainier School District No. 307 School Board Director, District No. 2",
    "Rainier School District No. 307 School Board Director, District No. 3",
    "Rochester School District No. 401 School Board Director, District No. 2",
    "Rochester School District No. 401 School Board Director, District No. 3",
    "Rochester School District No. 401 School Board Director, District No. 4",
    "Tenino School District No. 402 School Board Director, District No. 2",
    "Tenino School District No. 402 School Board Director, District No. 3",
    "Tenino School District No. 402 School Board Director, District No. 4",
    "Tumwater School District No. 33 School Board Director, District No. 1",
    "Tumwater School District No. 33 School Board Director, District No. 2",
    "Tumwater School District No. 33 School Board Director, District No. 3",
    "Yelm Community Schools School Board Director, District No. 2",
    "Yelm Community Schools School Board Director, District No. 3",
    "Yelm Community Schools School Board Director, District No. 5",
    "Fire District No. 3 Fire Commissioner, Position No. 3",
    "Fire District No. 3 Fire Commissioner, Position No. 4",
    "Fire District No. 6 Fire Commissioner, Position No. 3",
    "Fire District No. 8 Fire Commissioner, Position No. 1",
    "Fire District No. 8 Fire Commissioner, Position No. 2",
    "Fire Protection District No. 9 Fire Commissioner, Position No. 3",
    "Fire Protection District No. 9 Fire Commissioner, Position No. 4",
    "Fire Protection District No. 9 Fire Commissioner, Position No. 5",
    "Fire Protection District No. 12 Fire Commissioner, Position No. 4",
    "Fire Protection District No. 13 Fire Commissioner, Position No. 1",
    "Fire Protection District No. 13 Fire Commissioner, Position No. 3",
    "Fire Protection District No. 17 Fire Commissioner, Position No. 1",
    "SE Thurston Fire Authority Sub Region 1 Fire Commissioner, Position No. 2",
    "SE Thurston Fire Authority Sub Region 2 Fire Commissioner, Position No. 2",
    "SE Thurston Fire Authority Sub Region 3 Fire Commissioner, Position No. 1",
    "SE Thurston Fire Authority Sub Region 3 Fire Commissioner, Position No. 2",
    "West Thurston Regional Fire Authority Fire Commissioner, Position No. 1",
    "West Thurston Regional Fire Authority (Littlerock) Fire Commissioner, Position No. 2",
    "Tanglewilde Parks & Recreation District No. 1 Parks & Recreation Commissioner, Position No. 1",
    "Tanglewilde Parks & Recreation District No. 1 Parks & Recreation Commissioner, Position No. 5",
    "Cemetery District No. 1 Cemetary Commissioner, Position No. 3",
    "Cemetery District No. 2 Cemetery Commissioner, Position No. 3",
]

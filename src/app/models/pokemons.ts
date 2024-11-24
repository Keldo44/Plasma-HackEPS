export interface Pokemons {
    "id": 1,
    "name": string,
    "abilities": [
        {
            "ability": {
                "name": string,
                "url": string
            },
            "is_hidden": boolean,
            "slot": number
        },
        ],
    "cries": string,
    "height": number,
    "location_area_encounters": [
            string
    ],
    "evolves_to": {
        "name": string,
        "id": string
    },
    "moves": [
        {
            "name": string,
            "url": string
        },       
    ],
    "species": {
        "name": string,
        "url": string
    },
    "image": string,
    "stats": [
        {
            "base_stat": number,
            "effort": number,
            "stat": {
                "name": string,
                "url": string
            }
        },    
    ],
    "types": [
        {
            "slot": number,
            "type": {
                "name": string,
                "url": string
            }
        },
    ],
    "weight": number,
    "isCaught"?: boolean
}
export interface teams {
        "id": string,
        "name": string,
        "pve_score": number,
        "pvp_score": number,
        "pokedex_score": number,
        "captured_pokemons": [
            {
                "id": string,
                "pokemon_id": number
            }
        ],
        "is_active": true
}
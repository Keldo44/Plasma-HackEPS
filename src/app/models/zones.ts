export interface zones {
        "id": string,
        "name": string,
        "cooldown_period": number,
        "last_requests_by_team": [
            {
                "name": string,
                "timestamp": string
            },
        ]

} 
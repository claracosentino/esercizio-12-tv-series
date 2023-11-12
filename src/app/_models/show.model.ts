export interface ShowSearch {
        "id": number,
        "score": number,
        "url": string,
        "name": string,
        "type": string,
        "language": string,
        "genres": string[],
        "status": string,
        "runtime": number,
        "averageRuntime": number,
        "premiered": string,
        "ended": string,
        "officialSite": string,
        "schedule": {
            "time": string,
            "days": string[]
        },
        "rating": {
            "average": number
        },
        "weight": number,
        "network": {
            "id": number,
            "name": string,
            "country": {
                "name": string,
                "code": string,
                "timezone": string
            },
        "officialSite": string
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": number,
            "thetvdb": number,
            "imdb": string
        },
        "image": {
            "medium": string,
            "original": string
        },
        "summary": string,
        "updated": number,
        "_links": {
            "self": {
                "href": string
            },
            "previousepisode": {
                "href": string
            }
        }
}

export interface Shows {
    "name": string,
    "type": string,
    "language": string,
    "id": number,
    "image": {
        "medium": string,
        "original": string
    },
    "summary": string,
    "network": {
        "id": number,
        "name": string,
        "country": {
            "name": string,
            "code": string,
            "timezone": string
        },
        "officialSite": string
    },
    "schedule": {
        "time": "22:00",
        "days": [
            "Thursday"
        ]
    },
    "status": string,
    "genres": string[],
    "officialSite": string

}


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "character",
        "accessor": "Character",
        "op": "list",
        "method": "GET",
        "path": "/character",
        "args": [],
        "select": {
            "alignment": "v1",
            "ally": "v1",
            "enemy": "v1",
            "film": "v1",
            "name": "v1",
            "page": "v1",
            "page_size": "v1",
            "park_attraction": "v1",
            "short_film": "v1",
            "tv_show": "v1",
            "video_game": "v1"
        },
        "headers": [],
        "query": [
            "page",
            "pageSize",
            "name",
            "films",
            "shortFilms",
            "tvShows",
            "videoGames",
            "parkAttractions",
            "allies",
            "enemies",
            "alignment"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "info": {
                "totalPages": 149,
                "count": 50,
                "previousPage": "https://api.disneyapi.dev/character?page=3",
                "nextPage": "https://api.disneyapi.dev/character?page=5"
            },
            "data": [
                {
                    "_id": 308,
                    "films": [
                        "Tangled",
                        "Tangled: Before Ever After"
                    ],
                    "shortFilms": [
                        "Tangled Ever After",
                        "Hare Peace"
                    ],
                    "tvShows": [
                        "Once Upon a Time",
                        "Tangled: The Series"
                    ],
                    "videoGames": [
                        "Disney Princess Enchanting Storybooks",
                        "Hidden Worlds",
                        "Disney Crossy Road"
                    ],
                    "parkAttractions": [
                        "Celebrate the Magic",
                        "Jingle Bell, Jingle BAM!"
                    ],
                    "allies": [],
                    "enemies": [],
                    "sourceUrl": "https://disney.fandom.com/wiki/Queen_Arianna",
                    "name": "Queen Arianna",
                    "imageUrl": "https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
                    "createdAt": "2021-04-12T01:33:34.458Z",
                    "updatedAt": "2021-04-12T01:33:34.458Z",
                    "url": "https://api.disneyapi.dev/characters/308",
                    "__v": 0
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "character",
        "accessor": "Character",
        "op": "load",
        "method": "GET",
        "path": "/character/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "info": {
                "count": 1
            },
            "data": {
                "_id": 308,
                "films": [
                    "Tangled",
                    "Tangled: Before Ever After"
                ],
                "shortFilms": [
                    "Tangled Ever After",
                    "Hare Peace"
                ],
                "tvShows": [
                    "Once Upon a Time",
                    "Tangled: The Series"
                ],
                "videoGames": [
                    "Disney Princess Enchanting Storybooks",
                    "Hidden Worlds",
                    "Disney Crossy Road"
                ],
                "parkAttractions": [
                    "Celebrate the Magic",
                    "Jingle Bell, Jingle BAM!"
                ],
                "allies": [],
                "enemies": [],
                "name": "Queen Arianna",
                "imageUrl": "https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg",
                "url": "https://api.disneyapi.dev/characters/308"
            }
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map
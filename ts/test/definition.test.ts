import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
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
      "page": 1,
      "page_size": 50,
      "park_attraction": "v1",
      "short_film": "v1",
      "tv_show": "v1",
      "video_game": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
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
    "queryArgs": [
      {
        "name": "alignment",
        "wire": "alignment"
      },
      {
        "name": "ally",
        "wire": "allies"
      },
      {
        "name": "enemy",
        "wire": "enemies"
      },
      {
        "name": "film",
        "wire": "films"
      },
      {
        "name": "name",
        "wire": "name"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "page_size",
        "wire": "pageSize"
      },
      {
        "name": "park_attraction",
        "wire": "parkAttractions"
      },
      {
        "name": "short_film",
        "wire": "shortFilms"
      },
      {
        "name": "tv_show",
        "wire": "tvShows"
      },
      {
        "name": "video_game",
        "wire": "videoGames"
      }
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
    "idField": "_id"
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
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
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
    "idField": "_id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})

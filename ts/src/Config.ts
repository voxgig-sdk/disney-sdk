
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Disney',
        slug: "disney",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.disneyapi.dev",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        character: {
        },
  
    }
  }


  entity = {
    "character": {
      "fields": [
        {
          "name": "alignment",
          "title": "Alignment",
          "type": "`$STRING`",
          "short": "Character alignment (good, bad, neutral, etc.)"
        },
        {
          "name": "allies",
          "title": "Allies",
          "type": "`$ARRAY`",
          "short": "List of character allies"
        },
        {
          "name": "createdAt",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp when the character was added to the database",
          "format": "date-time"
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`"
        },
        {
          "name": "enemies",
          "title": "Enemies",
          "type": "`$ARRAY`",
          "short": "List of character enemies"
        },
        {
          "name": "films",
          "title": "Films",
          "type": "`$ARRAY`",
          "short": "List of films the character appears in"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "short": "Unique identifier for the character"
        },
        {
          "name": "imageUrl",
          "title": "Image Url",
          "type": "`$STRING`",
          "short": "Image URL for the character",
          "format": "uri"
        },
        {
          "name": "info",
          "title": "Info",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the character"
        },
        {
          "name": "parkAttractions",
          "title": "Park Attractions",
          "type": "`$ARRAY`",
          "short": "List of park attractions featuring the character"
        },
        {
          "name": "shortFilms",
          "title": "Short Films",
          "type": "`$ARRAY`",
          "short": "List of short films the character appears in"
        },
        {
          "name": "sourceUrl",
          "title": "Source Url",
          "type": "`$STRING`",
          "short": "Source URL (Disney Wiki) for the character",
          "format": "uri"
        },
        {
          "name": "tvShows",
          "title": "Tv Shows",
          "type": "`$ARRAY`",
          "short": "List of TV shows the character appears in"
        },
        {
          "name": "updatedAt",
          "title": "Updated At",
          "type": "`$STRING`",
          "short": "Timestamp when the character was last updated",
          "format": "date-time"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "API URL for this character",
          "format": "uri"
        },
        {
          "name": "v",
          "title": "V",
          "type": "`$INTEGER`",
          "short": "Version key"
        },
        {
          "name": "videoGames",
          "title": "Video Games",
          "type": "`$ARRAY`",
          "short": "List of video games the character appears in"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "character",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/character",
              "segments": [
                {
                  "lit": "character"
                }
              ],
              "parts": [
                "character"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "alignment",
                    "orig": "alignment",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "ally",
                    "orig": "ally",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "enemy",
                    "orig": "enemy",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "film",
                    "orig": "film",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 50
                  },
                  {
                    "name": "park_attraction",
                    "orig": "park_attraction",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "short_film",
                    "orig": "short_film",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "tv_show",
                    "orig": "tv_show",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "video_game",
                    "orig": "video_game",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "alignment",
                  "ally",
                  "enemy",
                  "film",
                  "name",
                  "page",
                  "page_size",
                  "park_attraction",
                  "short_film",
                  "tv_show",
                  "video_game"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/character/{id}",
              "segments": [
                {
                  "lit": "character"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "character",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}


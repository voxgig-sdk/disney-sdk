
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
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
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
          "short": "Character alignment (good, bad, neutral, etc.)",
          "type": "`$STRING`"
        },
        {
          "name": "allies",
          "short": "List of character allies",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "short": "Timestamp when the character was added to the database",
          "type": "`$STRING`"
        },
        {
          "name": "data",
          "type": "`$OBJECT`"
        },
        {
          "name": "enemies",
          "short": "List of character enemies",
          "type": "`$ARRAY`"
        },
        {
          "name": "films",
          "short": "List of films the character appears in",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the character",
          "type": "`$INTEGER`"
        },
        {
          "format": "uri",
          "name": "imageUrl",
          "short": "Image URL for the character",
          "type": "`$STRING`"
        },
        {
          "name": "info",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "short": "Name of the character",
          "type": "`$STRING`"
        },
        {
          "name": "parkAttractions",
          "short": "List of park attractions featuring the character",
          "type": "`$ARRAY`"
        },
        {
          "name": "shortFilms",
          "short": "List of short films the character appears in",
          "type": "`$ARRAY`"
        },
        {
          "format": "uri",
          "name": "sourceUrl",
          "short": "Source URL (Disney Wiki) for the character",
          "type": "`$STRING`"
        },
        {
          "name": "tvShows",
          "short": "List of TV shows the character appears in",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "short": "Timestamp when the character was last updated",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "url",
          "short": "API URL for this character",
          "type": "`$STRING`"
        },
        {
          "name": "v",
          "short": "Version key",
          "type": "`$INTEGER`"
        },
        {
          "name": "videoGames",
          "short": "List of video games the character appears in",
          "type": "`$ARRAY`"
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
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "alignment",
                    "orig": "alignment",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "ally",
                    "orig": "ally",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "enemy",
                    "orig": "enemy",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "film",
                    "orig": "film",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "park_attraction",
                    "orig": "park_attraction",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "short_film",
                    "orig": "short_film",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "tv_show",
                    "orig": "tv_show",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "video_game",
                    "orig": "video_game",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/character",
              "segments": [
                {
                  "lit": "character"
                }
              ],
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
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "character"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
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
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "character",
                "{id}"
              ]
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


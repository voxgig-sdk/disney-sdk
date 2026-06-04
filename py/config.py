# Disney SDK configuration


def make_config():
    return {
        "main": {
            "name": "Disney",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.disneyapi.dev",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "character": {},
            },
        },
        "entity": {
      "character": {
        "fields": [
          {
            "name": "alignment",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "ally",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "data",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "enemy",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "film",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "image_url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "info",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "park_attraction",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "short_film",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "source_url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "tv_show",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "v",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 16,
          },
          {
            "name": "video_game",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 17,
          },
        ],
        "name": "character",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "alignment",
                      "orig": "alignment",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "ally",
                      "orig": "ally",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "enemy",
                      "orig": "enemy",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "film",
                      "orig": "film",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": 50,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "park_attraction",
                      "orig": "park_attraction",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "short_film",
                      "orig": "short_film",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "tv_show",
                      "orig": "tv_show",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "video_game",
                      "orig": "video_game",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/character",
                "parts": [
                  "character",
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
                    "video_game",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/character/{id}",
                "parts": [
                  "character",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

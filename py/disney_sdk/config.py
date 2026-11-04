# Disney SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Disney",
            "slug": "disney",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "name": "_id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the character",
          },
          {
            "name": "alignment",
            "title": "Alignment",
            "type": "`$STRING`",
            "short": "Character alignment (good, bad, neutral, etc.)",
          },
          {
            "name": "allies",
            "title": "Allies",
            "type": "`$ARRAY`",
            "short": "List of character allies",
          },
          {
            "name": "createdAt",
            "title": "Created At",
            "type": "`$STRING`",
            "short": "Timestamp when the character was added to the database",
            "format": "date-time",
          },
          {
            "name": "data",
            "title": "Data",
            "type": "`$OBJECT`",
          },
          {
            "name": "enemies",
            "title": "Enemies",
            "type": "`$ARRAY`",
            "short": "List of character enemies",
          },
          {
            "name": "films",
            "title": "Films",
            "type": "`$ARRAY`",
            "short": "List of films the character appears in",
          },
          {
            "name": "imageUrl",
            "title": "Image Url",
            "type": "`$STRING`",
            "short": "Image URL for the character",
            "format": "uri",
          },
          {
            "name": "info",
            "title": "Info",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Name of the character",
          },
          {
            "name": "parkAttractions",
            "title": "Park Attractions",
            "type": "`$ARRAY`",
            "short": "List of park attractions featuring the character",
          },
          {
            "name": "shortFilms",
            "title": "Short Films",
            "type": "`$ARRAY`",
            "short": "List of short films the character appears in",
          },
          {
            "name": "sourceUrl",
            "title": "Source Url",
            "type": "`$STRING`",
            "short": "Source URL (Disney Wiki) for the character",
            "format": "uri",
          },
          {
            "name": "tvShows",
            "title": "Tv Shows",
            "type": "`$ARRAY`",
            "short": "List of TV shows the character appears in",
          },
          {
            "name": "updatedAt",
            "title": "Updated At",
            "type": "`$STRING`",
            "short": "Timestamp when the character was last updated",
            "format": "date-time",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "short": "API URL for this character",
            "format": "uri",
          },
          {
            "name": "v",
            "title": "V",
            "type": "`$INTEGER`",
            "short": "Version key",
          },
          {
            "name": "videoGames",
            "title": "Video Games",
            "type": "`$ARRAY`",
            "short": "List of video games the character appears in",
          },
        ],
        "id": {
          "field": "_id",
          "name": "id",
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
                    "lit": "character",
                  },
                ],
                "parts": [
                  "character",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "alignment",
                      "orig": "alignment",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "ally",
                      "orig": "allies",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "enemy",
                      "orig": "enemies",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "film",
                      "orig": "films",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "page_size",
                      "orig": "pageSize",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 50,
                    },
                    {
                      "name": "park_attraction",
                      "orig": "parkAttractions",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "short_film",
                      "orig": "shortFilms",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "tv_show",
                      "orig": "tvShows",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "video_game",
                      "orig": "videoGames",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
                "alias": {
                  "id": "_id",
                },
              },
            ],
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
                    "lit": "character",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "character",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
                "alias": {
                  "id": "_id",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

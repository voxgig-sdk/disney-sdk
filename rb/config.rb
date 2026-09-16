# Disney SDK configuration

module DisneyConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Disney",
        "slug" => "disney",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://api.disneyapi.dev",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "character" => {},
        },
      },
      "entity" => {
        "character" => {
          "fields" => [
            {
              "name" => "alignment",
              "short" => "Character alignment (good, bad, neutral, etc.)",
              "type" => "`$STRING`",
            },
            {
              "name" => "allies",
              "short" => "List of character allies",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "date-time",
              "name" => "createdAt",
              "short" => "Timestamp when the character was added to the database",
              "type" => "`$STRING`",
            },
            {
              "name" => "data",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "enemies",
              "short" => "List of character enemies",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "films",
              "short" => "List of films the character appears in",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the character",
              "type" => "`$INTEGER`",
            },
            {
              "format" => "uri",
              "name" => "imageUrl",
              "short" => "Image URL for the character",
              "type" => "`$STRING`",
            },
            {
              "name" => "info",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "name",
              "short" => "Name of the character",
              "type" => "`$STRING`",
            },
            {
              "name" => "parkAttractions",
              "short" => "List of park attractions featuring the character",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "shortFilms",
              "short" => "List of short films the character appears in",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "uri",
              "name" => "sourceUrl",
              "short" => "Source URL (Disney Wiki) for the character",
              "type" => "`$STRING`",
            },
            {
              "name" => "tvShows",
              "short" => "List of TV shows the character appears in",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "date-time",
              "name" => "updatedAt",
              "short" => "Timestamp when the character was last updated",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "url",
              "short" => "API URL for this character",
              "type" => "`$STRING`",
            },
            {
              "name" => "v",
              "short" => "Version key",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "videoGames",
              "short" => "List of video games the character appears in",
              "type" => "`$ARRAY`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "character",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "alignment",
                        "orig" => "alignment",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "ally",
                        "orig" => "ally",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "enemy",
                        "orig" => "enemy",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "film",
                        "orig" => "film",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "name",
                        "orig" => "name",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 50,
                        "kind" => "query",
                        "name" => "page_size",
                        "orig" => "page_size",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "park_attraction",
                        "orig" => "park_attraction",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "short_film",
                        "orig" => "short_film",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "tv_show",
                        "orig" => "tv_show",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "video_game",
                        "orig" => "video_game",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/character",
                  "segments" => [
                    {
                      "lit" => "character",
                    },
                  ],
                  "select" => {
                    "exist" => [
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
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "character",
                  ],
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/character/{id}",
                  "segments" => [
                    {
                      "lit" => "character",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "character",
                    "{id}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    DisneyFeatures.make_feature(name)
  end
end

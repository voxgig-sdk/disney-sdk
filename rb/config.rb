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
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
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
              "type" => "`$STRING`",
            },
            {
              "name" => "allies",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "createdAt",
              "type" => "`$STRING`",
            },
            {
              "name" => "data",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "enemies",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "films",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "imageUrl",
              "type" => "`$STRING`",
            },
            {
              "name" => "info",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "parkAttractions",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "shortFilms",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "sourceUrl",
              "type" => "`$STRING`",
            },
            {
              "name" => "tvShows",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "updatedAt",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
            {
              "name" => "v",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "videoGames",
              "type" => "`$ARRAY`",
            },
          ],
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
                  "parts" => [
                    "character",
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
                  "parts" => [
                    "character",
                    "{id}",
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

-- Disney SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Disney",
      slug = "disney",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.disneyapi.dev",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["character"] = {},
      },
    },
    entity = {
      ["character"] = {
        ["fields"] = {
          {
            ["name"] = "alignment",
            ["short"] = "Character alignment (good, bad, neutral, etc.)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "allies",
            ["short"] = "List of character allies",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "createdAt",
            ["short"] = "Timestamp when the character was added to the database",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "data",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "enemies",
            ["short"] = "List of character enemies",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "films",
            ["short"] = "List of films the character appears in",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the character",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "imageUrl",
            ["short"] = "Image URL for the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "info",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "parkAttractions",
            ["short"] = "List of park attractions featuring the character",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "shortFilms",
            ["short"] = "List of short films the character appears in",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "sourceUrl",
            ["short"] = "Source URL (Disney Wiki) for the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tvShows",
            ["short"] = "List of TV shows the character appears in",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "updatedAt",
            ["short"] = "Timestamp when the character was last updated",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "API URL for this character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "v",
            ["short"] = "Version key",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "videoGames",
            ["short"] = "List of video games the character appears in",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "character",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "alignment",
                      ["orig"] = "alignment",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "ally",
                      ["orig"] = "ally",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "enemy",
                      ["orig"] = "enemy",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "film",
                      ["orig"] = "film",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 50,
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "park_attraction",
                      ["orig"] = "park_attraction",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "short_film",
                      ["orig"] = "short_film",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "tv_show",
                      ["orig"] = "tv_show",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "video_game",
                      ["orig"] = "video_game",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/character",
                ["parts"] = {
                  "character",
                },
                ["select"] = {
                  ["exist"] = {
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
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/character/{id}",
                ["parts"] = {
                  "character",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config

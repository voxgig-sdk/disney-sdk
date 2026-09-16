"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Disney',
        slug: "disney",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
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
        retry: {
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
        test: {
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
        timeout: {
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
    };
    options = {
        base: "https://api.disneyapi.dev",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            character: {},
        }
    };
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
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map
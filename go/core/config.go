package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Disney",
			"slug": "disney",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.disneyapi.dev",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"character": map[string]any{},
			},
		},
		"entity": map[string]any{
			"character": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "_id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "Unique identifier for the character",
					},
					map[string]any{
						"name": "alignment",
						"title": "Alignment",
						"type": "`$STRING`",
						"short": "Character alignment (good, bad, neutral, etc.)",
					},
					map[string]any{
						"name": "allies",
						"title": "Allies",
						"type": "`$ARRAY`",
						"short": "List of character allies",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "Timestamp when the character was added to the database",
						"format": "date-time",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "enemies",
						"title": "Enemies",
						"type": "`$ARRAY`",
						"short": "List of character enemies",
					},
					map[string]any{
						"name": "films",
						"title": "Films",
						"type": "`$ARRAY`",
						"short": "List of films the character appears in",
					},
					map[string]any{
						"name": "imageUrl",
						"title": "Image Url",
						"type": "`$STRING`",
						"short": "Image URL for the character",
						"format": "uri",
					},
					map[string]any{
						"name": "info",
						"title": "Info",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the character",
					},
					map[string]any{
						"name": "parkAttractions",
						"title": "Park Attractions",
						"type": "`$ARRAY`",
						"short": "List of park attractions featuring the character",
					},
					map[string]any{
						"name": "shortFilms",
						"title": "Short Films",
						"type": "`$ARRAY`",
						"short": "List of short films the character appears in",
					},
					map[string]any{
						"name": "sourceUrl",
						"title": "Source Url",
						"type": "`$STRING`",
						"short": "Source URL (Disney Wiki) for the character",
						"format": "uri",
					},
					map[string]any{
						"name": "tvShows",
						"title": "Tv Shows",
						"type": "`$ARRAY`",
						"short": "List of TV shows the character appears in",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "Timestamp when the character was last updated",
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "API URL for this character",
						"format": "uri",
					},
					map[string]any{
						"name": "v",
						"title": "V",
						"type": "`$INTEGER`",
						"short": "Version key",
					},
					map[string]any{
						"name": "videoGames",
						"title": "Video Games",
						"type": "`$ARRAY`",
						"short": "List of video games the character appears in",
					},
				},
				"id": map[string]any{
					"field": "_id",
					"name": "id",
				},
				"name": "character",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/character",
								"segments": []any{
									map[string]any{
										"lit": "character",
									},
								},
								"parts": []any{
									"character",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "alignment",
											"orig": "alignment",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "ally",
											"orig": "allies",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "enemy",
											"orig": "enemies",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "film",
											"orig": "films",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "page_size",
											"orig": "pageSize",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "park_attraction",
											"orig": "parkAttractions",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "short_film",
											"orig": "shortFilms",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "tv_show",
											"orig": "tvShows",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "video_game",
											"orig": "videoGames",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
								"alias": map[string]any{
									"id": "_id",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/character/{id}",
								"segments": []any{
									map[string]any{
										"lit": "character",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"character",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
								"alias": map[string]any{
									"id": "_id",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

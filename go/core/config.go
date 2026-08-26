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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
						"name": "alignment",
						"short": "Character alignment (good, bad, neutral, etc.)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "allies",
						"short": "List of character allies",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "createdAt",
						"short": "Timestamp when the character was added to the database",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "enemies",
						"short": "List of character enemies",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "films",
						"short": "List of films the character appears in",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the character",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "imageUrl",
						"short": "Image URL for the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "info",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parkAttractions",
						"short": "List of park attractions featuring the character",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "shortFilms",
						"short": "List of short films the character appears in",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sourceUrl",
						"short": "Source URL (Disney Wiki) for the character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tvShows",
						"short": "List of TV shows the character appears in",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "updatedAt",
						"short": "Timestamp when the character was last updated",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "API URL for this character",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "v",
						"short": "Version key",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "videoGames",
						"short": "List of video games the character appears in",
						"type": "`$ARRAY`",
					},
				},
				"name": "character",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "alignment",
											"orig": "alignment",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "ally",
											"orig": "ally",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "enemy",
											"orig": "enemy",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "film",
											"orig": "film",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "park_attraction",
											"orig": "park_attraction",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "short_film",
											"orig": "short_film",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "tv_show",
											"orig": "tv_show",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "video_game",
											"orig": "video_game",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/character",
								"parts": []any{
									"character",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/character/{id}",
								"parts": []any{
									"character",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

// Typed models for the Disney SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Character is the typed data model for the character entity.
type Character struct {
	Alignment *string `json:"alignment,omitempty"`
	Ally *[]any `json:"ally,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Enemy *[]any `json:"enemy,omitempty"`
	Film *[]any `json:"film,omitempty"`
	Id *int `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Info *map[string]any `json:"info,omitempty"`
	Name *string `json:"name,omitempty"`
	ParkAttraction *[]any `json:"park_attraction,omitempty"`
	ShortFilm *[]any `json:"short_film,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	TvShow *[]any `json:"tv_show,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	V *int `json:"v,omitempty"`
	VideoGame *[]any `json:"video_game,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id int `json:"id"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	Alignment *string `json:"alignment,omitempty"`
	Ally *[]any `json:"ally,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Enemy *[]any `json:"enemy,omitempty"`
	Film *[]any `json:"film,omitempty"`
	Id *int `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Info *map[string]any `json:"info,omitempty"`
	Name *string `json:"name,omitempty"`
	ParkAttraction *[]any `json:"park_attraction,omitempty"`
	ShortFilm *[]any `json:"short_film,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	TvShow *[]any `json:"tv_show,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	V *int `json:"v,omitempty"`
	VideoGame *[]any `json:"video_game,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

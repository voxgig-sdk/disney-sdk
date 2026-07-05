// Typed models for the Disney SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  alignment?: string
  ally?: any[]
  created_at?: string
  data?: Record<string, any>
  enemy?: any[]
  film?: any[]
  id?: number
  image_url?: string
  info?: Record<string, any>
  name?: string
  park_attraction?: any[]
  short_film?: any[]
  source_url?: string
  tv_show?: any[]
  updated_at?: string
  url?: string
  v?: number
  video_game?: any[]
}

export interface CharacterLoadMatch {
  id: number
}

export interface CharacterListMatch {
  alignment?: string
  ally?: any[]
  created_at?: string
  data?: Record<string, any>
  enemy?: any[]
  film?: any[]
  id?: number
  image_url?: string
  info?: Record<string, any>
  name?: string
  park_attraction?: any[]
  short_film?: any[]
  source_url?: string
  tv_show?: any[]
  updated_at?: string
  url?: string
  v?: number
  video_game?: any[]
}


// Typed models for the Disney SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  alignment?: string
  allies?: any[]
  createdAt?: string
  data?: Record<string, any>
  enemies?: any[]
  films?: any[]
  id?: number
  imageUrl?: string
  info?: Record<string, any>
  name?: string
  parkAttractions?: any[]
  shortFilms?: any[]
  sourceUrl?: string
  tvShows?: any[]
  updatedAt?: string
  url?: string
  v?: number
  videoGames?: any[]
}

export interface CharacterLoadMatch {
  id: number
}

export interface CharacterListMatch {
  alignment?: string
  allies?: any[]
  createdAt?: string
  data?: Record<string, any>
  enemies?: any[]
  films?: any[]
  id?: number
  imageUrl?: string
  info?: Record<string, any>
  name?: string
  parkAttractions?: any[]
  shortFilms?: any[]
  sourceUrl?: string
  tvShows?: any[]
  updatedAt?: string
  url?: string
  v?: number
  videoGames?: any[]
}


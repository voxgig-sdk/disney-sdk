# frozen_string_literal: true

# Typed models for the Disney SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Character entity data model.
#
# @!attribute [rw] alignment
#   @return [String, nil]
#
# @!attribute [rw] allies
#   @return [Array, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] enemies
#   @return [Array, nil]
#
# @!attribute [rw] films
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] info
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] parkAttractions
#   @return [Array, nil]
#
# @!attribute [rw] shortFilms
#   @return [Array, nil]
#
# @!attribute [rw] sourceUrl
#   @return [String, nil]
#
# @!attribute [rw] tvShows
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] v
#   @return [Integer, nil]
#
# @!attribute [rw] videoGames
#   @return [Array, nil]
Character = Struct.new(
  :alignment,
  :allies,
  :createdAt,
  :data,
  :enemies,
  :films,
  :id,
  :imageUrl,
  :info,
  :name,
  :parkAttractions,
  :shortFilms,
  :sourceUrl,
  :tvShows,
  :updatedAt,
  :url,
  :v,
  :videoGames,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [Integer]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Character#list.
#
# @!attribute [rw] alignment
#   @return [String, nil]
#
# @!attribute [rw] ally
#   @return [String, nil]
#
# @!attribute [rw] enemy
#   @return [String, nil]
#
# @!attribute [rw] film
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] park_attraction
#   @return [String, nil]
#
# @!attribute [rw] short_film
#   @return [String, nil]
#
# @!attribute [rw] tv_show
#   @return [String, nil]
#
# @!attribute [rw] video_game
#   @return [String, nil]
CharacterListMatch = Struct.new(
  :alignment,
  :ally,
  :enemy,
  :film,
  :name,
  :page,
  :page_size,
  :park_attraction,
  :short_film,
  :tv_show,
  :video_game,
  keyword_init: true
)


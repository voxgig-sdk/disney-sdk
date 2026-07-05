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
# @!attribute [rw] ally
#   @return [Array, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] enemy
#   @return [Array, nil]
#
# @!attribute [rw] film
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] info
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] park_attraction
#   @return [Array, nil]
#
# @!attribute [rw] short_film
#   @return [Array, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] tv_show
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] v
#   @return [Integer, nil]
#
# @!attribute [rw] video_game
#   @return [Array, nil]
Character = Struct.new(
  :alignment,
  :ally,
  :created_at,
  :data,
  :enemy,
  :film,
  :id,
  :image_url,
  :info,
  :name,
  :park_attraction,
  :short_film,
  :source_url,
  :tv_show,
  :updated_at,
  :url,
  :v,
  :video_game,
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
#   @return [Array, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] enemy
#   @return [Array, nil]
#
# @!attribute [rw] film
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] info
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] park_attraction
#   @return [Array, nil]
#
# @!attribute [rw] short_film
#   @return [Array, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] tv_show
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] v
#   @return [Integer, nil]
#
# @!attribute [rw] video_game
#   @return [Array, nil]
CharacterListMatch = Struct.new(
  :alignment,
  :ally,
  :created_at,
  :data,
  :enemy,
  :film,
  :id,
  :image_url,
  :info,
  :name,
  :park_attraction,
  :short_film,
  :source_url,
  :tv_show,
  :updated_at,
  :url,
  :v,
  :video_game,
  keyword_init: true
)


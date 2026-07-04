-- Typed models for the Disney SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field alignment? string
---@field ally? table
---@field created_at? string
---@field data? table
---@field enemy? table
---@field film? table
---@field id? number
---@field image_url? string
---@field info? table
---@field name? string
---@field park_attraction? table
---@field short_film? table
---@field source_url? string
---@field tv_show? table
---@field updated_at? string
---@field url? string
---@field v? number
---@field video_game? table

---@class CharacterLoadMatch
---@field id number

---@class CharacterListMatch

local M = {}

return M

-- Typed models for the Disney SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field alignment? string
---@field allies? table
---@field createdAt? string
---@field data? table
---@field enemies? table
---@field films? table
---@field id? number
---@field imageUrl? string
---@field info? table
---@field name? string
---@field parkAttractions? table
---@field shortFilms? table
---@field sourceUrl? string
---@field tvShows? table
---@field updatedAt? string
---@field url? string
---@field v? number
---@field videoGames? table

---@class CharacterLoadMatch
---@field id number

---@class CharacterListMatch
---@field alignment? string
---@field allies? table
---@field createdAt? string
---@field data? table
---@field enemies? table
---@field films? table
---@field id? number
---@field imageUrl? string
---@field info? table
---@field name? string
---@field parkAttractions? table
---@field shortFilms? table
---@field sourceUrl? string
---@field tvShows? table
---@field updatedAt? string
---@field url? string
---@field v? number
---@field videoGames? table

local M = {}

return M

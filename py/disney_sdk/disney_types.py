# Typed models for the Disney SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Character(TypedDict, total=False):
    alignment: str
    allies: list
    createdAt: str
    data: dict
    enemies: list
    films: list
    id: int
    imageUrl: str
    info: dict
    name: str
    parkAttractions: list
    shortFilms: list
    sourceUrl: str
    tvShows: list
    updatedAt: str
    url: str
    v: int
    videoGames: list


class CharacterLoadMatch(TypedDict):
    id: int


class CharacterListMatch(TypedDict, total=False):
    alignment: str
    ally: str
    enemy: str
    film: str
    name: str
    page: int
    page_size: int
    park_attraction: str
    short_film: str
    tv_show: str
    video_game: str

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
    ally: list
    created_at: str
    data: dict
    enemy: list
    film: list
    id: int
    image_url: str
    info: dict
    name: str
    park_attraction: list
    short_film: list
    source_url: str
    tv_show: list
    updated_at: str
    url: str
    v: int
    video_game: list


class CharacterLoadMatch(TypedDict):
    id: int


class CharacterListMatch(TypedDict, total=False):
    alignment: str
    ally: list
    created_at: str
    data: dict
    enemy: list
    film: list
    id: int
    image_url: str
    info: dict
    name: str
    park_attraction: list
    short_film: list
    source_url: str
    tv_show: list
    updated_at: str
    url: str
    v: int
    video_game: list

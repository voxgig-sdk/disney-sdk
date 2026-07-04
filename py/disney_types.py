# Typed models for the Disney SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Character:
    alignment: Optional[str] = None
    ally: Optional[list] = None
    created_at: Optional[str] = None
    data: Optional[dict] = None
    enemy: Optional[list] = None
    film: Optional[list] = None
    id: Optional[int] = None
    image_url: Optional[str] = None
    info: Optional[dict] = None
    name: Optional[str] = None
    park_attraction: Optional[list] = None
    short_film: Optional[list] = None
    source_url: Optional[str] = None
    tv_show: Optional[list] = None
    updated_at: Optional[str] = None
    url: Optional[str] = None
    v: Optional[int] = None
    video_game: Optional[list] = None


@dataclass
class CharacterLoadMatch:
    id: int


@dataclass
class CharacterListMatch:
    alignment: Optional[str] = None
    ally: Optional[list] = None
    created_at: Optional[str] = None
    data: Optional[dict] = None
    enemy: Optional[list] = None
    film: Optional[list] = None
    id: Optional[int] = None
    image_url: Optional[str] = None
    info: Optional[dict] = None
    name: Optional[str] = None
    park_attraction: Optional[list] = None
    short_film: Optional[list] = None
    source_url: Optional[str] = None
    tv_show: Optional[list] = None
    updated_at: Optional[str] = None
    url: Optional[str] = None
    v: Optional[int] = None
    video_game: Optional[list] = None


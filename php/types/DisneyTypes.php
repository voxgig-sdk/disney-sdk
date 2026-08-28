<?php
declare(strict_types=1);

// Typed models for the Disney SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Character entity data model. */
class Character
{
    public ?string $alignment = null;
    public ?array $allies = null;
    public ?string $createdAt = null;
    public ?array $data = null;
    public ?array $enemies = null;
    public ?array $films = null;
    public ?int $id = null;
    public ?string $imageUrl = null;
    public ?array $info = null;
    public ?string $name = null;
    public ?array $parkAttractions = null;
    public ?array $shortFilms = null;
    public ?string $sourceUrl = null;
    public ?array $tvShows = null;
    public ?string $updatedAt = null;
    public ?string $url = null;
    public ?int $v = null;
    public ?array $videoGames = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public int $id;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public ?string $alignment = null;
    public ?string $ally = null;
    public ?string $enemy = null;
    public ?string $film = null;
    public ?string $name = null;
    public ?int $page = null;
    public ?int $page_size = null;
    public ?string $park_attraction = null;
    public ?string $short_film = null;
    public ?string $tv_show = null;
    public ?string $video_game = null;
}


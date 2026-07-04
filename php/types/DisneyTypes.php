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
    public ?array $ally = null;
    public ?string $created_at = null;
    public ?array $data = null;
    public ?array $enemy = null;
    public ?array $film = null;
    public ?int $id = null;
    public ?string $image_url = null;
    public ?array $info = null;
    public ?string $name = null;
    public ?array $park_attraction = null;
    public ?array $short_film = null;
    public ?string $source_url = null;
    public ?array $tv_show = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?int $v = null;
    public ?array $video_game = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public int $id;
}

/** Match filter for Character#list (any subset of Character fields). */
class CharacterListMatch
{
    public ?string $alignment = null;
    public ?array $ally = null;
    public ?string $created_at = null;
    public ?array $data = null;
    public ?array $enemy = null;
    public ?array $film = null;
    public ?int $id = null;
    public ?string $image_url = null;
    public ?array $info = null;
    public ?string $name = null;
    public ?array $park_attraction = null;
    public ?array $short_film = null;
    public ?string $source_url = null;
    public ?array $tv_show = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?int $v = null;
    public ?array $video_game = null;
}


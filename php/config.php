<?php
declare(strict_types=1);

// Disney SDK configuration

class DisneyConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Disney",
                "slug" => "disney",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.disneyapi.dev",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "character" => [],
                ],
            ],
            "entity" => [
        'character' => [
          'fields' => [
            [
              'name' => 'alignment',
              'short' => 'Character alignment (good, bad, neutral, etc.)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'allies',
              'short' => 'List of character allies',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'createdAt',
              'short' => 'Timestamp when the character was added to the database',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'data',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'enemies',
              'short' => 'List of character enemies',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'films',
              'short' => 'List of films the character appears in',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the character',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'imageUrl',
              'short' => 'Image URL for the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'info',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'parkAttractions',
              'short' => 'List of park attractions featuring the character',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'shortFilms',
              'short' => 'List of short films the character appears in',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'sourceUrl',
              'short' => 'Source URL (Disney Wiki) for the character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'tvShows',
              'short' => 'List of TV shows the character appears in',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'updatedAt',
              'short' => 'Timestamp when the character was last updated',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'API URL for this character',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'v',
              'short' => 'Version key',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'videoGames',
              'short' => 'List of video games the character appears in',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'character',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'alignment',
                        'orig' => 'alignment',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'ally',
                        'orig' => 'ally',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'enemy',
                        'orig' => 'enemy',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'film',
                        'orig' => 'film',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'park_attraction',
                        'orig' => 'park_attraction',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'short_film',
                        'orig' => 'short_film',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'tv_show',
                        'orig' => 'tv_show',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'video_game',
                        'orig' => 'video_game',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/character',
                  'parts' => [
                    'character',
                  ],
                  'select' => [
                    'exist' => [
                      'alignment',
                      'ally',
                      'enemy',
                      'film',
                      'name',
                      'page',
                      'page_size',
                      'park_attraction',
                      'short_film',
                      'tv_show',
                      'video_game',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/character/{id}',
                  'parts' => [
                    'character',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return DisneyFeatures::make_feature($name);
    }
}

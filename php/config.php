<?php
declare(strict_types=1);

// Disney SDK configuration

class DisneyConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Disney",
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
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'ally',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'created_at',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'data',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'enemy',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'film',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'id',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'image_url',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'info',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'name',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'park_attraction',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'short_film',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'source_url',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 12,
            ],
            [
              'name' => 'tv_show',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 13,
            ],
            [
              'name' => 'updated_at',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 14,
            ],
            [
              'name' => 'url',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 15,
            ],
            [
              'name' => 'v',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 16,
            ],
            [
              'name' => 'video_game',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 17,
            ],
          ],
          'name' => 'character',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'alignment',
                        'orig' => 'alignment',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'ally',
                        'orig' => 'ally',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'enemy',
                        'orig' => 'enemy',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'film',
                        'orig' => 'film',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'name',
                        'orig' => 'name',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'park_attraction',
                        'orig' => 'park_attraction',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'short_film',
                        'orig' => 'short_film',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'tv_show',
                        'orig' => 'tv_show',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'video_game',
                        'orig' => 'video_game',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
            'load' => [
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
                        'active' => true,
                      ],
                    ],
                  ],
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
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

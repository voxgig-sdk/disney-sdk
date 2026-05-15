<?php
declare(strict_types=1);

// Disney SDK utility: feature_add

class DisneyFeatureAdd
{
    public static function call(DisneyContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}

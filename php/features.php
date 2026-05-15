<?php
declare(strict_types=1);

// Disney SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class DisneyFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new DisneyBaseFeature();
            case "test":
                return new DisneyTestFeature();
            default:
                return new DisneyBaseFeature();
        }
    }
}

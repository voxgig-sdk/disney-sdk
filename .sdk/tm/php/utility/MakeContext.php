<?php
declare(strict_types=1);

// Disney SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class DisneyMakeContext
{
    public static function call(array $ctxmap, ?DisneyContext $basectx): DisneyContext
    {
        return new DisneyContext($ctxmap, $basectx);
    }
}

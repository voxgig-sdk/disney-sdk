<?php
declare(strict_types=1);

// Disney SDK utility: prepare_body

class DisneyPrepareBody
{
    public static function call(DisneyContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

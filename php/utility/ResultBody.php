<?php
declare(strict_types=1);

// Disney SDK utility: result_body

class DisneyResultBody
{
    public static function call(DisneyContext $ctx): ?DisneyResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

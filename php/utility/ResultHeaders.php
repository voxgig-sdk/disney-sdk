<?php
declare(strict_types=1);

// Disney SDK utility: result_headers

class DisneyResultHeaders
{
    public static function call(DisneyContext $ctx): ?DisneyResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

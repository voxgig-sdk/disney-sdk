<?php
declare(strict_types=1);

// Disney SDK exists test

require_once __DIR__ . '/../disney_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = DisneySDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}

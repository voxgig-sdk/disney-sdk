# Disney SDK exists test

import pytest
from disney_sdk import DisneySDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = DisneySDK.test(None, None)
        assert testsdk is not None

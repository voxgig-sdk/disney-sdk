# Disney SDK exists test

require "minitest/autorun"
require_relative "../Disney_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = DisneySDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

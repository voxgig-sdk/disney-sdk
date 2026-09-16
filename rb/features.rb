# Disney SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module DisneyFeatures
  def self.make_feature(name)
    case name
    when "base"
      DisneyBaseFeature.new
    when "ratelimit"
      DisneyRatelimitFeature.new
    when "retry"
      DisneyRetryFeature.new
    when "test"
      DisneyTestFeature.new
    when "timeout"
      DisneyTimeoutFeature.new
    else
      DisneyBaseFeature.new
    end
  end
end

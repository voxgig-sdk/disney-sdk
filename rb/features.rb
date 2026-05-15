# Disney SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module DisneyFeatures
  def self.make_feature(name)
    case name
    when "base"
      DisneyBaseFeature.new
    when "test"
      DisneyTestFeature.new
    else
      DisneyBaseFeature.new
    end
  end
end

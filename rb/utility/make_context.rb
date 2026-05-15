# Disney SDK utility: make_context
require_relative '../core/context'
module DisneyUtilities
  MakeContext = ->(ctxmap, basectx) {
    DisneyContext.new(ctxmap, basectx)
  }
end

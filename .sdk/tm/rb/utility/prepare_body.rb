# Disney SDK utility: prepare_body
require_relative 'media'
module DisneyUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return DisneyUtilities.raw_body(ctx.reqdata) if DisneyUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end

# Disney SDK utility: feature_add
module DisneyUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end

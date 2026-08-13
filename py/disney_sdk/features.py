# Disney SDK feature factory

from disney_sdk.feature.base_feature import DisneyBaseFeature
from disney_sdk.feature.test_feature import DisneyTestFeature


def _make_feature(name):
    features = {
        "base": lambda: DisneyBaseFeature(),
        "test": lambda: DisneyTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

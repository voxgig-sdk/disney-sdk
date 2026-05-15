# Disney SDK feature factory

from feature.base_feature import DisneyBaseFeature
from feature.test_feature import DisneyTestFeature


def _make_feature(name):
    features = {
        "base": lambda: DisneyBaseFeature(),
        "test": lambda: DisneyTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

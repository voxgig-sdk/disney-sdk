# Disney SDK utility: make_context

from disney_sdk.core.context import DisneyContext


def make_context_util(ctxmap, basectx):
    return DisneyContext(ctxmap, basectx)

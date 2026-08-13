# Disney SDK utility: make_context

from projectname_sdk.core.context import DisneyContext


def make_context_util(ctxmap, basectx):
    return DisneyContext(ctxmap, basectx)

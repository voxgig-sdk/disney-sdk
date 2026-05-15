# Disney SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

DisneyUtility.registrar = ->(u) {
  u.clean = DisneyUtilities::Clean
  u.done = DisneyUtilities::Done
  u.make_error = DisneyUtilities::MakeError
  u.feature_add = DisneyUtilities::FeatureAdd
  u.feature_hook = DisneyUtilities::FeatureHook
  u.feature_init = DisneyUtilities::FeatureInit
  u.fetcher = DisneyUtilities::Fetcher
  u.make_fetch_def = DisneyUtilities::MakeFetchDef
  u.make_context = DisneyUtilities::MakeContext
  u.make_options = DisneyUtilities::MakeOptions
  u.make_request = DisneyUtilities::MakeRequest
  u.make_response = DisneyUtilities::MakeResponse
  u.make_result = DisneyUtilities::MakeResult
  u.make_point = DisneyUtilities::MakePoint
  u.make_spec = DisneyUtilities::MakeSpec
  u.make_url = DisneyUtilities::MakeUrl
  u.param = DisneyUtilities::Param
  u.prepare_auth = DisneyUtilities::PrepareAuth
  u.prepare_body = DisneyUtilities::PrepareBody
  u.prepare_headers = DisneyUtilities::PrepareHeaders
  u.prepare_method = DisneyUtilities::PrepareMethod
  u.prepare_params = DisneyUtilities::PrepareParams
  u.prepare_path = DisneyUtilities::PreparePath
  u.prepare_query = DisneyUtilities::PrepareQuery
  u.result_basic = DisneyUtilities::ResultBasic
  u.result_body = DisneyUtilities::ResultBody
  u.result_headers = DisneyUtilities::ResultHeaders
  u.transform_request = DisneyUtilities::TransformRequest
  u.transform_response = DisneyUtilities::TransformResponse
}

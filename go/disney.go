package voxgigdisneysdk

import (
	"github.com/voxgig-sdk/disney-sdk/go/core"
	"github.com/voxgig-sdk/disney-sdk/go/entity"
	"github.com/voxgig-sdk/disney-sdk/go/feature"
	_ "github.com/voxgig-sdk/disney-sdk/go/utility"
)

// Type aliases preserve external API.
type DisneySDK = core.DisneySDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type DisneyEntity = core.DisneyEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type DisneyError = core.DisneyError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCharacterEntityFunc = func(client *core.DisneySDK, entopts map[string]any) core.DisneyEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewDisneySDK = core.NewDisneySDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

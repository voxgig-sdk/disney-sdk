-- Disney SDK error

local DisneyError = {}
DisneyError.__index = DisneyError


function DisneyError.new(code, msg, ctx)
  local self = setmetatable({}, DisneyError)
  self.is_sdk_error = true
  self.sdk = "Disney"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function DisneyError:error()
  return self.msg
end


function DisneyError:__tostring()
  return self.msg
end


return DisneyError

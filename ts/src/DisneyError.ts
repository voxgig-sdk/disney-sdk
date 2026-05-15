
import { Context } from './Context'


class DisneyError extends Error {

  isDisneyError = true

  sdk = 'Disney'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  DisneyError
}


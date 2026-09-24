
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { DisneySDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = DisneySDK.test()
    equal(testsdk instanceof DisneySDK, true,
      'DisneySDK.test() must return a client synchronously')
  })

})

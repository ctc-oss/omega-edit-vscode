import * as assert from 'assert'
import * as utils from '../utils'

suite('Utils', () => {
  suite('methods', () => {
    test('getWebviewContent', () => {
      assert.strictEqual(
        utils
          .getWebviewContent('Hello Test World')
          .includes('Hello Test World'),
        true
      )
    })
  })
})

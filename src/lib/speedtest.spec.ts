import test from 'ava'
import speedTest from './speedtest'

test('speedTest returns valid data on success', async t => {
  // Avoid extraneous output from draftlog
  ;(console as any).draft = () => {
    return () => null
  }
  const result = await speedTest({ timeout: 1 })
  t.truthy(result.download)
  t.truthy(result.server)
  t.truthy(result.upload)
})

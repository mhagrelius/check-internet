import test from 'speedtest-net'
import { promisify } from 'util'

const speedTest = promisify(test.visual)

export default async function runSpeedTest(options?: SpeedTestOptions) {
  const timeout = options ? options.timeout || 10000 : 10000

  try {
    const result = await speedTest({
      maxTime: timeout
    })
    return {
      download: result.speeds.download,
      server: `${result.server.host} (${result.server.location})`,
      upload: result.speeds.upload
    }
  } catch (error) {
    throw error
  }
}

interface SpeedTestOptions {
  timeout: number
}

export interface SpeedTestResult {
  download: number
  upload: number
  server: string
}

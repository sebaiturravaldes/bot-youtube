import { webkit } from 'playwright'
import start from './start'
import sleep from './sleep'
import dotenv from 'dotenv'

(async () => {
  dotenv.config()

  const browser = await webkit.launch({ headless: false, slowMo: 50 })
  const page = await browser.newPage()
  let i
  console.log('Start.')
  for(i = 0;i < process.env.VISITS; i++){
    start(page)
    await sleep(1000 * process.env.VIDEO_TIME)
    console.log('restart...')
  }
  await browser.close()
  console.log('End.')
})()

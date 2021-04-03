import { webkit } from 'playwright'
import start from './start'
import dotenv from 'dotenv'

(async () => {
  dotenv.config()
  const browser = await webkit.launch({ headless: false, slowMo: 50 })
  const page = await browser.newPage()
  await start(page)
  // await browser.close()
})()

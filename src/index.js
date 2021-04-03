import { webkit } from 'playwright'
import start from './start'
import sleep from './sleep'
import dotenv from 'dotenv'

(async () => {
  dotenv.config()

  const browser = await webkit.launch({ headless: false, slowMo: 50 })
  const page = await browser.newPage()
  let i
  for(i = 0;i < 100; i++){  
     start(page)
    await sleep(1000*45)
    console.log('reiniciando')
  }
  console.log('Fin.')
  await browser.close()

})()

const videoTime = 1000 * 27 //seconds

export default async function (page) {
    console.log('Ingresando al sitio')
    await page.goto(process.env.URL)
    await page.waitForNavigation()

  // await page.screenshot({ path: 'example.png' })
}
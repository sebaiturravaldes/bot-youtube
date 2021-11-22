export default async function (page) {
  console.log('Enter site.')
  await page.goto(process.env.URL)
  await page.waitForNavigation()
}

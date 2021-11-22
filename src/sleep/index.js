export default async function (ms) {
  return new Promise(_ => setTimeout(_, ms))
}

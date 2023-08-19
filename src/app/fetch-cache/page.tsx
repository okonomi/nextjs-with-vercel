export default async function Page() {
  const res1 = await fetch("https://worldtimeapi.org/api/timezone/Japan", { next: { revalidate: 10 } })
  const json1 = await res1.json()

  const res2 = await fetch("https://worldtimeapi.org/api/timezone/Japan", { cache: 'no-store' })
  const json2 = await res2.json()

  const res3 = await fetch("https://worldtimeapi.org/api/timezone/Japan", { cache: 'force-cache' })
  const json3 = await res3.json()

  return (
    <div>
      <h2>Fetch Cache</h2>
      <h3>Current time</h3>
      <p>{new Date().toString()}</p>
      <h3>revalidate: 10</h3>
      <p>{json1.datetime}</p>
      <h3>cache: no-store</h3>
      <p>{json2.datetime}</p>
      <h3>cache: force-cache</h3>
      <p>{json3.datetime}</p>
    </div>
  )
}

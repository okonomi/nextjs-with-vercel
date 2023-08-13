import Link from "next/link"

export default function Page() {
  const now = new Date()

  return (
    <>
      <h2>Sample2</h2>
      <p>{new Date().toString()}</p>
      <p><Link href="/sample1">Sample1</Link></p>
    </>
  )
}

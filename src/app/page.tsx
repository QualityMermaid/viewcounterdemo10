
export default async function Home() {

  const res = await fetch("https://api.github.com/repos/QualityMermaid/viewcounterdemo10", {next: {revalidate: 3}})
  // revalidates every Xs
  const data = await res.json()
  console.log(data.stargazers_count)
  return (
    <main >
      {data.stargazers_count}
    </main>
  )
}

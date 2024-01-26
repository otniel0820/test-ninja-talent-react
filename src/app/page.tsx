import ListUsers from "./components/ListUsers";


export default async function Home() {

  const res = await fetch('https://randomuser.me/api?results=5&noinfo')
  const data = await res.json()

  const users = data.results



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ListUsers results={users}/>
    </main>
  );
}

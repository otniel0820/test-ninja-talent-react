'use client'

import UserTable from "../components/UserTable";
import { useUsers } from "../hooks/useUsers";


export default function Home() {

  const {users}= useUsers()

  const listUsers = users.results

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {listUsers !== undefined && <UserTable users={listUsers} />}
    </main>
  );
}

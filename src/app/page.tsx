"use client"
import { useSession, signIn, signOut } from "next-auth/react"

// Define the types for the session object
interface SessionUser {
  email: string | null
  name: string | null
  image: string | null
}

export default function Component() {
  const { data: session } = useSession()

  // Add type guard for session and user
  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github", { callbackUrl: "http://localhost:3000" })}>
  Sign in with GitHub
</button>
    </>
  )
}

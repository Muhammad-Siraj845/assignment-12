import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,  
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
})

export {handler as GET, handler as POST}
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  secret: process.env.SERVER_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
});

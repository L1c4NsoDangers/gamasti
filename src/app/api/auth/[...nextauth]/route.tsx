import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv1.323c259536421be6",
      clientSecret: "6d27c472ce8c5958d75cae6f85ad5c0e392c0c55",
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      console.log(session, token);

      session.user.name = `${session?.user?.name}_${token?.sub}`;

      return session;
    },
  },
  secret: "default_secret_key",
};

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST };

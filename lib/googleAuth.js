import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const {signIn,signOut,auth,handlers} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async authorized({ token }) {
      return token ? true : false;
    },
  },
});

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import jsonwebtoken from "jsonwebtoken";
export const {
  signIn,
  signOut,
  auth,
  handlers,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  jwt: {
    encryption: false, // Disable encryption for JWT (be cautious with this)
  },
  callbacks: {
    // The 'authorized' callback checks if the token exists
    async authorized({ token }) {
      return token ? true : false; // If token exists, it's authorized
    },
    // The 'jwt' callback modifies the JWT token before it's sent to the client
    async jwt({ token, user, account }) {
     if(account && user){
       token.id = user.id;
       token.email = user.email;
     }
    },
    async session({ token, session }) {
     session.user.id = token.id;
       session.backendToken = jsonwebtoken.sign(
      { id: token.id, email: token.email },
      "1bkl64jwoq8p960vcszx93",
      { expiresIn: '7d' }
    );

    return session;
    },
    // The 'session' callback modifies the session object before it's sent to the client
  },
});

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

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
  session: {
    encryption: false, // Disable encryption for JWT (be cautious with this)
  },
  callbacks: {
    // The 'authorized' callback checks if the token exists
    async authorized({ token }) {
      return token ? true : false; // If token exists, it's authorized
    },
    // The 'jwt' callback modifies the JWT token before it's sent to the client
    async jwt({ token, user }) {
      if (user) {
        token = { ...token, user }; // Add user data to the token
      }
      return token;
    },
    // The 'session' callback modifies the session object before it's sent to the client
    async session({ session, token }) {
      session.user = token; // Attach the user data from the token to the session
      return session;
    },
  },
});

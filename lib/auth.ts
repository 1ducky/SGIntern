import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
// import Google from "next-auth/providers/google"


export const AuthOptions: NextAuthOptions = {
  providers: [
    // OAuth dengan Google
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),

    Credentials({
      name: "Credentials",
    //   Valid Credentials Fields
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if(!credentials) return null
        // Validasi user dari database di sini
        const user = { id: "1", name: "User", email: credentials?.email, role: 'admin' }
        return user 
      },
    }),
  ],

  session: {
    strategy: "jwt", // atau "database"
  },
  

  secret: process.env.NEXTAUTH_SECRET,
  callbacks:{
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
            }
            return token
        },

        async session({session,token}){
            session.user.role = token.role
            return session
        }
    }
}
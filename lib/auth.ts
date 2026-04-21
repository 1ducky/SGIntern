import { authSignin } from "@/feature/auth/auth.services"
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
      // Valid Credentials Fields
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if(!credentials) throw new Error("Tidak Ada Field")
        const user = await authSignin({email:credentials.email, password: credentials.password})
        // console.log(user)
        if(!user) throw new Error("Email atau Password Salah")
        
        return user 
      },
    }),
  ],

  session: {
    strategy: "jwt", // atau "database"
    maxAge: 15*60 // 15 menit
  },
  jwt:{
    maxAge: 15*60, // 15 menit
  },
  

  secret: process.env.NEXTAUTH_SECRET,

  // jika ingin menambahkan field pada token dan session
  // bisa tambahakan prop di types/next-auth.d.ts
  callbacks:{
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.role = user.role
            }
            return token
        },

        async session({session,token}){
            session.user.id = token.id
            session.user.role = token.role
            return session
        }
    }
}
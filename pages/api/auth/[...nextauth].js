import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

import clientPromise from '../../../lib/mongoAdapter'

export default NextAuth({
	adapter: MongoDBAdapter(clientPromise),

	
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		
	],

	// pages:{
	// 	signIn: '/auth/signin',
	// 	newUser: '/auth/new-user'
	// }

	// callbacks:{
		// async jwt(token, user, account, profile, isNewUser){
		// 	if(account.provider == "github"){
		// 		token.hasPrivileges = true				
		// 	}
		// 	return token
		// },

		// async session(session, user, token){
		// 	if(token.hasPrivileges){
		// 		session.hasPrivileges = true
		// 	}
		// 	return session
		// }
	// },
	
})
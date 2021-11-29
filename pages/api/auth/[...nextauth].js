
import axios from "axios";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { urls } from "../../../backend.config.js"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here

  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === 'google') {
        const { accessToken, idToken } = account;
        try {
          const response = await axios.post(`${"http://127.0.0.1:8000/api/"}user/google/`, {
            access_token: accessToken,
            id_token: idToken,
          });
          const { access_token } = response.data;
          user.accessToken = access_token;

        } catch (error) {
          console.log(error);
          return false
        }

        return true
      } else {
        return false
      }
    },
  }

})
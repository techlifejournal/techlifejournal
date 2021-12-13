
import axios from "axios";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { isJwtExpired } from "../../../constants/Utils";
import Providers from "next-auth/providers";
const base_url = "http://localhost:8000/api/";
const server = "http://127.0.0.1:8000/api/"
export const refreshToken = async function (refreshToken) {
  try {
    const response = await axios.post(
      `${base_url}auth/token/refresh/`,
      {
        refresh: refreshToken,
      },
    );

    const { access, refresh } = response.data;
    // still within this block, return true
    return [access, refresh];
  } catch {
    return [null, null];
  }
};
export default NextAuth({
  // Configure one or more authentication providers
  secret: process.env.SESSION_SECRET,
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  debug: process.env.NODE_ENV === "development",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Credentials({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const data = await axios.post(`${server}token/`, {
          email: email,
          password: password,

        })
        if (data) {
          return data;
        } return null
      }

    })
    // ...add more providers here

  ],
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      // user just signed in
      if (user) {
        // may have to switch it up a bit for other providers
        if (account.provider === "google") {
          // extract these two tokens
          const { accessToken, idToken } = account;

          // make a POST request to the DRF backend
          try {
            const response = await axios.post(
              // tip: use a seperate .ts file or json file to store such URL endpoints
              `${server}user/google/`
              ,
              {
                access_token: accessToken, // note the differences in key and value variable names
                id_token: idToken,
              },
            );

            // extract the returned token from the DRF backend and add it to the `user` object
            const { access_token, refresh_token } = response.data;
            console.log(response.data);
            // reform the `token` object from the access token we appended to the `user` object
            token = {
              ...token,
              accessToken: access_token,
              refreshToken: refresh_token,
            };

            return token;
          } catch (error) {
            return null;
          }
        }
        if (user) {
          const { access, refresh } = user.data
          console.log('\n\n\n\n __________', access, refresh)
          token = {
            ...token,
            accessToken: access,
            refreshToken: refresh,
          };
          return token
        }
      }

      // user was signed in previously, we want to check if the token needs refreshing
      // token has been invalidated, try refreshing it
      if (isJwtExpired(String(token.accessToken))) {
        const [
          newAccessToken,
          newRefreshToken,
        ] = await refreshToken(String(token.refreshToken));

        if (newAccessToken && newRefreshToken) {
          token = {
            ...token,
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000 + 2 * 60 * 60),
          };

          return token;
        }

        // unable to refresh tokens from DRF backend, invalidate the token
        return {
          ...token,
          exp: 0,
        };
      }

      // token valid
      return token;
    },

    async session(session, userOrToken) {
      session.accessToken = userOrToken.accessToken;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  }
})
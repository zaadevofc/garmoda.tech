import { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const NextAuthConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
    DiscordProvider({
      clientId: process.env.AUTH_DISCORD_ID as string,
      clientSecret: process.env.AUTH_DISCORD_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ token }: any) {
      return token;
    },
    async jwt(x) {
      const { token, user, account }: any = x;
      if (user) {
        token.id = user.id;
        token.role = "ADMIN";
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  useSecureCookies: process.env.NODE_ENV === "production",
  cookies: {
    sessionToken: {
      name: "garmoda.session-token",
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 1 * 60 * 60 * 24 * 30, // satu bulan
      },
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

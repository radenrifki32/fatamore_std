import { type NextAuthOptions } from 'next-auth';
import type { Provider } from 'next-auth/providers';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const providers: Provider[] = [
  GithubProvider({
    clientId: process.env.GITHUB_CLIENT_ID as string,
    clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  }),
];

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  providers,
  callbacks: {
    async session({ session, token, user }) {
      console.log('async Session callback', { session, token, user });
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log('async SignIn callback', {
        user,
        account,
        profile,
        email,
        credentials,
      });
      return true;
    },
    async jwt({ token, user, profile, session }) {
      console.log('async JWT callback', { token, user, profile, session });
      return token;
    },
  },
};
export const providerMap = providers.map((provider) => {
  return { id: provider.id, name: provider.name };
});

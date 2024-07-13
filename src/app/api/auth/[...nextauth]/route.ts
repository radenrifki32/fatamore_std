import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';

import { authOptions } from '@/lib/auth';

const handler: AuthOptions = NextAuth(authOptions);

export { handler as GET, handler as POST };

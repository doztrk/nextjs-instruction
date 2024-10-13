import NextAuth from "next-auth";

const config = {
	providers: [],
	callbacks: {},
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);

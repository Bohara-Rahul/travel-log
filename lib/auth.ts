import { betterAuth } from "better-auth";
import env from "./env";

import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "./db/index"; // your drizzle instance
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "sqlite", 
    }),
    advanced: {
      generateId: false,
    },
    socialProviders: {
      github: {
        clientId: env.GITHUB_CLIENT_ID as string,
        clientSecret: env.GITHUB_CLIENT_SECRET as string,
      },
    },
});
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { admin, organization } from "better-auth/plugins";
 
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql'
    }),
    emailAndPassword: {
        enabled: true
    },
    rateLimit: {
        window:10,
        max: 100
    },
    plugins: [
        organization(),
        admin()
    ]
})
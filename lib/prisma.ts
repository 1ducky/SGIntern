import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL 
});
const PrismaClientSingleton = () => {
    return new PrismaClient({ adapter });
}

declare const globalThis : {
    prismaGlobal : ReturnType<typeof PrismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? PrismaClientSingleton()

export default prisma
if(process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

// npm i @prisma/adapter-pg pg
// <-- Advanced Infra -->

// <-- simple Infra -->

// import { PrismaClient } from "./generated/prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient;
// };

// export const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient();

// if (process.env.NODE_ENV !== "production")
//   globalForPrisma.prisma = prisma;
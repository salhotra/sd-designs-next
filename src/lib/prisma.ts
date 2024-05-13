import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | undefined;

// Check if we're in production
// In development, we use a global variable to prevent multiple instances of Prisma Client in hot reload
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma as PrismaClient;

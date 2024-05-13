import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined; // use `var` to declare it as a global variable
}

import { PrismaClient } from "@prisma/client";

// একবারই instance বানাও
const prisma = new PrismaClient();

export default prisma;

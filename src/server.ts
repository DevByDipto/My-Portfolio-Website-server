import { app } from "./app"
import prisma from "./db/prisma";
const port = process.env.PORT


app.listen(port, async () => {
  try {
  await prisma.$connect();
  console.log("Database connected successfully ✅");
} catch (error) {
  console.error("Failed to connect to database ❌", error);
}
  console.log(`Example app listening on port ${port}`)
})
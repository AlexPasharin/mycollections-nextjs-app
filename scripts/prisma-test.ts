import { prisma } from "../db/prisma/client";

async function main() {
  // Example: Fetch all records from a table
  // Replace 'user' with your actual model name
  const allUsers = await prisma.artists.findMany({ take: 10, orderBy: [{ name_for_sorting: "asc" }, { name: "asc" }] });
  console.log("All users:", JSON.stringify(allUsers.map((artist) => ({ name: artist.name, type: artist.type })), null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

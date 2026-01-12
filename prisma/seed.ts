import { prisma } from "../src/lib/prisma";

async function main() {
  // Clear existing animals
  await prisma.animal.deleteMany();

  // Create 3 animals
  const bear = await prisma.animal.create({
    data: {
      name: "Bear",
      slug: "bear",
      currentAge: 5,
      maxAge: 40,
      isExtinct: false,
    },
  });

  const cat = await prisma.animal.create({
    data: {
      name: "Cat",
      slug: "cat",
      currentAge: 3,
      maxAge: 18,
      isExtinct: false,
    },
  });

  const dog = await prisma.animal.create({
    data: {
      name: "Dog",
      slug: "dog",
      currentAge: 7,
      maxAge: 15,
      isExtinct: false,
    },
  });

  console.log("✅ Seed completed successfully!");
  console.log({ bear, cat, dog });
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { prisma } from "./lib/prisma";

async function main() {
  const newAnimal = await prisma.animal.create({
    data: {
      name: "Zebra",
      slug: "zebra",
      currentAge: 10,
      maxAge: 30,
    },
  });

  console.log(newAnimal);

  const allAnimals = await prisma.animal.findMany();

  console.log(allAnimals);
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

type Animal = {
  id: number;
  name: string;
  slug: string;
  diet: "carnivore" | "herbivore" | "omnivore";
  createdAt: Date;
  updatedAt: Date;
};

type Animals = Animal[];

export const dataAnimals: Animals = [
  {
    id: 1,
    name: "Antelope",
    slug: "antelope",
    diet: "herbivore",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Bear",
    slug: "bear",
    diet: "carnivore",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Cat",
    slug: "cat",
    diet: "omnivore",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

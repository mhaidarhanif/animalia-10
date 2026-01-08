-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" VARCHAR(300) NOT NULL,
    "currentAge" INTEGER NOT NULL,
    "maxAge" DOUBLE PRECISION NOT NULL,
    "isExtinct" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

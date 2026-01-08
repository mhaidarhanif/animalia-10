/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Animal` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Animal_slug_key" ON "Animal"("slug");

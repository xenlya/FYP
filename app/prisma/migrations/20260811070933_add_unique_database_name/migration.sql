/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `DatabaseInstance` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DatabaseInstance_name_key" ON "DatabaseInstance"("name");

/*
  Warnings:

  - You are about to drop the `cardstabs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "cardstabs";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "region" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CardsTabs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "regionId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL,
    CONSTRAINT "CardsTabs_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "region" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "region_title_key" ON "region"("title");

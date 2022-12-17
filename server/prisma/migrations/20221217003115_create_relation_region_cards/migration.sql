/*
  Warnings:

  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cardstabs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Region";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "cardstabs";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "region" (
    "regionId" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CardsTabs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tabsId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL,
    CONSTRAINT "CardsTabs_tabsId_fkey" FOREIGN KEY ("tabsId") REFERENCES "region" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "region_id_key" ON "region"("id");

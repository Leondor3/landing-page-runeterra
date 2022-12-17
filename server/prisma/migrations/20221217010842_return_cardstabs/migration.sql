/*
  Warnings:

  - You are about to drop the `CardsTabs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `region` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CardsTabs";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "region";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "cardstabs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL
);

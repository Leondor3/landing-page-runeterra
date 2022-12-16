/*
  Warnings:

  - You are about to drop the `Slider` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Slider";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "slider" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bannerSlide" TEXT NOT NULL
);

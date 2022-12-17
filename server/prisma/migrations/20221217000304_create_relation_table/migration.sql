-- CreateTable
CREATE TABLE "Region" (
    "regionId" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    CONSTRAINT "Region_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "cardstabs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

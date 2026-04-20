-- CreateEnum
CREATE TYPE "CompanyStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "Companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "status" "CompanyStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("id")
);

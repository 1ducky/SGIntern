-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('Menunggu', 'Diterima', 'Ditolak', 'Dibatalkan');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "jurusan" TEXT,
    "keahlian" TEXT,
    "kelamin" TEXT NOT NULL,
    "pendidikan" TEXT,
    "alamat" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "link" TEXT,
    "role" TEXT NOT NULL DEFAULT 'Pelajar',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DaftarMagang" (
    "id" TEXT NOT NULL,
    "message" TEXT,
    "status" "RequestStatus" NOT NULL DEFAULT 'Menunggu',
    "userId" TEXT NOT NULL,
    "magangId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DaftarMagang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Magang" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "keahlian" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "perusahaanId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Magang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lowongan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "keahlian" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "perusahaanId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lowongan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perusahaan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "deskripsi" TEXT,
    "imageUrl" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Perusahaan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DaftarMagang_userId_magangId_key" ON "DaftarMagang"("userId", "magangId");

-- CreateIndex
CREATE UNIQUE INDEX "Perusahaan_name_alamat_key" ON "Perusahaan"("name", "alamat");

-- AddForeignKey
ALTER TABLE "DaftarMagang" ADD CONSTRAINT "DaftarMagang_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DaftarMagang" ADD CONSTRAINT "DaftarMagang_magangId_fkey" FOREIGN KEY ("magangId") REFERENCES "Magang"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Magang" ADD CONSTRAINT "Magang_perusahaanId_fkey" FOREIGN KEY ("perusahaanId") REFERENCES "Perusahaan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lowongan" ADD CONSTRAINT "Lowongan_perusahaanId_fkey" FOREIGN KEY ("perusahaanId") REFERENCES "Perusahaan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

#SGIntern
Platform Penyedia Informasi Magang, Lowongan, Konsultasi Untuk Peserta Didik Maupun Alumni

SGintern Adalah Sebuah Yang Menyediakan Informasi Magang Untuk Anak Didik dan
Lowongan Untuk Alumni Agar Mendapatkan Informasi Dari Pihak BKK,

## Fitur
 - Data Yang Ditampilkan Berintegritas
 - Pencarian Lowongan Pekerjaan maupun Magang Berdasarkan Jurusan
 - Relasi Data Perusahaan Dengan Lowongan Maupun Magang
 - Pembuatan CV Otomatis Setelah Mendaftar

## Tech Stack
- Next.js 16 App Router (Framework)
- React 
- Tailwind CSS (Style)
- Prisma (ORM)
- Vercel Postgres / Storage (Online Database)
- PostgreSQL (Database)
- UploadThing (Storage Service)
- Clerk (Auth System)

## Project Structure
root/
 ├─ app/
 │   ├─ api/
 │   ├─ (auth)/
 │   ├─ (dashboard)/
 │   │   ├─ (Admin DashBoard)
 │   │   └─ Profile
 │   ├─ (filter)/
 │   ├─ action/
 │   ├─ cv/
 │   ├─ detail/
 │   └─ page.tsx
 ├─ components/
 │   ├─ CardList/(Display Item)
 │   ├─ Csr/(Client Interactive)
 │   └─ Skeleton/(Suspend Fallback)
 ├─ lib/
 ├─ Public/
 ├─ utils/
 ├─ prisma/
 └─ staticData/

## Bahan Sebelum Instalasi
 - Node Js v18.x.x^
 - Package Manager
    - npm
    - pnpm
    - yarn
 - Git
 - Browser Modern
 - Terminal

 ## Langkah-Langkah Instalasi
Setelah Bahan Yang Dibutuhkan Terpenuh, Bisa Lanjut Instalasi

 1. Buat Folder Untuk Instalasi

 2. Clone Repository dan Lakukan Instalasi Dependency Yang dibutuhkan

 ```bash
    git clone https://github.com/1ducky/SGIntern.git
    cd SGintern
    npm install
```

3. Setelah Selesai Instalasi, Lakukan Generate Prisma Untuk Intilize

```bash
    npm prisma generate
```

4. Jalankan Demo Project di localhost:3000/
```bash
    npm run dev
```

## Environment Variables

Anda Bisa Gunakan Demo Environment Dan Bersifat Development Yang Sudah Tersedia

Atau Anda Bisa Memasukan Environment Sendiri

```bash
    DATABASE_URL
    POSTGRES_URL
    PRISMA_DATABASE_URL
```

Anda Bisa Dapatkan Dari [Vercel](https://vercel.com/)
 - Lakukan Login Akun Vercel
 - Masuk Ke Dashboard
 - Pilih Opsi Storage
 - Buat Databse
 - Pilih Prisma PostgreSQL
 - Atur Konfigurasi Sebelum Membuat
 - Copy Token '.env.local'
 - masukan Lalu Lakukan Syncron Database Dengan.
```bash
    npx prisma db push
    npx prisma generate
```

```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
    CLERK_SECRET_KEY
```

Anda Bisa Dapatkan dari [Clerk](https://clerk.com/)
 - Lakukan Login Akun Clerk
 - Masuk Dashboard
 - Buat Aplikasi dan Aktifkan Metode Google, Github, dan Email
 - Masuk Ke Aplikasi Lalu Masuk Ke Konfigurasi
 - Masuk Ke User & authentication
 - Menu Email, Matikan Semua Opsi Kecuali Sign-up with Email dan Sign-in with Email
 - Menu Username, Nyalakan semua Opsi Kecuali Require Username
 - Menu Password, Matikan Client Trust
 - Menu User Model, Nyalakan Opsi First and Last Name dan Allow Users to Delete Their Accounts
 - Setelah Konfigurasi Masuk Ke API Key lalu Pilih Framework Next.js dan Copy '.env.local'.

```bash
    UPLOADTHING_TOKEN
```

Anda Bisa Dapatkan dari [UploadThing](https://uploadthing.com/)
 - Lakukan Login Akun Dengan Github
 - Masuk Dashboard
 - Buat Aplikasi Lalu Masuk Ke Statistic Aplikasi
 - Masuk Ke Menu API Key
 - Pilih SDK v7+ Lalu Copy '.env.local'

## Usage
1. User Login Clerk(Belum Terdaftar Di Database)
2. User Membuat CV di Menu Profile Pojok Kanan Atas(Terdaftar Ke Database)
3. User Bisa Melihat CV yang Tergenerate
4. User Bisa Mencari Lowongan, Magang, Dan Perusahaan Terkait
5. User Bisa Melihat Data Lengkap

## Techniction
Pada env Demo Sudah Tersedia Akun Admin dengan Login
```bash
    admin@mail.com
    Q1Q11234
```

Jika Menggunakan env Sendiri Anda Bisa Masuk
```bash
    npx prisma studio
```
 - Cari Table Users
 - Cari Akun Yang akan Jadi Admin
 - Ganti Role pelajar -> Admin

 Admin DashBoard Bisa Diakses Melalui Profile Yang Menggantika Pelajar Menjadi Link Admin Dashboard

 
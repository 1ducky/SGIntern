# Authentication Refresh Token Feature Documentation

## High-level Overview
Fitur ini merupakan endpoint API untuk memperbarui token refresh dalam sistem autentikasi berbasis Next.js dan NextAuth. Fungsi utamanya adalah memvalidasi token refresh yang ada, membandingkannya dengan data pengguna, dan menghasilkan token refresh baru untuk mempertahankan sesi pengguna tanpa memerlukan login ulang. Ini mendukung keamanan sesi dengan menggunakan HTTP-only cookies dan validasi melalui layanan autentikasi di auth.

## Logic Flow
Proses refresh token dilakukan melalui langkah-langkah berikut dalam endpoint `POST /api/auth/refresh`:

1. **Ekstraksi Token**: Ambil nilai `refreshToken` dari cookies permintaan (`request.cookies.get('refreshToken')?.value`).
2. **Validasi JWT**: Dapatkan token JWT dari NextAuth menggunakan `getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })`.
3. **Pengecekan Keberadaan Token**: Jika `rawToken` atau `jwtToken` tidak ada, kembalikan respons error JSON dengan pesan "No Token Provided".
4. **Validasi Token**: Panggil fungsi `authRefreshToken(rawToken, jwtToken.id)` dari `/feature/auth/auth.services` untuk membandingkan token dan mendapatkan data pengguna. Jika terjadi error (misalnya token tidak valid), kembalikan respons error JSON.
5. **Generasi Token Baru**: Panggil `generateRefreshToken(compareToken.id)` dari `/feature/auth/auth.services` untuk membuat token refresh baru.
6. **Pengaturan Cookie**: Set cookie baru `refreshToken` dengan properti HTTP-only, secure (jika production), sameSite 'lax', path '/api/auth/refresh', dan maxAge 7 hari.
7. **Respons Sukses**: Kembalikan respons JSON dengan data `compareToken` dan pesan "Berhasil Login" menggunakan utilitas `ok` dari `/utils/response-api`.

## Input & Output

### Input
- **Cookies**: 
  - `refreshToken` (string): Token refresh yang disimpan dalam cookies, diperlukan untuk validasi.
- **Headers/Environment**:
  - JWT token dari NextAuth (diperoleh secara internal melalui `getToken`), yang berisi `id` pengguna.
  - `NEXTAUTH_SECRET` (environment variable): Secret untuk mendekripsi JWT.
- **Tidak ada body request eksplisit**; semua input berasal dari cookies dan headers.

### Output
- **Respons Sukses (HTTP 200)**:
  - Body JSON: `{ "data": { "compareToken": <user_data_object> }, "message": "Berhasil Login" }`
  - Cookies: `refreshToken` baru diset dengan properti keamanan.
- **Respons Error (HTTP 200 dengan error JSON)**:
  - Jika token tidak ada: `{ "error": "No Token Provided" }`
  - Jika validasi gagal: `{ "error": <error_message_from_authRefreshToken> }`
- **Catatan**: Respons selalu dalam format JSON, dan cookie hanya diset pada sukses. Tidak ada interaksi langsung dengan `/feature/user/user.repository.ts` dalam endpoint ini, tetapi validasi mungkin melibatkan data pengguna melalui layanan auth.
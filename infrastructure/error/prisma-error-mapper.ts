import { Prisma } from "@/lib/generated/prisma/client";
import { failed } from "@/utils/response-api";

export function prismaErrorMapper(error: unknown) {
  // Prisma Client Known Request Error
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002': // Unique constraint violation
        const fields = (error.meta?.target as string[])?.join(', ');
        return failed(409, `Data ${fields} sudah ada`, 'DUPLICATE_ENTRY');

      case 'P2025': // Record not found
        return failed(404, 'Data tidak ditemukan', 'NOT_FOUND')

      case 'P2003': // Foreign key constraint failed
        return failed(400,'Relasi Data Tidak Valid,', 'INVALID_RELATION')

      case 'P2014': // Relation violation
        return failed(400, 'Data Tidak Dapat Dihapus Karena Masih Digunakan', 'RELATION_VIOLATION')

      case 'P2016': // Query interpretation error
        return failed(400, 'Query Tidak Valid', 'INVALID_QUERY')

      default:
        return failed(500, `Error Internal`, 'INTERNAL_ERROR');

    }
  }

  // Prisma Client Validation Error
  if (error instanceof Prisma.PrismaClientValidationError) {
    return failed(400, 'Data Yang Dikirim Tidak Valid', 'VALIDATION_ERROR')
  }

  // Prisma Client Initialization Error
  if (error instanceof Prisma.PrismaClientInitializationError) {
    return failed(503, 'Koneksi Database Gagal', 'DB_CONNECTION_ERROR')
  }

  // Prisma Client Rust Panic Error
  if (error instanceof Prisma.PrismaClientRustPanicError) {
    return failed(500, 'Terjadi Kesalahan Internal', 'INTERNAL_ERROR')
  }

  // Error umum lainnya
  if (error instanceof Error) {

    return failed(500, 'Terjadi Kesalahan Internal', 'INTERNAL_ERROR')
  }

return failed(500, 'Terjadi Kesalahan Internal', 'INTERNAL_ERROR')
  
}
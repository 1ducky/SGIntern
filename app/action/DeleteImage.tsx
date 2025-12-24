"use server";

import { utapi } from "@/lib/uploadthing-delete";

export async function deleteImage(key: string | null) {
  if(!key) return
  await utapi.deleteFiles(key);
}

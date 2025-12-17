import { UserResource } from "@clerk/types";

/**
 * Update profile image user Clerk
 */
export async function updateProfileImage(
  user: UserResource | null | undefined,
  file: File
): Promise<boolean> {
  try {
    if (!user) throw new Error("User Tidak Ditemukan");
    if (!file) throw new Error("Gambar Kosong");

    await user.setProfileImage({
      file,
    });

    return true;
  } catch (error) {
    console.error("Update profile image failed:", error);
    return false;
  }
}
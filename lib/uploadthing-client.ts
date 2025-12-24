import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "@/utils/UploadThing";

export const { useUploadThing } =
  generateReactHelpers<OurFileRouter>();

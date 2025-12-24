import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "@/utils/UploadThing";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});

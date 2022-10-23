// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { authRouter, guestbookRouter } from "."

export const appRouter = router({
  auth: authRouter,
  guestbook: guestbookRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
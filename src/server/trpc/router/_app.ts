import { router } from "../trpc";
import { authRouter } from "./auth";
import { snippetRouter } from "./snippet";

export const appRouter = router({
  snippet: snippetRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

import type { Snippet } from "@prisma/client";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const snippetRouter = router({
  saveSnippet: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const snippet: Snippet = await ctx.prisma.snippet.create({
        data: {
          text: input.text,
        },
      });
      return snippet.id;
    }),
});

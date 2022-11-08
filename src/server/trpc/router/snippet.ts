import { prisma } from "./../../db/client";
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
  getSnippet: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const snippet = await ctx.prisma.snippet.findUnique({
        where: {
          id: input.id,
        },
      });
      return snippet;
    }),
});

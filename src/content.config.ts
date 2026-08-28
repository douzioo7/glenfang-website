import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const createArticleCollection = (name: 'reading' | 'cooking' | 'notes') =>
  defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${name}` }),
    schema: articleSchema,
  });

export const collections = {
  reading: createArticleCollection('reading'),
  cooking: createArticleCollection('cooking'),
  notes: createArticleCollection('notes'),
};

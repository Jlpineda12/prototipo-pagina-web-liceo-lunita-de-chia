import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(200),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      category: z.enum(['Noticias', 'Bandas', 'Celebraciones', 'Académico', 'Excursiones']).default('Noticias'),
      legacyUrl: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { noticias };

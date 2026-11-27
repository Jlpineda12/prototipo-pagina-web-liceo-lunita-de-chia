import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES } from './lib/categories';

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(200),
      date: z.coerce.date(),
      /** Texto de fecha cuando el día exacto no se conoce (p. ej. «2016»). */
      dateText: z.string().optional(),
      updated: z.coerce.date().optional(),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      category: z.enum(CATEGORIES).default('Noticias'),
      /** Aparece en la línea de tiempo «Nuestra historia». */
      hito: z.boolean().default(false),
      legacyUrl: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { noticias };

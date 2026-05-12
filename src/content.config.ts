import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const benefits = defineCollection({
  loader: file('src/data/benefits.json'),
  schema: z.object({
    id: z.string(),
    icon: z.string(),
    title: z.string(),
    sub: z.string(),
  }),
});

const programs = defineCollection({
  loader: file('src/data/programs.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    ages: z.string(),
    desc: z.string(),
  }),
});

const testimonials = defineCollection({
  loader: file('src/data/testimonials.json'),
  schema: z.object({
    id: z.string(),
    quote: z.string(),
    name: z.string(),
  }),
});

const trust = defineCollection({
  loader: file('src/data/trust.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    desc: z.string(),
    icon: z.string(),
  }),
});

export const collections = { benefits, programs, testimonials, trust };

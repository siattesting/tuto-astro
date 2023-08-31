import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My Journey Learning Astor',
    site: 'https://tuto-astro.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    language: `<language>en-us</language>`,
  });
}

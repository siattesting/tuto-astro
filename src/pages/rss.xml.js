import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My Journey Learning Astor',
    site: 'https://tuto-astro-siattesting.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}

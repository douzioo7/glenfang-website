import rss from '@astrojs/rss';
import { site, collections } from '../config/site';
import { getAllPublishedArticles } from '../lib/articles';

export async function GET() {
  const posts = await getAllPublishedArticles();
  return rss({
    title: site.name,
    description: site.description,
    site: site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/${post.collection}/${post.id}/`,
      categories: [collections[post.collection].name, ...post.data.tags],
    })),
    customData: '<language>zh-cn</language>',
  });
}

import { getCollection, type CollectionEntry } from 'astro:content';

export type ArticleCollection = 'reading' | 'cooking' | 'notes';
export type Article = CollectionEntry<ArticleCollection>;

export async function getPublishedArticles(collection: ArticleCollection): Promise<Article[]> {
  return (await getCollection(collection, ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getAllPublishedArticles(): Promise<Article[]> {
  const entries = await Promise.all(['reading', 'cooking', 'notes'].map((collection) => getPublishedArticles(collection as ArticleCollection)));
  return entries.flat().sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function articleNeighbors(posts: Article[], currentId: string, collection: ArticleCollection) {
  const index = posts.findIndex((post) => post.id === currentId);
  const toLink = (post: Article | undefined) => post && ({ title: post.data.title, href: `/${collection}/${post.id}/` });
  return { previous: toLink(posts[index + 1]), next: toLink(posts[index - 1]) };
}

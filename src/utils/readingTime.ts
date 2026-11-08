import { type CollectionEntry } from 'astro:content';

export function getMinutesRead(post: CollectionEntry<'blog'>) {
  if (!post || !post.body) return "1 min read";
  
  const wordsPerMinute = 200;
  const wordCount = post.body.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  return `${minutes} min read`;
}
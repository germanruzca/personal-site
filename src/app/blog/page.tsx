import type { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';
import { getAllPosts, getAllTags } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on tech, software engineering, and life.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return <BlogPageClient posts={posts} tags={tags} />;
}

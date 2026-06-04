import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
// import LatestPosts from '@/components/LatestPosts';
// import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  // const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      {/* <LatestPosts posts={posts} /> */}
    </>
  );
}

'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { theme, media } from '@/styles/theme';
import type { PostMeta } from '@/lib/mdx';

const Section = styled.section`
  padding: ${theme.spacing['5xl']} ${theme.spacing['2xl']};

  ${media.sm} {
    padding: ${theme.spacing['3xl']} ${theme.spacing.lg};
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: ${theme.spacing['3xl']};
  gap: ${theme.spacing.md};

  ${media.sm} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TitleGroup = styled.div``;

const SectionLabel = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.md};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: 800;
  letter-spacing: -0.04em;
  color: ${theme.colors.text};
`;

const ViewAll = styled(Link)`
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  color: ${theme.colors.muted};
  border-bottom: 1px solid ${theme.colors.border};
  padding-bottom: 2px;
  transition: color ${theme.transitions.fast}, border-color ${theme.transitions.fast};
  white-space: nowrap;

  &:hover {
    color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.lg};

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.sm} {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled(motion.article)`
  border-top: 1px solid ${theme.colors.border};
  padding-top: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  transition: all ${theme.transitions.base};
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const Category = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${theme.colors.accent};
  background: rgba(255, 51, 102, 0.08);
  border-radius: ${theme.borderRadius.full};
  padding: 3px 10px;
`;

const DateText = styled.span`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.muted};
`;

const PostTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${theme.colors.text};
  line-height: 1.3;
  transition: color ${theme.transitions.fast};
`;

const PostExcerpt = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.muted};
  line-height: 1.7;
  flex: 1;
`;

const ReadMore = styled(Link)`
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  color: ${theme.colors.text};
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: ${theme.spacing.sm};
  transition: color ${theme.transitions.fast}, gap ${theme.transitions.fast};
  min-height: 44px;

  &:hover {
    color: ${theme.colors.accent};
    gap: 8px;
  }
`;

const EmptyState = styled.p`
  color: ${theme.colors.muted};
  font-size: ${theme.fontSizes.base};
`;

function PostCardItem({ post, index }: { post: PostMeta; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <PostCard
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      <PostMeta>
        <Category>{post.category}</Category>
        <DateText>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</DateText>
      </PostMeta>
      <PostTitle>{post.title}</PostTitle>
      <PostExcerpt>{post.excerpt}</PostExcerpt>
      <ReadMore href={`/blog/${post.slug}`}>
        Read post →
      </ReadMore>
    </PostCard>
  );
}

export default function LatestPosts({ posts }: { posts: PostMeta[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section>
      <Inner>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Header>
            <TitleGroup>
              <SectionLabel>Writing</SectionLabel>
              <SectionTitle>Latest Posts</SectionTitle>
            </TitleGroup>
            <ViewAll href="/blog">View all posts →</ViewAll>
          </Header>
        </motion.div>

        {posts.length === 0 ? (
          <EmptyState>No posts yet — check back soon.</EmptyState>
        ) : (
          <Grid>
            {posts.map((post, i) => (
              <PostCardItem key={post.slug} post={post} index={i} />
            ))}
          </Grid>
        )}
      </Inner>
    </Section>
  );
}

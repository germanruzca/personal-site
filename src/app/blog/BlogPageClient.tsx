'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme, media } from '@/styles/theme';
import type { PostMeta } from '@/lib/mdx';

const Page = styled.div`
  min-height: 100vh;
  padding: 120px ${theme.spacing['2xl']} ${theme.spacing['5xl']};

  ${media.sm} {
    padding: 100px ${theme.spacing.lg} ${theme.spacing['3xl']};
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  margin-bottom: ${theme.spacing['3xl']};
`;

const Label = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.md};
`;

const PageTitle = styled.h1`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: 800;
  letter-spacing: -0.04em;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
`;

const PageDesc = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.muted};
  max-width: 480px;
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing['2xl']};
`;

const FilterTag = styled.button<{ $active: boolean }>`
  font-size: ${theme.fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 6px 14px;
  min-height: 44px;
  border-radius: ${theme.borderRadius.full};
  border: 1.5px solid ${({ $active }) => ($active ? theme.colors.text : theme.colors.border)};
  background: ${({ $active }) => ($active ? theme.colors.text : 'transparent')};
  color: ${({ $active }) => ($active ? theme.colors.background : theme.colors.muted)};
  cursor: pointer;
  transition: all ${theme.transitions.fast};

  &:hover {
    border-color: ${theme.colors.text};
    color: ${({ $active }) => ($active ? theme.colors.background : theme.colors.text)};
  }
`;

const PostGrid = styled.div`
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
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
`;

const CategoryBadge = styled.span`
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

const ReadTime = styled.span`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.muted};
`;

const PostTitle = styled.h2`
  font-size: ${theme.fontSizes.lg};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${theme.colors.text};
  line-height: 1.3;
`;

const PostExcerpt = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.muted};
  line-height: 1.7;
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
`;

const Tag = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${theme.colors.muted};
  background: ${theme.colors.tagBg};
  border-radius: ${theme.borderRadius.full};
  padding: 2px 8px;
`;

const ReadLink = styled(Link)`
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  color: ${theme.colors.text};
  display: inline-flex;
  align-items: center;
  gap: 4px;
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
  grid-column: 1 / -1;
`;

export default function BlogPageClient({ posts, tags }: { posts: PostMeta[]; tags: string[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts;

  return (
    <Page>
      <Inner>
        <PageHeader>
          <Label>Writing</Label>
          <PageTitle>Blog</PageTitle>
          <PageDesc>Thoughts on software engineering, tech, and other things I find interesting.</PageDesc>
        </PageHeader>

        {tags.length > 0 && (
          <FilterRow>
            <FilterTag $active={activeTag === null} onClick={() => setActiveTag(null)}>
              All
            </FilterTag>
            {tags.map((tag) => (
              <FilterTag
                key={tag}
                $active={activeTag === tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              >
                {tag}
              </FilterTag>
            ))}
          </FilterRow>
        )}

        <PostGrid>
          {filtered.length === 0 ? (
            <EmptyState>No posts found.</EmptyState>
          ) : (
            filtered.map((post, i) => (
              <PostCard
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <PostMeta>
                  <CategoryBadge>{post.category}</CategoryBadge>
                  <DateText>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </DateText>
                  <ReadTime>{post.readingTime}</ReadTime>
                </PostMeta>
                <PostTitle>{post.title}</PostTitle>
                <PostExcerpt>{post.excerpt}</PostExcerpt>
                {post.tags.length > 0 && (
                  <Tags>
                    {post.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Tags>
                )}
                <ReadLink href={`/blog/${post.slug}`}>Read post →</ReadLink>
              </PostCard>
            ))
          )}
        </PostGrid>
      </Inner>
    </Page>
  );
}

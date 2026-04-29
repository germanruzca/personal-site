'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { theme, media } from '@/styles/theme';
import type { Post, PostMeta } from '@/lib/mdx';

const Page = styled.div`
  min-height: 100vh;
  padding: 120px ${theme.spacing['2xl']} ${theme.spacing['5xl']};

  ${media.sm} {
    padding: 100px ${theme.spacing.lg} ${theme.spacing['3xl']};
  }
`;

const Inner = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
  color: ${theme.colors.muted};
  margin-bottom: ${theme.spacing['2xl']};
  transition: color ${theme.transitions.fast};
  min-height: 44px;

  &:hover {
    color: ${theme.colors.text};
  }
`;

const PostHeader = styled.header`
  margin-bottom: ${theme.spacing['3xl']};
  padding-bottom: ${theme.spacing['2xl']};
  border-bottom: 1px solid ${theme.colors.border};
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing.lg};
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

const ReadTime = styled.span`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.muted};
`;

const PostTitle = styled.h1`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
`;

const Tag = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${theme.colors.muted};
  background: ${theme.colors.tagBg};
  border-radius: ${theme.borderRadius.full};
  padding: 3px 10px;
`;

const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
`;

const AuthorAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentPurple});
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
  color: white;
  flex-shrink: 0;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.p`
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  color: ${theme.colors.text};
`;

const AuthorTitle = styled.p`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.muted};
`;

const PostBody = styled.div`
  font-size: ${theme.fontSizes.md};
  line-height: 1.8;
  color: ${theme.colors.text};

  h1, h2, h3, h4 {
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 2.5rem 0 1rem;
    color: ${theme.colors.text};
  }

  h2 { font-size: ${theme.fontSizes['2xl']}; }
  h3 { font-size: ${theme.fontSizes.xl}; }
  h4 { font-size: ${theme.fontSizes.lg}; }

  p {
    margin-bottom: 1.5rem;
    color: ${theme.colors.muted};
  }

  strong {
    color: ${theme.colors.text};
    font-weight: 600;
  }

  a {
    color: ${theme.colors.accent};
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  ul, ol {
    margin: 1rem 0 1.5rem 1.5rem;
    list-style: disc;
    color: ${theme.colors.muted};

    li {
      margin-bottom: 0.5rem;
      line-height: 1.7;
    }
  }

  ol { list-style: decimal; }

  blockquote {
    border-left: 3px solid ${theme.colors.accent};
    padding-left: 1.25rem;
    margin: 1.5rem 0;
    color: ${theme.colors.muted};
    font-style: italic;
  }

  code:not(pre code) {
    font-family: ${theme.fonts.mono};
    font-size: 0.875em;
    background: ${theme.colors.tagBg};
    border-radius: 4px;
    padding: 2px 6px;
    color: ${theme.colors.text};
  }

  pre {
    margin: 1.5rem 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${theme.colors.border};
    margin: 2.5rem 0;
  }

  img {
    border-radius: ${theme.borderRadius.md};
    max-width: 100%;
    margin: 1.5rem 0;
  }

  ${media.sm} {
    font-size: ${theme.fontSizes.base};
  }
`;

const RelatedSection = styled.section`
  margin-top: ${theme.spacing['5xl']};
  padding-top: ${theme.spacing['2xl']};
  border-top: 1px solid ${theme.colors.border};
`;

const RelatedTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: ${theme.spacing.xl};
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.lg};

  ${media.sm} {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled(Link)`
  border-top: 1px solid ${theme.colors.border};
  padding-top: ${theme.spacing.md};
  display: block;
  transition: color ${theme.transitions.fast};

  &:hover h4 {
    color: ${theme.colors.accent};
  }

  h4 {
    font-size: ${theme.fontSizes.base};
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: ${theme.spacing.xs};
    transition: color ${theme.transitions.fast};
  }

  p {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.muted};
  }
`;

export default function PostPageClient({ post, related }: { post: Post; related: PostMeta[] }) {
  return (
    <Page>
      <Inner>
        <BackLink href="/blog">← Back to Blog</BackLink>

        <PostHeader>
          <MetaRow>
            <Category>{post.category}</Category>
            <DateText>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </DateText>
            <ReadTime>{post.readingTime}</ReadTime>
          </MetaRow>

          <PostTitle>{post.title}</PostTitle>

          {post.tags.length > 0 && (
            <Tags>
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
          )}

          <AuthorRow>
            <AuthorAvatar>GR</AuthorAvatar>
            <AuthorInfo>
              <AuthorName>Germán Ruiz</AuthorName>
              <AuthorTitle>Software Engineer</AuthorTitle>
            </AuthorInfo>
          </AuthorRow>
        </PostHeader>

        <PostBody>
          <MDXRemote source={post.content} />
        </PostBody>

        {related.length > 0 && (
          <RelatedSection>
            <RelatedTitle>Related Posts</RelatedTitle>
            <RelatedGrid>
              {related.map((r) => (
                <RelatedCard key={r.slug} href={`/blog/${r.slug}`}>
                  <h4>{r.title}</h4>
                  <p>{r.readingTime}</p>
                </RelatedCard>
              ))}
            </RelatedGrid>
          </RelatedSection>
        )}
      </Inner>
    </Page>
  );
}

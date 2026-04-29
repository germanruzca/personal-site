'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { theme, media } from '@/styles/theme';

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing['2xl']};
  text-align: center;
`;

const Inner = styled.div`
  max-width: 480px;
`;

const Code = styled.p`
  font-size: ${theme.fontSizes['5xl']};
  font-weight: 800;
  letter-spacing: -0.05em;
  color: ${theme.colors.border};
  line-height: 1;
  margin-bottom: ${theme.spacing.lg};
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: ${theme.spacing.md};
`;

const Desc = styled.p`
  color: ${theme.colors.muted};
  margin-bottom: ${theme.spacing.xl};
`;

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 24px;
  min-height: 44px;
  background: ${theme.colors.text};
  color: ${theme.colors.background};
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  border-radius: ${theme.borderRadius.full};
  transition: background ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.accent};
  }
`;

export default function NotFound() {
  return (
    <Page>
      <Inner>
        <Code>404</Code>
        <Title>Page not found</Title>
        <Desc>The page you&apos;re looking for doesn&apos;t exist or has been moved.</Desc>
        <HomeLink href="/">← Back home</HomeLink>
      </Inner>
    </Page>
  );
}

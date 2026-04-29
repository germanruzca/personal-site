'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme, media } from '@/styles/theme';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing['2xl']};
  padding-top: 64px;

  ${media.sm} {
    padding: 80px ${theme.spacing.lg} ${theme.spacing['3xl']};
    min-height: auto;
  }
`;

const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: ${theme.spacing['3xl']};

  ${media.md} {
    grid-template-columns: 1fr;
    gap: ${theme.spacing['2xl']};
  }
`;

const HeroContent = styled.div`
  max-width: 700px;
`;

const EyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
`;

const Dot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${theme.colors.accent};
  flex-shrink: 0;
`;

const Eyebrow = styled.p`
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${theme.colors.muted};
`;

const Headline = styled.h1`
  font-size: ${theme.fontSizes['5xl']};
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.text};

  em {
    font-style: normal;
    background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentPurple});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Bio = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.muted};
  line-height: 1.75;
  margin-bottom: ${theme.spacing['2xl']};
  max-width: 540px;
`;

const CTARow = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: 14px 28px;
  min-height: 44px;
  background: ${theme.colors.text};
  color: ${theme.colors.background};
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  border-radius: ${theme.borderRadius.full};
  transition: all ${theme.transitions.base};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }

  ${media.xs} {
    width: 100%;
    justify-content: center;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: 14px 28px;
  min-height: 44px;
  background: transparent;
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  border: 1.5px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  transition: all ${theme.transitions.base};
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.text};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.sm};
  }

  ${media.xs} {
    width: 100%;
    justify-content: center;
  }
`;

const HeroVisual = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  align-items: flex-end;

  ${media.md} {
    display: none;
  }
`;

const StatCard = styled.div`
  background: ${theme.colors.cardBg};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  min-width: 160px;
  box-shadow: ${theme.shadows.sm};

  strong {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    color: ${theme.colors.text};
    line-height: 1;
  }

  span {
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.muted};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
`;

const AccentCard = styled(StatCard)`
  background: ${theme.colors.text};

  strong {
    color: ${theme.colors.background};
  }

  span {
    color: ${theme.colors.muted};
    filter: brightness(2);
  }
`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <HeroSection id="about">
      <HeroInner>
        <HeroContent>
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={fadeUp}>
              <EyebrowRow>
                <Dot />
                <Eyebrow>Germán Ruiz — Software Engineer</Eyebrow>
              </EyebrowRow>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Headline>
                I build products that <em>scale</em> and make sense.
              </Headline>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Bio>
                Full-stack engineer focused on building fast, reliable, and delightful
                software. I care deeply about developer experience, clean architecture,
                and shipping things that matter.
              </Bio>
            </motion.div>

            <motion.div variants={fadeUp}>
              <CTARow>
                <PrimaryButton href="mailto:germaru97@gmail.com">
                  Book a call ↗
                </PrimaryButton>
                <SecondaryButton href="/cv.pdf" download>
                  Download CV ↓
                </SecondaryButton>
              </CTARow>
            </motion.div>
          </motion.div>
        </HeroContent>

        <HeroVisual>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <AccentCard>
              <strong>5+</strong>
              <span>Years of experience</span>
            </AccentCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <StatCard>
              <strong>20+</strong>
              <span>Projects shipped</span>
            </StatCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <StatCard>
              <strong>∞</strong>
              <span>Cups of coffee</span>
            </StatCard>
          </motion.div>
        </HeroVisual>
      </HeroInner>
    </HeroSection>
  );
}

'use client';

import React from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { theme, media } from '@/styles/theme';

const EXPERIENCES = [
  {
    company: 'Company A',
    role: 'Senior Software Engineer',
    period: '2022 — Present',
    bullets: [
      'Led architecture for a microservices platform serving 500k+ users',
      'Reduced API latency by 40% through caching and query optimization',
      'Mentored 3 junior engineers and ran weekly code reviews',
    ],
  },
  {
    company: 'Company B',
    role: 'Software Engineer',
    period: '2020 — 2022',
    bullets: [
      'Built and maintained React dashboard used by 200+ enterprise clients',
      'Designed RESTful APIs consumed by web and mobile apps',
      'Implemented CI/CD pipelines that cut deployment time by 60%',
    ],
  },
  {
    company: 'Company C',
    role: 'Junior Frontend Developer',
    period: '2019 — 2020',
    bullets: [
      'Developed UI components with React and TypeScript',
      'Collaborated with design team to implement pixel-perfect interfaces',
      'Contributed to component library used across 5 products',
    ],
  },
];

const Section = styled.section`
  padding: ${theme.spacing['5xl']} ${theme.spacing['2xl']};
  background: ${theme.colors.background};

  ${media.sm} {
    padding: ${theme.spacing['3xl']} ${theme.spacing.lg};
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

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
  margin-bottom: ${theme.spacing['3xl']};
  color: ${theme.colors.text};
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 28px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 0;
    width: 1px;
    background: ${theme.colors.border};
  }

  ${media.sm} {
    padding-left: 0;

    &::before {
      display: none;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: ${theme.spacing['3xl']};

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -32px;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${theme.colors.accent};
    border: 2px solid ${theme.colors.background};
    box-shadow: 0 0 0 2px ${theme.colors.accent};
  }

  ${media.sm} {
    &::before {
      display: none;
    }
  }
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.sm};
  flex-wrap: wrap;

  ${media.sm} {
    flex-direction: column;
    gap: ${theme.spacing.xs};
  }
`;

const Company = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const Period = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.muted};
  font-weight: 500;
  flex-shrink: 0;
`;

const Role = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.muted};
  font-weight: 500;
  margin-bottom: ${theme.spacing.md};
`;

const Bullets = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const Bullet = styled.li`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.muted};
  line-height: 1.65;
  padding-left: ${theme.spacing.md};
  position: relative;

  &::before {
    content: '—';
    position: absolute;
    left: 0;
    color: ${theme.colors.accent};
    font-weight: 700;
  }
`;

function TimelineEntry({ item, index }: { item: typeof EXPERIENCES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <TimelineItem
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <ItemHeader>
        <Company>{item.company}</Company>
        <Period>{item.period}</Period>
      </ItemHeader>
      <Role>{item.role}</Role>
      <Bullets>
        {item.bullets.map((b, i) => (
          <Bullet key={i}>{b}</Bullet>
        ))}
      </Bullets>
    </TimelineItem>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="experience">
      <Inner>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Career</SectionLabel>
          <SectionTitle>Experience</SectionTitle>
        </motion.div>

        <Timeline>
          {EXPERIENCES.map((item, i) => (
            <TimelineEntry key={i} item={item} index={i} />
          ))}
        </Timeline>
      </Inner>
    </Section>
  );
}

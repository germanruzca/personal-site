'use client';

import React from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { theme, media } from '@/styles/theme';

const EXPERIENCES = [
  {
    company: 'Salesloft',
    location: 'Atlanta, USA (Remote)',
    role: 'Software Engineer',
    period: 'Aug 2022 — Nov 2025',
    bullets: [
      'Executed a major backend refactor of the microservices architecture using Node.js, Redis, and Kafka, optimizing data flow and queue management alongside PostgreSQL and Elasticsearch.',
      'Integrated Generative AI features using LLMs to automatically extract summaries, action items, and decision markers from call transcripts, directly enhancing product value.',
      'Developed full-stack features by connecting backend REST and GraphQL APIs with React components, streamlining data ingestion and processing for enterprise-level customers.',
      'Executed a full UI modernization for a core app, redesigning all components and views through a structured Design System to improve user engagement.',
      'Increased system reliability by creating DataDog and SumoLogic dashboards for real-time monitoring, speeding up Root Cause Analysis (RCA) and preventing downtime.',
      'Owned end-to-end delivery of features utilizing CI/CD pipelines within a full Kubernetes infrastructure.',
      'Mentored 2 engineering interns through code reviews and technical guidance, resulting in their successful promotions to full-time Junior Software Engineers.',
    ],
  },
  {
    company: 'BrightCoders Academy',
    location: 'Colima, Mexico (Remote)',
    role: 'Software Engineer Trainee',
    period: 'Feb 2022 — May 2022',
    bullets: [
      'Developed full-stack applications using Ruby on Rails and JavaScript, ensuring high code quality through strict application of Test-Driven Development (TDD) and SOLID principles.',
      'Worked in asynchronous collaboration tools within a remote-first, Agile/Scrum environment, consistently delivering features in two-week sprints.',
      'Engaged in intensive Pair Programming and peer code review sessions, focusing on improving collective technical problem-solving.',
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
  margin-bottom: ${theme.spacing.xs};
  flex-wrap: wrap;

  ${media.sm} {
    flex-direction: column;
    gap: ${theme.spacing.xs};
  }
`;

const CompanyRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
`;

const Company = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const Location = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.muted};
  font-weight: 400;
`;

const Period = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.muted};
  font-weight: 500;
  flex-shrink: 0;
`;

const Role = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.accent};
  font-weight: 600;
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

const EducationBlock = styled(motion.div)`
  margin-top: ${theme.spacing['3xl']};
  padding-top: ${theme.spacing['2xl']};
  border-top: 1px solid ${theme.colors.border};
`;

const EduLabel = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.lg};
`;

const EduRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
`;

const EduSchool = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const EduDegree = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.muted};
  margin-top: ${theme.spacing.xs};
`;

const EduPeriod = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.muted};
  flex-shrink: 0;
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
        <CompanyRow>
          <Company>{item.company}</Company>
          <Location>· {item.location}</Location>
        </CompanyRow>
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

  const eduRef = useRef(null);
  const eduInView = useInView(eduRef, { once: true, margin: '-80px' });

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

        <EducationBlock
          ref={eduRef}
          initial={{ opacity: 0, y: 20 }}
          animate={eduInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <EduLabel>Education</EduLabel>
          <EduRow>
            <div>
              <EduSchool>Universidad de Colima</EduSchool>
              <EduDegree>
                B.S. in Telematics Engineering &nbsp;·&nbsp;{' '}
                <strong>Premio Peña Colorada — Top of Class Award</strong>
              </EduDegree>
            </div>
            <EduPeriod>Aug 2018 — Jul 2022</EduPeriod>
          </EduRow>
        </EducationBlock>
      </Inner>
    </Section>
  );
}

'use client';

import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { theme, media } from '@/styles/theme';

const PROJECTS = [
  {
    name: 'Project Alpha',
    description: 'A full-stack SaaS platform for team collaboration with real-time features, built with Next.js and PostgreSQL.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Project Beta',
    description: 'Open-source CLI tool for developers to automate repetitive workflows. 2k+ GitHub stars.',
    tags: ['Node.js', 'TypeScript', 'CLI'],
    github: 'https://github.com',
    demo: null,
  },
  {
    name: 'Project Gamma',
    description: 'Mobile-first e-commerce storefront with seamless Stripe integration and sub-second page loads.',
    tags: ['React', 'Stripe', 'Tailwind', 'Vercel'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Project Delta',
    description: 'Real-time analytics dashboard processing 10M+ events/day with WebSocket data streams.',
    tags: ['React', 'WebSockets', 'Go', 'ClickHouse'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Project Epsilon',
    description: 'Developer-friendly REST API boilerplate with auth, rate limiting and full test coverage.',
    tags: ['Node.js', 'Express', 'JWT', 'Jest'],
    github: 'https://github.com',
    demo: null,
  },
  {
    name: 'Project Zeta',
    description: 'AI-powered writing assistant that helps developers write better commit messages and PR descriptions.',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

const Section = styled.section`
  padding: ${theme.spacing['5xl']} ${theme.spacing['2xl']};
  background: ${theme.colors.darkBg};

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
  color: ${theme.colors.darkText};
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

const Card = styled(motion.article)`
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  transition: border-color ${theme.transitions.base}, transform ${theme.transitions.base};
  cursor: default;

  &:hover {
    border-color: #3a3a3a;
    transform: translateY(-4px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${theme.spacing.sm};
`;

const ProjectName = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: 700;
  color: ${theme.colors.darkText};
  letter-spacing: -0.02em;
`;

const LinkRow = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  flex-shrink: 0;
`;

const IconLink = styled.a`
  color: #6b6b6b;
  transition: color ${theme.transitions.fast};
  display: flex;
  align-items: center;
  min-height: 44px;
  min-width: 44px;
  justify-content: center;

  &:hover {
    color: ${theme.colors.darkText};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Description = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: #8a8a8a;
  line-height: 1.7;
  flex: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
`;

const Tag = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #6b6b6b;
  background: #222;
  border: 1px solid #333;
  border-radius: ${theme.borderRadius.full};
  padding: 3px 10px;
`;

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Card
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <CardHeader>
        <ProjectName>{project.name}</ProjectName>
        <LinkRow>
          <IconLink href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </IconLink>
          {project.demo && (
            <IconLink href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
              <ExternalIcon />
            </IconLink>
          )}
        </LinkRow>
      </CardHeader>
      <Description>{project.description}</Description>
      <Tags>
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </Card>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="projects">
      <Inner>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Work</SectionLabel>
          <SectionTitle>Selected Projects</SectionTitle>
        </motion.div>

        <Grid>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

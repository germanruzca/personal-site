'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme, media } from '@/styles/theme';

const NAV_LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
];

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing['2xl']};
  transition: background ${theme.transitions.base}, box-shadow ${theme.transitions.base};

  ${({ $scrolled }) =>
    $scrolled &&
    css`
      background: rgba(244, 244, 240, 0.92);
      backdrop-filter: blur(12px);
      box-shadow: 0 1px 0 ${theme.colors.border};
    `}

  ${media.sm} {
    padding: 0 ${theme.spacing.lg};
  }
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${theme.colors.text};

  span {
    color: ${theme.colors.accent};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};

  ${media.sm} {
    display: none;
  }
`;

const NavLink = styled.li<{ $active: boolean }>`
  a {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ $active }) => ($active ? theme.colors.accent : theme.colors.muted)};
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.text};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};

  ${media.sm} {
    display: none;
  }
`;

const SocialLink = styled.a`
  color: ${theme.colors.muted};
  transition: color ${theme.transitions.fast};
  display: flex;
  align-items: center;

  &:hover {
    color: ${theme.colors.text};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  min-height: 44px;
  min-width: 44px;
  align-items: center;
  justify-content: center;

  ${media.sm} {
    display: flex;
  }
`;

const HamburgerLine = styled.span<{ $open: boolean; $pos: 'top' | 'mid' | 'bot' }>`
  display: block;
  width: 22px;
  height: 2px;
  background: ${theme.colors.text};
  border-radius: 2px;
  transition: all ${theme.transitions.base};

  ${({ $open, $pos }) =>
    $open &&
    $pos === 'top' &&
    css`
      transform: translateY(7px) rotate(45deg);
    `}
  ${({ $open, $pos }) =>
    $open &&
    $pos === 'mid' &&
    css`
      opacity: 0;
      transform: scaleX(0);
    `}
  ${({ $open, $pos }) =>
    $open &&
    $pos === 'bot' &&
    css`
      transform: translateY(-7px) rotate(-45deg);
    `}
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.background};
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xl};
`;

const MobileNavLink = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${theme.colors.text};
  transition: color ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.accent};
  }
`;

const MobileSocials = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <Nav $scrolled={scrolled}>
        <NavInner>
          <Logo href="/">
            GR<span>.</span>
          </Logo>

          <NavLinks>
            {NAV_LINKS.map(({ href, label }) => (
              <NavLink key={href} $active={pathname === href}>
                <Link href={href}>{label}</Link>
              </NavLink>
            ))}
          </NavLinks>

          <SocialLinks>
            <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <XIcon />
            </SocialLink>
          </SocialLinks>

          <HamburgerButton onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            <HamburgerLine $open={open} $pos="top" />
            <HamburgerLine $open={open} $pos="mid" />
            <HamburgerLine $open={open} $pos="bot" />
          </HamburgerButton>
        </NavInner>
      </Nav>

      <AnimatePresence>
        {open && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <MobileNavLink key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </MobileNavLink>
            ))}
            <MobileSocials>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                <XIcon />
              </SocialLink>
            </MobileSocials>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.213 5.567 5.951-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

"use client";

import { useState, useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const ToolbarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  position: sticky; /* Should stick to top when scrolling */
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  backdrop-filter: blur(12px);
  z-index: 1000;
  transition: all 0.2s ease-in-out;

  nav {
    display: flex;
    gap: 1.25rem;
    overflow-x: auto;
    padding: 0.25rem 0;
    scroll-behavior: smooth;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  @media (max-width: 1024px) {
    padding: 0.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    nav {
      gap: 1rem;
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 2rem;

  img {
    height: 32px;
    width: auto;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    margin-right: 1.5rem;
    img {
      height: 28px;
    }
  }
`;

const TabButton = styled.button<{ active: boolean }>`
  position: relative;
  background: none;
  border: none;
  padding: 0.5rem 0;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: pointer;
  transition: color 0.2s ease;
  white-space: nowrap;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    transform: scaleX(${({ active }) => (active ? 1 : 0)});
    transform-origin: bottom center;
    transition: transform 0.2s ease-out;
  }

  &:hover {
    color: #fff;
    &:after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.4rem 0;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Toolbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleTabClick = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  const navItems = [
    { id: 'home', label: 'Prima', href: '/' },
    { id: 'services', label: 'Tjenester', href: '/services' },
    { id: 'process', label: 'Prosess', href: '/prosess' },
    { id: '360videos', label: '360 Videoer', href: '/360-videos' },
    { id: '180videos', label: '180 Videoer', href: '/180-videos' },
    { id: 'userjourney', label: 'Brukerreise', href: '/brukerreise' },
    { id: 'kontakt', label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <ToolbarStyled>
      <LogoWrapper>
        <StyledLink href="/">
          <Image 
            src="/Images/VR.png" 
            alt="VR Logo" 
            width={96} 
            height={32} 
            priority
          />
        </StyledLink>
      </LogoWrapper>
      <nav>
        {navItems.map((item) => (
          <TabButton
            key={item.id}
            active={activeTab === item.id}
            onClick={() => handleTabClick(item.id)}
          >
            <StyledLink href={item.href}>{item.label}</StyledLink>
          </TabButton>
        ))}
      </nav>
    </ToolbarStyled>
  );
};

export default Toolbar;
// app/HeroSection.tsx
"use client";

import { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FullScreenIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
  background-color: #4b6079;
  padding: 2rem;
  color: #fff;
`;

const Title = styled.h1`
  font-size: calc(2rem + 2vw);
  text-align: center;
  color: #fff;
`;

const Punchline = styled.h2`
  font-size: calc(1rem + 1vw);
  text-align: center;
  color: #fff;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: calc(0.8rem + 1vw);
  }
`;

const ScrollArrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  .chevron-icon {
    font-size: 24px;
    color: #fff;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
`;

const AnimatedLogo = styled(motion(Image))`
  width: 1000px;
  height: auto;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export default function HeroSection() {
  const form = useRef<HTMLFormElement>(null);

  return (
    <FullScreenIntro>
      <Title>PRIMA</Title>
      <Punchline>Digitale Verktøy og Opplevelser for Eldre</Punchline>
      <AnimatedLogo
        src="/Images/VR.png"
        alt="VR Logo"
        width={1000}
        height={400}
        priority
      />
      <ScrollArrow>
        <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
      </ScrollArrow>
    </FullScreenIntro>
  );
}
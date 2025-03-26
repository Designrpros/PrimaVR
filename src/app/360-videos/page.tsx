"use client";

import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFilm } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

// Styled Components
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #4b6079;
  padding-top: 60px;
`;

const FullScreenIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #4b6079;
  padding: 2rem;
  color: #fff;
  margin-top: -9rem; /* Move content up slightly */
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

const MovieIcon = styled(motion(FontAwesomeIcon))`
  font-size: 10rem;
  color: #fff;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 6rem;
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

const VideoLibrarySection = styled.div`
  padding: 2rem;
  margin: 2rem auto;
  width: 90%;
  max-width: 1200px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#4b6079' : '#ddd')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4b6079;
    color: #fff;
  }
`;

const VideoGridWrapper = styled.div`
  height: 70vh; /* Nearly full viewport height */
  width: 100%; /* Full width of the section */
  overflow: hidden; /* Prevent outer scroll */
  background-color: #f4f4f4;
  border-radius: 8px;
`;

const VideoGridScroll = styled.div`
  height: 100%; /* Fill the wrapper height */
  overflow-y: auto; /* Enable vertical scrolling inside */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4b6079;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #e8eef4;
  }
`;

const VideoItem = styled(motion.div)`
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const VideoImage = styled(Image)`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
`;

const VideoTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0.5rem 0;
  color: #333;
`;

const VideoDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1rem;
`;

const WatchLink = styled.a`
  color: #4b6079;
  font-weight: bold;
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #e8eef4;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4b6079;
    color: #fff;
  }
`;

const videos = [
  {
    title: '360° Nordlys i Norge',
    thumbnail: 'https://img.youtube.com/vi/ZZyBG6UsvoQ/hqdefault.jpg',
    description: 'Opplev det magiske nordlyset i en 360-graders visning.',
    category: 'Natur',
    url: 'https://youtu.be/ZZyBG6UsvoQ',
  },
  {
    title: '360° Undervannskorallrev',
    thumbnail: 'https://img.youtube.com/vi/-xNN-bJQ4vI/hqdefault.jpg',
    description: 'Dykk ned i en levende undervannsverden med korallrev.',
    category: 'Natur',
    url: 'https://youtu.be/-xNN-bJQ4vI',
  },
  {
    title: '360° Vikingskipreise',
    thumbnail: 'https://img.youtube.com/vi/Wmdkhmuh-zU/hqdefault.jpg',
    description: 'Seil med vikinger på en historisk 360-graders reise.',
    category: 'Historie',
    url: 'https://youtu.be/Wmdkhmuh-zU',
  },
  {
    title: '360° Klassisk Konsert',
    thumbnail: 'https://img.youtube.com/vi/hEdzv7D4CbQ/hqdefault.jpg',
    description: 'Nyt en live klassisk musikkopptreden i 360 grader.',
    category: 'Underholdning',
    url: 'https://youtu.be/hEdzv7D4CbQ',
  },
];

const VideoLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  const categories = ['Alle', 'Natur', 'Historie', 'Underholdning'];
  const filteredVideos = selectedCategory === 'Alle' ? videos : videos.filter(video => video.category === selectedCategory);

  return (
    <>
      <Head>
        <title>360 Videobibliotek - PRIMA</title>
        <meta name="description" content="Utforsk vårt bibliotek med 360-videoinnhold for eldre." />
      </Head>
      <PageWrapper>
        <FullScreenIntro>
          <Title>360 Videobibliotek</Title>
          <Punchline>Opplevelser i virtuell virkelighet for eldre</Punchline>
          <MovieIcon
            icon={faFilm}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <ScrollArrow>
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </ScrollArrow>
        </FullScreenIntro>

        <VideoLibrarySection>
          <Heading>Våre 360 Videoer</Heading>
          <FilterWrapper>
            {categories.map(category => (
              <FilterButton
                key={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </FilterButton>
            ))}
          </FilterWrapper>
          <VideoGridWrapper>
            <VideoGridScroll>
              {filteredVideos.map((video, index) => (
                <Link href={video.url} passHref key={index} target="_blank" rel="noopener noreferrer">
                  <VideoItem whileHover={{ scale: 1.05 }}>
                    <VideoImage src={video.thumbnail} alt={video.title} width={280} height={160} />
                    <VideoTitle>{video.title}</VideoTitle>
                    <VideoDescription>{video.description}</VideoDescription>
                    <WatchLink>Se Video</WatchLink>
                  </VideoItem>
                </Link>
              ))}
            </VideoGridScroll>
          </VideoGridWrapper>
        </VideoLibrarySection>
      </PageWrapper>
    </>
  );
};

export default VideoLibrary;
"use client";

import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Styled Components
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #4b6079;
  padding-top: 60px;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FullScreenIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 95vh; /* Changed to min-height to avoid overflow issues */
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
  max-width: 100%; /* Prevent overflow on smaller screens */

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const GallerySection = styled.div`
  background-color: #f4f4f4;
  color: #444;
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem auto;
  width: 90%;
  max-width: 800px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem auto;
  }
`;

const GalleryTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const GalleryCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 0.5rem;
  text-align: center;
  font-size: 1rem;
`;

const GalleryLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const ServicesSection = styled.div`
  background-color: #f4f4f4;
  color: #444;
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem auto;
  width: 90%;
  max-width: 800px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem auto;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #fff;
  color: #444;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

const Heading = styled.h1`
  font-size: calc(2rem + 2vw);
  text-align: center;
  margin: 2rem 0;

  @media (max-width: 768px) {
    font-size: calc(1.5rem + 1.5vw);
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 1rem 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Home: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  // Sample 360 video data
  const galleryVideos360 = [
    {
      title: '360° Nordlys i Norge',
      thumbnail: 'https://img.youtube.com/vi/ZZyBG6UsvoQ/hqdefault.jpg',
      description: 'Opplev det magiske nordlyset i en 360-graders visning.',
      category: 'Natur',
      url: 'https://youtu.be/ZZyBG6UsvoQ',
      type: '360',
    },
    {
      title: '360° Undervannskorallrev',
      thumbnail: 'https://img.youtube.com/vi/-xNN-bJQ4vI/hqdefault.jpg',
      description: 'Dykk ned i en levende undervannsverden med korallrev.',
      category: 'Natur',
      url: 'https://youtu.be/-xNN-bJQ4vI',
      type: '360',
    },
    {
      title: '360° Vikingskipreise',
      thumbnail: 'https://img.youtube.com/vi/Wmdkhmuh-zU/hqdefault.jpg',
      description: 'Seil med vikinger på en historisk 360-graders reise.',
      category: 'Historie',
      url: 'https://youtu.be/Wmdkhmuh-zU',
      type: '360',
    },
    {
      title: '360° Klassisk Konsert',
      thumbnail: 'https://img.youtube.com/vi/hEdzv7D4CbQ/hqdefault.jpg',
      description: 'Nyt en live klassisk musikkopptreden i 360 grader.',
      category: 'Underholdning',
      url: 'https://youtu.be/hEdzv7D4CbQ',
      type: '360',
    },
  ];

  // Sample 180 video data
  const galleryVideos180 = [
    {
      title: '180° Nordlys i Norge',
      thumbnail: 'https://img.youtube.com/vi/ZZyBG6UsvoQ/hqdefault.jpg',
      description: 'Opplev det magiske nordlyset i en 180-graders visning.',
      category: 'Natur',
      url: 'https://youtu.be/ZZyBG6UsvoQ',
      type: '180',
    },
    {
      title: '180° Undervannskorallrev',
      thumbnail: 'https://img.youtube.com/vi/-xNN-bJQ4vI/hqdefault.jpg',
      description: 'Dykk ned i en levende undervannsverden med korallrev i 180 grader.',
      category: 'Natur',
      url: 'https://youtu.be/-xNN-bJQ4vI',
      type: '180',
    },
    {
      title: '180° Vikingskipreise',
      thumbnail: 'https://img.youtube.com/vi/Wmdkhmuh-zU/hqdefault.jpg',
      description: 'Seil med vikinger på en historisk 180-graders reise.',
      category: 'Historie',
      url: 'https://youtu.be/Wmdkhmuh-zU',
      type: '180',
    },
    {
      title: '180° Klassisk Konsert',
      thumbnail: 'https://img.youtube.com/vi/hEdzv7D4CbQ/hqdefault.jpg',
      description: 'Nyt en live klassisk musikkopptreden i 180 grader.',
      category: 'Underholdning',
      url: 'https://youtu.be/hEdzv7D4CbQ',
      type: '180',
    },
  ];

  // Ensure client-side rendering matches server-side
  useEffect(() => {
    // Force re-render or hydration fix if needed
    // This is a workaround for potential hydration mismatches
  }, []);

  return (
    <>
      <Head>
        <title>Tjenestedesign og PRIMA - AKTHE</title>
        <meta name="description" content="Tjenestedesign og PRIMA-aktiviteter fra AKTHE." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-329ZE249M1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-329ZE249M1');
            `,
          }}
        />
      </Head>
      <PageWrapper>
        <FullScreenIntro>
          <Title>PRIMA</Title>
          <Punchline>Digitale Verktøy og Opplevelser for Eldre</Punchline>
          <AnimatedLogo
            src="/Images/VR.png"
            alt="VR Logo"
            width={1000}
            height={400}
            priority // Preload to avoid FOUC
          />
          <ScrollArrow>
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </ScrollArrow>
        </FullScreenIntro>

        <ServicesSection>
          <Heading>PRIMA</Heading>
          <Paragraph>Digitale Verktøy og Opplevelser for Eldre</Paragraph>
          <List>
            <ListItem>
              PRIMA er et prosjekt som tar sikte på å forbedre livskvaliteten for eldre ved bruk av digital teknologi, spesielt VR-headset. Vi tilbyr skreddersydde opplevelser tilpasset eldre brukergrupper i Bærum kommune.
            </ListItem>
            <ListItem>
              Prosjektet ledes av Studio51 under Akthe, en delvis kommunal organisasjon. Gjennom dette prosjektet vil vi utforske hvordan VR-teknologi kan gi meningsfulle og engasjerende opplevelser for eldre samtidig som vi adresserer deres spesifikke behov.
            </ListItem>
            <ListItem>
              PRIMA vil følge en tjenestedesignprosess som dekker alle faser av dobbeltdiamanten, basert på intervjuer og observasjoner.
            </ListItem>
          </List>
        </ServicesSection>

        {/* 360 Videos Section */}
        <GallerySection>
          <GalleryTitle>Utforsk Vårt 360-Videoinnhold</GalleryTitle>
          <GalleryGrid>
            {galleryVideos360.map((video, index) => (
              <GalleryItem key={index}>
                <GalleryLink href="/360-videos">
                  <GalleryImage
                    src={video.thumbnail}
                    alt={video.title}
                    width={250}
                    height={200}
                    priority // Preload to avoid FOUC
                  />
                  <GalleryCaption>{video.title}</GalleryCaption>
                </GalleryLink>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </GallerySection>

        {/* 180 Videos Section */}
        <GallerySection>
          <GalleryTitle>Utforsk Vårt 180-Videoinnhold</GalleryTitle>
          <GalleryGrid>
            {galleryVideos180.map((video, index) => (
              <GalleryItem key={index}>
                <GalleryLink href="/180-videos">
                  <GalleryImage
                    src={video.thumbnail}
                    alt={video.title}
                    width={250}
                    height={200}
                    priority // Preload to avoid FOUC
                  />
                  <GalleryCaption>{video.title}</GalleryCaption>
                </GalleryLink>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </GallerySection>
      </PageWrapper>
    </>
  );
};

export default Home;
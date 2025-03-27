// app/HomeComponent.tsx
"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion'; // Add this import
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './HomeComponent.css';

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

export default function HomeComponent() {
  const form = useRef<HTMLFormElement>(null);

  return (
    <div className="page-wrapper">
      <div className="full-screen-intro">
        <h1 className="title">PRIMA</h1>
        <h2 className="punchline">Digitale Verktøy og Opplevelser for Eldre</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="animated-logo"
        >
          <Image
            src="/Images/VR.png"
            alt="VR Logo"
            width={1000}
            height={400}
            priority
            className="animated-logo-image"
          />
        </motion.div>
        <div className="scroll-arrow">
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </div>
      </div>

      <div className="services-section">
        <h1 className="heading">PRIMA</h1>
        <p className="paragraph">Digitale Verktøy og Opplevelser for Eldre</p>
        <ul className="list">
          <li className="list-item">
            PRIMA er et prosjekt som tar sikte på å forbedre livskvaliteten for eldre ved bruk av digital teknologi, spesielt VR-headset. Vi tilbyr skreddersydde opplevelser tilpasset eldre brukergrupper i Bærum kommune.
          </li>
          <li className="list-item">
            Prosjektet ledes av Studio51 under Akthe, en delvis kommunal organisasjon. Gjennom dette prosjektet vil vi utforske hvordan VR-teknologi kan gi meningsfulle og engasjerende opplevelser for eldre samtidig som vi adresserer deres spesifikke behov.
          </li>
          <li className="list-item">
            PRIMA vil følge en tjenestedesignprosess som dekker alle faser av dobbeltdiamanten, basert på intervjuer og observasjoner.
          </li>
        </ul>
      </div>

      {/* 360 Videos Section */}
      <div className="gallery-section">
        <h2 className="gallery-title">Utforsk Vårt 360-Videoinnhold</h2>
        <div className="gallery-grid">
          {galleryVideos360.map((video, index) => (
            <div className="gallery-item" key={index}>
              <Link href="/360-videos" className="gallery-link">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={250}
                  height={200}
                  priority
                  className="gallery-image"
                />
                <div className="gallery-caption">{video.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 180 Videos Section */}
      <div className="gallery-section">
        <h2 className="gallery-title">Utforsk Vårt 180-Videoinnhold</h2>
        <div className="gallery-grid">
          {galleryVideos180.map((video, index) => (
            <div className="gallery-item" key={index}>
              <Link href="/180-videos" className="gallery-link">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={250}
                  height={200}
                  priority
                  className="gallery-image"
                />
                <div className="gallery-caption">{video.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
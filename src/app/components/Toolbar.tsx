// app/components/Toolbar.tsx
"use client";

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Toolbar.css';

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
    <div className="toolbar-styled">
      <div className="logo-wrapper">
        <Link href="/" className="styled-link">
          <Image 
            src="/Images/VR.png" 
            alt="VR Logo" 
            width={96} 
            height={32} 
            priority
            className="logo-image"
          />
        </Link>
      </div>
      <nav className="toolbar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`tab-button ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => handleTabClick(item.id)}
          >
            <Link href={item.href} className="styled-link">
              {item.label}
            </Link>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Toolbar;
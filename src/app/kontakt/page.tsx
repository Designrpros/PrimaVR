"use client";

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMusic, FaCity, FaHome } from 'react-icons/fa'; // Importing icons from react-icons

// Styled components
const PageWrapper = styled.div`
  min-height: 100vh; /* Ensures the background covers the full viewport height */
  width: 100%;
  background-color: #4b6079; /* Blue background for the entire page */
`;

const ServicesWrapper = styled(motion.div)`
  padding: 5rem 1rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
  padding-top: 100px; /* Keeps the top padding for spacing below the toolbar */
`;

const Card = styled.div`
  background-color: #f4f4f4;
  color: #333;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 80%;
  max-width: 200px;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const CardLink = styled.a`
  color: #82b1ff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const CardDescription = styled.p`
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #4b6079;
  margin-right: 0.5rem; // Adds space between icon and title
`;

// Kontakt component
const Kontakt = () => {
  return (
    <PageWrapper>
      <ServicesWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardImage src="/Images/Studio51.png" alt="Studio 51" />
          <CardTitle>
            <IconWrapper>
              <FaMusic />
            </IconWrapper>
            Studio 51
          </CardTitle>
          <CardLink href="http://www.rapclinic.no">www.rapclinic.no</CardLink>
          <CardDescription>
            Studio 51 er et kreativt fellesskap under AKTHE, hvor medlemmer samarbeider om musikkproduksjon og kunstneriske uttrykk. Vi er stolte av å være en del av PRIMA-prosjektet, som fremmer kunstnerisk utvikling og sosial integrasjon. Vårt fellesskap oppfordrer til samarbeid og støtte blant medlemmene, og gir dem mulighet til å utvikle ferdigheter innen musikk og kreativitet.
          </CardDescription>
        </Card>

        <Card>
          <CardImage src="/Images/BærumKommune.png" alt="Bærum kommune" />
          <CardTitle>
            <IconWrapper>
              <FaCity />
            </IconWrapper>
            Bærum Kommune
          </CardTitle>
          <CardLink href="https://www.baerum.kommune.no/om-barum-kommune/organisasjon/innovasjon/">
            Bærum Kommune
          </CardLink>
          <CardDescription>
            Bærum Kommune støtter PRIMA-prosjektet ved å tilby ressurser og samarbeid som fremmer kreativitet og fellesskap. Kommunen bidrar til utviklingen av ulike prosjekter og initiativer som styrker den sosiale nettverksbyggingen, og gir medlemmene muligheter til å delta i meningsfulle aktiviteter som fremmer deres personlige vekst.
          </CardDescription>
        </Card>

        <Card>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/949122259?h=1d9f655d09"
            width="400"
            height="200"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <CardTitle>
            <IconWrapper>
              <FaHome />
            </IconWrapper>
            Lindelia Sykehjem
          </CardTitle>
          <CardLink href="https://www.baerum.kommune.no/tjenester/helse-og-omsorg/sykehjem-og-omsorgsboliger/sykehjem-bo-og-behandlingssenter/lindelia/">
            Lindelia Sykehjem
          </CardLink>
          <CardDescription>
            Lindelia Sykehjem er en viktig partner i PRIMA-prosjektet, og tilbyr moderne fasiliteter og velferdsteknologi for å støtte beboerne. Sykehjemmet bidrar til et miljø som fremmer kreativitet og deltakelse, og gjør det mulig for beboerne å engasjere seg i kunstneriske aktiviteter som forbedrer livskvaliteten og gir dem en stemme i fellesskapet.
          </CardDescription>
        </Card>
      </ServicesWrapper>
    </PageWrapper>
  );
};

export default Kontakt;
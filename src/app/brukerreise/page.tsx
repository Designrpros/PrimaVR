// app/UserJourney.tsx
"use client";

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FaUser, FaHome, FaFlask, FaHospitalAlt, FaLightbulb, FaClipboardList, FaPencilRuler, FaCheckCircle, FaSync, FaHandsHelping, FaCity, FaLaptopCode } from 'react-icons/fa';

// Main container
const JourneyContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #4B6079;
`;

const AnimatedLogo = styled(motion.img)`
  width: 800px;
  height: auto;

  @media (max-width: 768px) {
    width: 150px; /* Smaller size on mobile devices */
  }
`;

// Full-screen introduction section
const FullScreenIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background-color: #4B6079;
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
  margin-top: 10px;
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

// Section Container
const SectionContainer = styled.div`
  padding: 3rem 2rem;
  color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #fff;
  margin-bottom: 1rem;
`;

// Scrollable row for cards
const ScrollView = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 3.5rem 0;

  /* Add some padding for smooth scrolling */
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Individual Step Card
const StepCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  transition: all 0.3s ease;
  flex-shrink: 0; /* Prevent shrinking on scroll */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

// Icon for steps
const StepIcon = styled.div`
  font-size: 3rem;
  color: #333;
  margin-bottom: 15px;
`;

// Step title
const StepTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

// Step description
const StepDescription = styled.p`
  color: #666;
  text-align: center;
  font-size: 0.9rem; /* Reduced font size for better readability */
`;

// Main Component
const UserJourney = () => {
  return (
    <JourneyContainer>
      <FullScreenIntro>
        <Title>PRIMA Brukereise</Title>
        <Punchline>En visjon for eldreomsorg med VR-teknologi</Punchline>
        <AnimatedLogo src="/Images/VR.png" alt="VR Logo" />
        <ScrollArrow>
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </ScrollArrow>
      </FullScreenIntro>

      {/* Aktører, metoder og relevante elementer */}
      <SectionContainer>
        <SectionTitle>Aktører og metoder</SectionTitle>
        <ScrollView>
          {/* Aktører Section */}

          {/* Aktør: Studio 51 */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaLaptopCode />
            </StepIcon>
            <StepTitle>Studio 51</StepTitle>
            <StepDescription>
              Teknologisk utvikler som designer og optimaliserer VR-opplevelser.
            </StepDescription>
          </StepCard>

          {/* Aktør: Brukere */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaUser />
            </StepIcon>
            <StepTitle>Brukere (eldre)</StepTitle>
            <StepDescription>
              Eldre som gir tilbakemeldinger og perspektiver i prosessen.
            </StepDescription>
          </StepCard>

          {/* Aktør: Pårørende */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaHandsHelping />
            </StepIcon>
            <StepTitle>Pårørende</StepTitle>
            <StepDescription>
              Familiemedlemmer som deler innsikt om brukernes behov.
            </StepDescription>
          </StepCard>

          {/* Aktør: Bærum Kommune */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaCity />
            </StepIcon>
            <StepTitle>Bærum Kommune</StepTitle>
            <StepDescription>
              Samarbeider for å innføre innovative løsninger i eldreomsorgen.
            </StepDescription>
          </StepCard>

          {/* Aktør: Linnelia Sykehjem */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaHospitalAlt />
            </StepIcon>
            <StepTitle>Linnelia Sykehjem</StepTitle>
            <StepDescription>
              Samarbeider for å innføre innovative løsninger på sykehjemmet.
            </StepDescription>
          </StepCard>

          {/* Metoder Section */}

          {/* Metode: Design Thinking */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaLightbulb />
            </StepIcon>
            <StepTitle>Design Thinking</StepTitle>
            <StepDescription>
              En metode for å utvikle innovative løsninger med fokus på brukeren.
            </StepDescription>
          </StepCard>

          {/* Metode: Brukerundersøkelser */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaClipboardList />
            </StepIcon>
            <StepTitle>Brukerundersøkelser</StepTitle>
            <StepDescription>
              Samler innsikt fra brukere for å forstå deres behov.
            </StepDescription>
          </StepCard>

          {/* Metode: Prototyping */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaPencilRuler />
            </StepIcon>
            <StepTitle>Prototyping</StepTitle>
            <StepDescription>
              Utvikler tidlige VR-løsninger for testing.
            </StepDescription>
          </StepCard>

          {/* Metode: Brukertesting */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaCheckCircle />
            </StepIcon>
            <StepTitle>Brukertesting</StepTitle>
            <StepDescription>
              Evaluerer VR-opplevelser med tilbakemeldinger fra brukere.
            </StepDescription>
          </StepCard>

          {/* Metode: Iterativ utvikling */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon>
              <FaSync />
            </StepIcon>
            <StepTitle>Iterativ utvikling</StepTitle>
            <StepDescription>
              Forbedrer løsninger basert på tilbakemeldinger og data.
            </StepDescription>
          </StepCard>
        </ScrollView>
      </SectionContainer>

      {/* Brukerperspektiv Seksjon */}
      <SectionContainer>
        <SectionTitle>Brukerens Perspektiv</SectionTitle>
        <ScrollView>
          {/* Trinn 1: Brukerinvolvering */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaUser /></StepIcon>
            <StepTitle>Brukerinvolvering</StepTitle>
            <StepDescription>
              Eldre deltar i intervjuer og workshops for å dele erfaringer og behov, som former VR-opplevelsen.
            </StepDescription>
          </StepCard>

          {/* Trinn 2: Brukertilbakemelding */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHandsHelping /></StepIcon>
            <StepTitle>Brukertilbakemelding</StepTitle>
            <StepDescription>
              Eldre tester prototyper og gir tilbakemeldinger for å forbedre VR-opplevelsen.
            </StepDescription>
          </StepCard>

          {/* Trinn 3: Empowerment og Autonomi */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaUser /></StepIcon>
            <StepTitle>Empowerment og Autonomi</StepTitle>
            <StepDescription>
              VR gir eldre uavhengighet og kontroll gjennom tilpassede opplevelser, som reduserer isolasjon.
            </StepDescription>
          </StepCard>

          {/* Trinn 4: Kognitive og Emosjonelle Fordeler */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHandsHelping /></StepIcon>
            <StepTitle>Kognitive og Emosjonelle Fordeler</StepTitle>
            <StepDescription>
              VR stimulerer kognitive evner og reduserer ensomhet ved å gi mentale utfordringer og emosjonell støtte.
            </StepDescription>
          </StepCard>

          {/* Trinn 5: Tilpasning og Personalisering */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaUser /></StepIcon>
            <StepTitle>Tilpasning og Personalisering</StepTitle>
            <StepDescription>
              Eldre kan tilpasse VR-økter til sine preferanser, noe som gir en personlig og engasjerende opplevelse.
            </StepDescription>
          </StepCard>

          {/* Trinn 6: Brukervennlighet og Tilgjengelighet */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHandsHelping /></StepIcon>
            <StepTitle>Brukervennlighet og Tilgjengelighet</StepTitle>
            <StepDescription>
              VR er designet med enkle kontroller og tilgjengelighetsfunksjoner for å passe eldre med ulike evner.
            </StepDescription>
          </StepCard>

          {/* Trinn 7: Fellesskapsfølelse og Sosial Interaksjon */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaUser /></StepIcon>
            <StepTitle>Fellesskapsfølelse og Sosial Interaksjon</StepTitle>
            <StepDescription>
              VR kobler eldre med familie og venner gjennom virtuelle møter, og reduserer sosial isolasjon.
            </StepDescription>
          </StepCard>
        </ScrollView>
      </SectionContainer>

      {/* Deltakers Perspektiv Seksjon */}
      <SectionContainer>
        <SectionTitle>Perspektiv fra Deltakeren</SectionTitle>
        <ScrollView>
          {/* Samarbeid Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHome /></StepIcon>
            <StepTitle>Samarbeid</StepTitle>
            <StepDescription>
              Pårørende og omsorgspersoner samarbeider med PRIMA-teamet for å forstå brukernes behov.
            </StepDescription>
          </StepCard>

          {/* Støtte Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Støtte</StepTitle>
            <StepDescription>
              Omsorgspersoner og familie gir emosjonell og teknisk støtte for å hjelpe brukerne med VR.
            </StepDescription>
          </StepCard>

          {/* Forståelse for Brukerbehov Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHome /></StepIcon>
            <StepTitle>Forståelse for Brukerbehov</StepTitle>
            <StepDescription>
              Deltakere deler innsikt om brukernes livsstil og behov for å tilpasse VR-løsningen.
            </StepDescription>
          </StepCard>

          {/* Omsorg og Forbindelse Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Omsorg og Forbindelse</StepTitle>
            <StepDescription>
              VR styrker bånd mellom brukere og familie gjennom virtuelle sammenkomster og minner.
            </StepDescription>
          </StepCard>

          {/* Informasjon og Opplæring Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHome /></StepIcon>
            <StepTitle>Informasjon og Opplæring</StepTitle>
            <StepDescription>
              Deltakere lærer opp brukere og omsorgspersoner i bruk av VR for å maksimere nytten.
            </StepDescription>
          </StepCard>

          {/* Overvåking og Tilbakemelding Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Overvåking og Tilbakemelding</StepTitle>
            <StepDescription>
              Deltakere overvåker brukernes respons og gir tilbakemeldinger for å forbedre VR-opplevelsen.
            </StepDescription>
          </StepCard>
        </ScrollView>
      </SectionContainer>

      {/* Sykehusets Perspektiv Seksjon */}
      <SectionContainer>
        <SectionTitle>Perspektiv fra Sykehuset</SectionTitle>
        <ScrollView>
          {/* Implementering Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHome /></StepIcon>
            <StepTitle>Implementering</StepTitle>
            <StepDescription>
              Sykehuset integrerer VR i omsorgen med opplæring og tilpassede opplevelser for eldre.
            </StepDescription>
          </StepCard>

          {/* Omsorgsstrategi Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Omsorgsstrategi</StepTitle>
            <StepDescription>
              VR forbedrer eldreomsorgen ved å tilby innovative løsninger for mental og fysisk helse.
            </StepDescription>
          </StepCard>

          {/* Pasientengasjement Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHome /></StepIcon>
            <StepTitle>Pasientengasjement</StepTitle>
            <StepDescription>
              VR øker engasjementet hos eldre med virtuelle turer og spill som fremmer sosial kontakt.
            </StepDescription>
          </StepCard>

          {/* Opplæring av Personell Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Opplæring av Personell</StepTitle>
            <StepDescription>
              Sykehuset trener ansatte i bruk av VR for å forbedre omsorgen for eldre.
            </StepDescription>
          </StepCard>

          {/* Evaluering og Tilbakemelding Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHome /></StepIcon>
            <StepTitle>Evaluering og Tilbakemelding</StepTitle>
            <StepDescription>
              Sykehuset evaluerer VR-effekten og justerer opplevelsene basert på tilbakemeldinger.
            </StepDescription>
          </StepCard>
        </ScrollView>
      </SectionContainer>

      {/* Bærum Kommunes Perspektiv Seksjon */}
      <SectionContainer>
        <SectionTitle>Perspektiv fra Bærum Kommune</SectionTitle>
        <ScrollView>
          {/* Innovasjon Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaCity /></StepIcon>
            <StepTitle>Innovasjon</StepTitle>
            <StepDescription>
              Bærum Kommune bruker VR for å forbedre eldreomsorgen gjennom innovativ tjenestedesign.
            </StepDescription>
          </StepCard>

          {/* Samarbeid Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Samarbeid</StepTitle>
            <StepDescription>
              Bærum Kommune og Studio 51 samarbeider for å utvikle VR-opplevelser for eldre.
            </StepDescription>
          </StepCard>

          {/* Digital Transformasjon Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaCity /></StepIcon>
            <StepTitle>Digital Transformasjon</StepTitle>
            <StepDescription>
              VR er del av kommunens strategi for å digitalisere og forbedre velferdstjenester.
            </StepDescription>
          </StepCard>

          {/* Brukerinvolvering Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Brukerinvolvering</StepTitle>
            <StepDescription>
              Kommunen involverer eldre i utviklingen av VR for å møte deres behov.
            </StepDescription>
          </StepCard>

          {/* Bærekraftig Utvikling Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaCity /></StepIcon>
            <StepTitle>Bærekraftig Utvikling</StepTitle>
            <StepDescription>
              VR bidrar til bærekraftig eldreomsorg ved å redusere ressursbruk og øke livskvalitet.
            </StepDescription>
          </StepCard>
        </ScrollView>
      </SectionContainer>
    </JourneyContainer>
  );
};

export default UserJourney;
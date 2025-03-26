"use client";

import React, { useRef } from 'react';
import styled from 'styled-components';
import Calendar from '../components/Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Define event type matching Calendar.tsx
interface EventInput {
  id?: string;
  title: string;
  start: string | Date; // Changed from 'date' to 'start'
  end?: string | Date;
  allDay?: boolean;
  [key: string]: any;
}

// CSS styling
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #4B6079;
  padding-top: 60px;
`;

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
  color: #fff;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: calc(1rem + 1.5vw);
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

const JourneySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 4rem;
  background-color: #f4f4f4;
  color: #333;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;

  h2 {
    font-size: 2rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #555;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ServicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ServiceItem = styled.li`
  background-color: #fff;
  color: #444;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Kalender: React.FC = () => {
  const form = useRef<HTMLDivElement>(null);

  // Predefined dates from Oppdrift
  const oppdriftEvents: EventInput[] = [
    { title: 'Session 1: Team Introduction', start: '2024-06-19' },
    { title: 'Session 2: User Needs Research', start: '2024-09-17' },
    { title: 'Session 3: Ideation & Prototyping', start: '2024-10-16' },
    { title: 'Session 4: Prototype Presentation', start: '2024-11-21' },
    { title: 'Session 5: Evaluation & Adjustment', start: '2025-02-04' },
  ];

  // New dates related to Linnelia sykehjem and testing with users
  const userTestingEvents: EventInput[] = [
    { title: 'User Testing: Initial Experience', start: '2024-09-30' },
    { title: 'User Testing: Feedback Review', start: '2024-10-14' },
    { title: 'User Testing: Feature Deep Dive', start: '2024-10-28' },
    { title: 'User Testing: New Features', start: '2024-11-11' },
    { title: 'User Testing: Change Feedback', start: '2024-11-25' },
    { title: 'User Testing: Pre-Launch Prep', start: '2024-12-09' },
    { title: 'User Testing: Final Summary', start: '2024-12-23' },
  ];

  // Combined events for the calendar
  const combinedEvents: EventInput[] = [
    { title: 'Business Meeting', start: '2024-09-25' },
    { title: 'Deadline', start: '2024-09-28' },
    ...oppdriftEvents,
    ...userTestingEvents,
  ];

  return (
    <PageWrapper>
      <FullScreenIntro>
        <Title>Calendar</Title>
        <Punchline>Our Planned Meetings and Activities</Punchline>
        <Calendar events={combinedEvents} /> {/* Custom Calendar component */}
        <ScrollArrow>
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </ScrollArrow>
      </FullScreenIntro>

      <JourneySection>
        <TextBlock>
          <h2>The Process Behind PRIMA</h2>
          <p>
            Our process is built around the double diamond model, focusing on identifying and solving problems through user research, prototyping, and iteration.
          </p>
        </TextBlock>
        <ServicesList>
          <ServiceItem>
            <strong>Exploration:</strong> We start by understanding user needs through in-depth interviews and observations, including <em>cultural probes</em>.
          </ServiceItem>
          <ServiceItem>
            <strong>Definition:</strong> After insight analysis, we define key challenges using <em>affinity mapping</em> and workshops.
          </ServiceItem>
          <ServiceItem>
            <strong>Development:</strong> Through brainstorming and prototyping, we develop solutions, including <em>wireframing</em> for quick evaluation.
          </ServiceItem>
          <ServiceItem>
            <strong>Delivery:</strong> We test and refine the final solution, emphasizing <em>usability</em> and <em>accessibility</em>.
          </ServiceItem>
        </ServicesList>
      </JourneySection>

      <JourneySection>
        <TextBlock>
          <h2>Oppdrift Session Plan</h2>
          <p>
            What do we offer? Five sessions where we refine your idea using service design. All sessions take place at the Idea Workshop in Kommunegården. Guidance between sessions and potential financial support are available. For more info, join Open Workshop every other Thursday (odd-numbered weeks) from 14:00-15:30.
          </p>
        </TextBlock>
        <ServicesList>
          <ServiceItem>
            <strong>Session 1 (June 19):</strong> Introduction of teams and problem statements.
          </ServiceItem>
          <ServiceItem>
            <strong>Session 2 (September 17):</strong> Research on user needs and validation of problem definitions.
          </ServiceItem>
          <ServiceItem>
            <strong>Session 3 (October 16):</strong> Brainstorming and prototyping solutions.
          </ServiceItem>
          <ServiceItem>
            <strong>Session 4 (November 21):</strong> Presentation of prototypes and feedback.
          </ServiceItem>
          <ServiceItem>
            <strong>Session 5 (February 4, 2025):</strong> Evaluation and adjustment of solutions before launch.
          </ServiceItem>
        </ServicesList>
      </JourneySection>

      <JourneySection>
        <TextBlock>
          <h2>Linnelia’s Meeting Plan</h2>
          <p>
            User testing will occur biweekly from September 30, 2024, to December 23, 2024. Here’s an overview of the meetings and their focus areas:
          </p>
        </TextBlock>
        <ServicesList>
          <ServiceItem>
            <strong>September 30, 2024:</strong> Initial testing focusing on user experience.
          </ServiceItem>
          <ServiceItem>
            <strong>October 14, 2024:</strong> Evaluation of feedback from the first test.
          </ServiceItem>
          <ServiceItem>
            <strong>October 28, 2024:</strong> Deep dive into specific features.
          </ServiceItem>
          <ServiceItem>
            <strong>November 11, 2024:</strong> Testing new features.
          </ServiceItem>
          <ServiceItem>
            <strong>November 25, 2024:</strong> Feedback on changes.
          </ServiceItem>
          <ServiceItem>
            <strong>December 9, 2024:</strong> Final testing before launch.
          </ServiceItem>
          <ServiceItem>
            <strong>December 23, 2024:</strong> Summary of testing and launch preparations.
          </ServiceItem>
        </ServicesList>
      </JourneySection>
    </PageWrapper>
  );
};

export default Kalender;
"use client";

import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface EventInput {
  id?: string;
  title: string;
  start: string | Date;
  end?: string | Date;
  allDay?: boolean;
  [key: string]: any;
}

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  height: auto;
  background-color: #f9f9f9;
  color: #4B6079;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const CalendarWrapper = styled.div`
  width: 100%;
  height: 60vh;

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 480px) {
    height: 40vh;
  }
`;

interface CalendarProps {
  events: EventInput[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  return (
    <Content>
      <CalendarWrapper>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          editable={false}
          selectable={false}
          height="100%"
        />
      </CalendarWrapper>
    </Content>
  );
};

export default Calendar;
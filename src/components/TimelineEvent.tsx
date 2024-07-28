import React from 'react';

interface TimelineEventProps {
  event: {
    side: string;
    number: number;
    title: string;
    date: string;
    description: string;
    image?: string;
  };
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event }) => {
  return (
    <div className={`timeline-event ${event.side}-side`}>
      <div className="event-num-container"></div>
      <div className="event-num-circle">
        <h1 className="event-num-text">{event.number}</h1>
      </div>
      <div className="event-box">
        <h3 className="event-title-text">{event.title}</h3>
        <h3 className="event-date-text">{event.date}</h3>
        {event.image && (<img src={event.image} alt={event.title} className="event-img"/>)}
        <p className="event-dsc-text">{event.description}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;

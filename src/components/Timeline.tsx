import React from 'react';
import { timelineData } from '../data';
import TimelineEvent from './TimelineEvent';

const Timeline: React.FC = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-border"></div>
      {timelineData.map((event, index) => (
        <TimelineEvent key={index} event={event} />
      ))}
    </div>
  );
};

export default Timeline;

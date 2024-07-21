import React from 'react';
import { timelineData } from '../data';
import TimelineEvent from './TimelineEvent';

const Timeline: React.FC = () => {
  return (
    <div className="relative wrap overflow-hidden p-10 h-full">
      <div className="border-2-2 absolute overflow-hidden border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
      {timelineData.map((event, index) => (
        <TimelineEvent key={index} event={event} />
      ))}
    </div>
  );
};

export default Timeline;

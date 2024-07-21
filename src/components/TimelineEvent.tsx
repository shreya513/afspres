import React from 'react';

interface TimelineEventProps {
  event: {
    side: string;
    number: number;
    color: string;
    textColor: string;
    title: string;
    description: string;
    bgColor: string;
  };
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event }) => {
  return (
    <div className={`mb-8 flex justify-between ${event.side === 'left' ? 'flex-row-reverse' : ''} items-center w-full ${event.side}-timeline`}>
      <div className="order-1 w-5/12"></div>
      <div className={`z-0 flex items-center order-1 ${event.color} shadow-xl w-8 h-8 rounded-full`}>
        <h1 className={`mx-auto font-semibold text-lg ${event.textColor}`}>{event.number}</h1>
      </div>
      <div className={`order-1 ${event.bgColor} rounded-lg shadow-xl w-5/12 px-6 py-4`}>
        <h3 className={`mb-3 font-bold ${event.textColor} text-xl`}>{event.title}</h3>
        <p className={`text-sm leading-snug tracking-wide ${event.textColor} text-opacity-100`}>{event.description}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;

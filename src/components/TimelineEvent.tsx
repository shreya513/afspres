import React from 'react';

interface TimelineEventProps {
  event: {
    side: string;
    number: number;
    title: string;
    description: string;
  };
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event }) => {
  return (
    <div className={`mb-8 flex justify-between ${event.side === 'left' ? 'flex-row-reverse' : ''} items-center w-full ${event.side}-timeline`}>
      <div className="order-1 w-5/12"></div>
      <div className={`z-0 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full`}>
        <h1 className={`mx-auto font-semibold text-lg text-white`}>{event.number}</h1>
      </div>
      <div className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4`} style={{ background: '#a87dc2' }}>
        <h3 className={`mb-3 font-bold text-white text-xl`}>{event.title}</h3>
        <p className={`text-sm leading-snug tracking-wide text-white text-opacity-100`}>{event.description}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;

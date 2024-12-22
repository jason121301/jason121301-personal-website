import React, { useState } from 'react';
import restifyIndex from '../Basics/images/restify-index.png';
import restifyDates from '../Basics/images/restify-dates.png';
import restifyDashboard from '../Basics/images/restify-dashboard.png';
import restifyBooking from '../Basics/images/restify-booking.png';

const restifyImages = [
  {
    src: restifyIndex,
    alt: "Restify Home Page",
  },
  {
    src: restifyDates,
    alt: "Restify Dates Page",
  },
  {
    src: restifyDashboard,
    alt: "Restify Dashboard",
  },
  {
    src: restifyBooking,
    alt: "Restify Booking Page",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + restifyImages.length) % restifyImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % restifyImages.length);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '400px',
      height: '250px',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid #ccc',
      borderRadius: '8px',
    }}>
      <img
        src={restifyImages[currentIndex].src}
        alt={restifyImages[currentIndex].alt}
        style={{
          width: '400px',
          height: '250px',
          objectFit: 'cover',
        }}
      />

      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
        }}
      >
        &#8249;
      </button>

      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
        }}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Gallery;


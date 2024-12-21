  import { useState } from 'react';

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

  function ImageGallery() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === restifyImages.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? restifyImages.length - 1 : prevIndex - 1
      );
    };

    return (
      <div className="gallery-container">
        <img
          src={restifyImages[currentImageIndex].src}
          alt={restifyImages[currentImageIndex].alt}
          className="gallery-image"
          width="400"
          height="auto"
        />
        <button onClick={prevImage} className="gallery-button previous">◁</button>
        <button onClick={nextImage} className="gallery-button next">▷</button>
      </div>
    );
    
  }

  export default ImageGallery;

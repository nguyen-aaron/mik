import React, { useState } from 'react';
import './Unlocked.css';

const images = [
  {
    src: 'src/assets/ring.jpg', 
    date: '4/18/2024',
    caption: 'I bought this ring at the night market you told me about. I have this ring on everyday and never take it off. It reminds me of my trip to Hawaii and my first time meeting you.',
  },
  {
    src: 'src/assets/walk.jpg', 
    date: '4/20/2024',
    caption: 'Our first hike. I had Angel take pics of us walking together because I thought it would be cute.',
  },
  {
    src: 'src/assets/sunset.jpg',
    date: '4/20/2024',
    caption: 'First time watching the sunset with you.',
  },
  {
    src: 'src/assets/flower.jpg',
    date: '5/27/2024',
    caption: 'I got flowers for you because you told me you were sad. The homie Troy delivered them and sent me this picture.',
  },
  {
    src: 'src/assets/flower2.JPEG',
    date: '5/27/2024',
    caption: 'Shortly after you sent me this one.',
  },
];

const Unlocked = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="unlocked-container">
      <div className="message">
        <h1>Hi Mikayla!</h1>
        <p>It is really you. I hope you are doing amazing! I made this website for you. I just wanted to share some photos with you. Maybe I will be able add some more in the future. I have so much to tell you. Can we facetime tonight (9/15/2024)?</p>
      </div>
      <div className="slideshow">
        <button className="arrow left" onClick={prevImage}>&lt;</button>
        <div className="image-container">
          <img src={images[currentIndex].src} alt={images[currentIndex].caption} />
          <p className="caption">{images[currentIndex].date}</p>
          <p className="caption">{images[currentIndex].caption}</p>
    
        </div>
        <button className="arrow right" onClick={nextImage}>&gt;</button>
      </div>
    </div>
  );
};

export default Unlocked;

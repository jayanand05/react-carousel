import React, { useEffect, useState } from "react";

const data = [
  "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=ais",
  "https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg",
  "https://img.freepik.com/premium-photo/science-fiction-wallpaper-beauty-deep-space-colorful-graphics-background-like-water-waves_39386-866.jpg?w=360",
  "https://cdn.create.vista.com/api/media/small/88684030/stock-photo-stunning-romantic-road-in-the-autumn-colorful-forest",
];

function Carousel() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePreviousClick = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="flex justify-center m-[50px]">
      <button className="font-bold m-10" onClick={handlePreviousClick}>
        Prev
      </button>
      <img
        src={data[activeImageIndex]}
        className="w-[700px] h-[500px] object-contain"
        alt="wallpaper"
      />
      <button className="font-bold m-10" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}

export default Carousel;

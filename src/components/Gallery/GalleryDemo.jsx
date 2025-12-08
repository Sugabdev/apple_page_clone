import { useState, useEffect } from "react";
import { MainShow } from "./MainShow.jsx";
import { shows } from "../../data/galleryData.js";

export function GalleryDemo() {
  const [mainShows, setMainShows] = useState([...shows, ...shows]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === shows.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? shows.length - 1 : prev - 1));
  };

  const translateValue = `-${currentIndex * 100 + 71}%`;

  return (
    <section className="w-full overflow-hidden relative">
      <div
        className="h-full w-[16%] bg-white absolute top-0 left-0 size-full z-10 opacity-60"
        onClick={handlePrev}
      ></div>
      <MainShow shows={mainShows} translateValue={translateValue} />
      <div
        className="h-full w-[16%] bg-white absolute top-0 right-0 size-full z-10 opacity-60"
        onClick={handleNext}
      ></div>
    </section>
  );
}

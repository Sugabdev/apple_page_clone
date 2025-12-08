import { useState, useEffect } from "react";
import { MainShow } from "./MainShow.jsx";
import { LeftShow } from "./LeftShow.jsx";
import { RightShow } from "./RightShow.jsx";
import { shows } from "../../data/galleryData.js";

export function Gallery() {
  const [mainShows, setMainShows] = useState([...shows]);
  const [leftShows, setLeftShows] = useState([]);
  const [rightShows, setRightShows] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Crear un arreglo de shows duplicado para el efecto infinito
  const infiniteShows = [...shows, ...shows, ...shows];

  useEffect(() => {
    setMainShows((prevShows) => prevShows);

    setLeftShows(() => {
      const showsCopy = [...shows];
      const lastShowsIndex = showsCopy.pop();
      showsCopy.unshift(lastShowsIndex);

      return showsCopy;
    });

    setRightShows(() => {
      const showsCopy = [...shows];
      const firstShowsIndex = showsCopy.shift();
      showsCopy.push(firstShowsIndex);

      return showsCopy;
    });
  }, [shows]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === shows.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? shows.length - 1 : prev - 1));
  };

  const translateValue = `-${currentIndex * 100}%`;

  return (
    <section
      className="w-full flex justify-center gap-x-4 overflow-hidden relative transition-transform duration-500 ease-linear"
      style={{ transform: `translateX(0%)` }}
    >
      {/* <LeftShow
        shows={leftShows}
        handlePrev={handlePrev}
        translateValue={translateValue}
      /> */}
      <div
        className="h-full w-[15%] bg-white absolute top-0 left-0 size-full z-10"
        onClick={handlePrev}
      ></div>
      <MainShow shows={mainShows} translateValue={translateValue} />
      <div
        className="h-full w-[15%] bg-white absolute top-0 right-0 size-full z-10"
        onClick={handleNext}
      ></div>
      {/* <RightShow
        shows={rightShows}
        handleNext={handleNext}
        translateValue={translateValue}
      /> */}
    </section>
  );
}

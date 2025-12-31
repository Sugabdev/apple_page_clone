import { useRef } from "react";
import { useCarousel } from "../../hooks/useCarousel.js";

import { ShowCard } from "./ShowCard.jsx";
import { SubGallery } from "./SubGallery.jsx";
import { CarouselDots } from "../CarouselDots.jsx"
import { showsData } from "../../data/galleryData.js";
import { subGalleryData } from "../../data/subGalleryData.js"

const galleryCardWidth = 274;
const gallerySliderWidth = galleryCardWidth * showsData.length * 3;

const subGalleryCardWidth = 201
const subGallerySliderWidth = subGalleryCardWidth * subGalleryData.length * 3

export function Gallery() {
  const gallerySliderRef = useRef(null);
  const subGallerySliderRef = useRef(null);
  const galleryViewportRef = useRef(null);
  const subGalleryViewportRef = useRef(null);

  // Gallery Animation
  const { currentIndex, goTo } = useCarousel({
    sliderRef: gallerySliderRef,
    viewportRef: galleryViewportRef,
    itemsLength: showsData.length
  });
  
  // Subgallery Animation
  useCarousel({
    sliderRef: subGallerySliderRef,
    viewportRef: subGalleryViewportRef,
    itemsLength: subGalleryData.length
  });

  return (
    <section className="bg-[#f5f5f7] w-full flex flex-col gap-y-4">
      <div className="w-full mt-8">
        <h1 className="w-full text-center text-4xl font-semibold text-[#1d1d1f] 2xl:text-6xl">Endless entertainment.</h1>
      </div>
      <section ref={galleryViewportRef} className="w-full overflow-hidden">
        <div
          ref={gallerySliderRef}
          style={{ width: `${gallerySliderWidth}px` }}
          className="flex gap-x-4"
        >
          <ShowCard showsData={showsData} />
          <ShowCard showsData={showsData} />
          <ShowCard showsData={showsData} />
        </div>
      </section>
      <section ref={subGalleryViewportRef} className="w-full overflow-hidden">
        <div
          	ref={subGallerySliderRef}
            style={{ width: `${subGallerySliderWidth}px` }}
            className="flex gap-x-4"
        >
          <SubGallery subGalleryData={subGalleryData}/>
          <SubGallery subGalleryData={subGalleryData}/>
          <SubGallery subGalleryData={subGalleryData}/>
        </div>
      </section>
      <CarouselDots
        data={showsData}
        currentIndex={currentIndex}
        goTo={goTo}
      />
    </section>
  );
}

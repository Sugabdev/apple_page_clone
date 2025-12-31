import { useRef } from "react";
import { useCarousel } from "../../hooks/useCarousel.js";

import { VideoCard } from "./VideoCard.jsx";
import { videoData } from "../../data/videoGalleryData.js";
import { CarouselDots } from "../CarouselDots.jsx"

const videoCardWidth = 274;
const videoSliderWidth = videoCardWidth * videoData.length * 3;

export function VideoGallery() {
    const videoSliderRef = useRef(null);
    const videoViewportRef = useRef(null);

    // Carousel Animation
    const { currentIndex, goTo } = useCarousel({
        sliderRef: videoSliderRef,
        viewportRef: videoViewportRef,
        itemsLength: videoData.length
    });

    return (
        <section className="bg-[#000] w-full flex flex-col gap-y-4">
            <div className="w-full mt-8">
                <h1 className="w-full text-center text-4xl font-semibold text-[#f5f5f7] 2xl:text-6xl">More from Apple.</h1>
            </div>
            <section ref={videoViewportRef} className="w-full overflow-hidden">
                <div
                    ref={videoSliderRef}
                    style={{ width: `${videoSliderWidth}px` }}
                    className="flex gap-x-4"
                >
                    <VideoCard videoData={videoData} />
                    <VideoCard videoData={videoData} />
                    <VideoCard videoData={videoData} />
                </div>
            </section>
            <CarouselDots
                data={videoData}
                currentIndex={currentIndex}
                goTo={goTo}
                color={"black"}
            />
        </section>
    );
}

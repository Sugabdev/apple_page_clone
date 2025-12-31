export function VideoCard({ videoData }) {
  return (
    <>
      {videoData.map((video, index) => (
        <article
          key={index}
          data-gallery-card
          className="relative flex-shrink-0 flex flex-col items-center aspect-[16/9] w-[274px] md:w-[688px] 2xl:w-[1250px]"
        >
          <picture className="relative md:size-full">
            <source
              srcset={video.images.desktop}
              media="(min-width: 1280px)"
            />
            <source
              srcset={video.images.laptop}
              media="(min-width: 768px)"
            />
            <img src={video.images.mobile} alt={video.title} className="object-cover md:opacity-95 md:size-full"/>
          </picture>
          {/*Mascara de sombreado*/}
          <div className="absolute top-0 left-0 h-full w-full show-gradient md:hidden"></div>
          {/* MOBILE */}
          <div className="w-full absolute bottom-10 flex flex-col items-center px-6 md:hidden">
            <span className="text-white font-bold text-shadow-lg">
              {video.description}
            </span>
            <span className="text-white text-center text-shadow-lg opacity-90">
              {video.caption}
            </span>
            <a className="text-black rounded-full py-2 px-4 bg-white mt-4 shadow-md">
              {video.link}
            </a>
          </div>
          {/* DESKTOP */}
          <div className="hidden md:w-full md:absolute md:bottom-10 md:flex md:items-center md:gap-x-4 md:left-10">
            <a className="text-black rounded-full py-2 px-6 bg-white shadow-md">
              {video.link}
            </a>
            <div className="flex items-center justify-center gap-x-2">
              <span className="text-white font-bold text-shadow-lg text-md">
                {video.caption}
              </span>
              <div className="size-1 rounded-full bg-white"></div>
              <span className="text-white text-center text-shadow-lg text-md opacity-90">
                {video.description}
              </span>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

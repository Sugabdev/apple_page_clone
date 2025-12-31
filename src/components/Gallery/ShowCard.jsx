// Logo
import tvLogo from "../../assets/Gallery/mobile_logo.png";

export function ShowCard({ showsData }) {
  return (
    <>
      {showsData.map((show, index) => (
        <article
          key={index}
          data-gallery-card
          className="relative flex-shrink-0 flex flex-col items-center aspect-[16/9] w-[274px] md:w-[688px] 2xl:w-[1250px]"
        >
          <picture className="relative md:size-full">
            <source
              srcset={show.images.desktop}
              media="(min-width: 1280px)"
            />
            <source
              srcset={show.images.laptop}
              media="(min-width: 768px)"
            />
            <img src={show.images.mobile} alt={show.title} className="object-cover md:opacity-95 md:size-full"/>
          </picture>
          {/*Mascara de sombreado*/}
          <div className="absolute top-0 left-0 h-full w-full show-gradient md:hidden"></div>
          <div className="w-full absolute top-8 flex flex-col items-center gap-y-4 md:hidden">
            <img src={tvLogo} alt="apple tv logo" className="w-14" />
            <img
              src={show.images.title}
              alt={show.title}
              className="w-32"
            />
          </div>
          {/* MOBILE */}
          <div className="w-full absolute bottom-10 flex flex-col items-center px-6 md:hidden">
            <span className="text-white font-bold text-shadow-lg">
              {show.genre}
            </span>
            <span className="text-white text-center text-shadow-lg opacity-90">
              {show.description}
            </span>
            <a className="text-black rounded-full py-2 px-4 bg-white mt-4 shadow-md">
              {show.link}
            </a>
          </div>
          {/* DESKTOP */}
          <div className="hidden md:w-full md:absolute md:bottom-8 md:flex md:items-center md:gap-x-4 md:left-15">
            <a className="text-black rounded-full py-2 px-6 bg-white shadow-md">
              {show.link}
            </a>
            <div className="flex items-center justify-center gap-x-2">
              <span className="text-white font-bold text-shadow-lg text-lg">
                {show.genre}
              </span>
              <div className="size-1 rounded-full bg-white"></div>
              <span className="text-white text-center text-shadow-lg text-lg font-semibold opacity-90">
                {show.description}
              </span>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

// Logo
import tvLogo from "../../assets/Gallery/mobile_logo.png";

export function MainShow({ shows, translateValue }) {
  return (
    <div className="w-full flex shrink-0 overflow-hidden">
      {shows.map((show, index) => (
        <article
          key={index}
          className="relative min-w-[274px] transition-all duration-1000 ease-in-out px-2"
          style={{ transform: `translateX(${translateValue})` }}
        >
          <picture>
            <source
              srcset={show.images.desktopLarge}
              media="(min-width: 1280px)"
            />
            <source
              srcset={show.images.desktopLarge}
              media="(min-width: 768px)"
            />
            <img src={show.images.mobile} alt={show.title} />
          </picture>
          <div className="absolute top-0 left-0 size-full show-gradient"></div>
          <div className="w-full absolute top-8 flex flex-col items-center gap-y-4">
            <img src={tvLogo} alt="apple tv logo" className="w-14" />
            <img
              src={show.images.mobileCaption}
              alt={show.title}
              className="w-[200px]"
            />
          </div>
          <div className="w-full absolute bottom-10 flex flex-col items-center">
            <span className="text-white font-bold text-shadow-lg">
              {show.genre}
            </span>
            <span className="text-white text-shadow-lg opacity-90">
              {show.description}
            </span>
            <a className="rounded-full py-2 px-4 bg-white mt-4 shadow-md">
              {show.link}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

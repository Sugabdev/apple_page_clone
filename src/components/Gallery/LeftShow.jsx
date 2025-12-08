// Logo
import tvLogo from "../../assets/Gallery/mobile_logo.png";

export function LeftShow({ shows, handlePrev, translateValue }) {
  return (
    <div className="flex w-[274px] overflow-hidden">
      {shows.map((show, index) => (
        <article
          key={index}
          className="relative min-w-[274px]"
          // style={{ transform: `translateX(${translateValue})` }}
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
          <div
            className="bg-white absolute top-0 left-0 size-full opacity-60"
            onClick={handlePrev}
          ></div>
          <div className="w-full absolute top-8 flex flex-col items-center gap-y-4">
            <img src={tvLogo} alt="apple tv logo" className="w-14" />
            <img
              src={show.images.mobileCaption}
              alt={show.title}
              className="w-[200px]"
            />
          </div>
        </article>
      ))}
    </div>
  );
}

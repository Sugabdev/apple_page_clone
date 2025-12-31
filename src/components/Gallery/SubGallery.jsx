import ArcadeIcon from "../../assets/icons/Arcade.jsx"
import FitnessIcon from "../../assets/icons/Fitness.jsx"
import MusicIcon from "../../assets/icons/Music.jsx"

const GENRE_ICONS = {
    Arcade: ArcadeIcon,
    Fitness: FitnessIcon,
    Music: MusicIcon,
  };

export function SubGallery({ subGalleryData }) {
    return (
        <>
            {subGalleryData.map((item, index) => {
                const Genre = GENRE_ICONS[item.genre];
                const isMusicDailyCard = item.isMusic

                return (
                    !isMusicDailyCard ? (
                    <article
                        key={index}
                        data-gallery-card
                        className="relative flex flex-col items-center flex-shrink-0 w-[201px] 2xl:w-[470px]"
                    >
                        <picture className="w-full overflow-hidden">
                            <source 
                                srcset={item.images.desktop}
                                media="(min-width: 1280px)"
                            />
                            <img src={item.images.mobile} alt={item.title}/>
                        </picture>
                        {/*Mascara de sombreado*/}
                        <div className="hidden 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:size-full show-gradient"></div>
                        <div className="absolute top-4 2xl:right-4">
                            {Genre && <Genre fill="white" height="18" />}
                        </div>
                        <div className="absolute bottom-5 flex flex-col justify-center items-center px-10 2xl:w-full 2xl:flex-row 2xl:justify-between 2xl:px-4 2xl:bottom-3">
                            <span className="text-white text-shadow-lg text-center text-xs font-semibold opacity-90 2xl:text-[.9rem]">
                                {item.description}
                            </span>
                            <a className="text-black text-xs rounded-full py-1 px-4 bg-white mt-2 shadow-md 2xl:mt-0 2xl:py-2 2xl:text-[.9rem]">
                                {item.link}
                            </a>
                        </div>
                    </article>
                ) : (
                <article
                    key={index}
                    data-gallery-card
                    className="bg-black relative flex flex-col items-center flex-shrink-0 w-[201px] 2xl:w-[470px] 2xl:flex-row 2xl:static 2xl:bg-gray-950"
                >
                    <picture className="size-full overflow-hidden flex justify-center 2xl:items-center">
                        <source 
                            srcset={item.images.desktop}
                            media="(min-width: 768px)"
                        />
                        <img src={item.images.mobile} alt={item.title} className="rounded-md size-32 m-auto mt-14 2xl:size-42 2xl:mt-0 2xl:m-0"/>
                    </picture>
                    {/*MOBILE*/}
                    <div className="absolute top-4 2xl:hidden">
                        {Genre && <Genre fill="white" height="18" className="w-full" />}
                    </div>
                    <div className="absolute bottom-5 flex flex-col justify-center items-center px-10 2xl:hidden">
                        <span className="text-white text-shadow-lg text-center text-xs font-semibold opacity-90 line-clamp-2">
                            {item.description}
                        </span>
                        <a className="text-black text-xs rounded-full py-1 px-4 bg-white mt-2 shadow-md">
                            {item.link}
                        </a>
                    </div>
                    {/*DESKTOP*/}
                    <div className="hidden 2xl:flex 2xl:flex-col 2xl:justify-between 2xl:size-full 2xl:py-4 2xl:pr-4">
                        <div className="self-end">
                            {Genre && <Genre fill="white" height="18" className="w-full" />}
                        </div>
                        <span className="text-white text-shadow-lg text-left text-[.9rem] leading-4 font-semibold opacity-90 self-start">
                            {item.description}
                        </span>
                        <div className="self-end">
                            <a className="text-black text-[.9rem] rounded-full py-2 px-4 bg-white shadow-md">
                                {item.link}
                            </a>
                        </div>
                    </div>
                </article>
                )
            )})}
        </>
    )
}

import { useState, useEffect } from "react";
// iPhone images
import iphoneLarge from "../assets/Heros/iphone/large.webp";
import iphoneMediumTall from "../assets/Heros/iphone/medium_tall.webp";
import iphoneMedium from "../assets/Heros/iphone/medium.webp";
import iphoneMobile from "../assets/Heros/iphone/mobile.webp";
// iPhone Air images
import iphoneAirLarge from "../assets/Heros/iphone_air/large.webp";
import iphoneAirMediumTall from "../assets/Heros/iphone_air/medium_tall.webp";
import iphoneAirMedium from "../assets/Heros/iphone_air/medium.webp";
import iphoneAirMobile from "../assets/Heros/iphone_air/mobile.webp";
// iPad images
import ipadLarge from "../assets/Heros/ipad/large.webp";
import ipadMediumTall from "../assets/Heros/ipad/medium_tall.webp";
import ipadMedium from "../assets/Heros/ipad/medium.webp";
import ipadMobile from "../assets/Heros/ipad/mobile.webp";

const heroes = [
  {
    title: "iPhone 17 Pro",
    description: ["All out Pro."],
    images: {
      mobile: iphoneMobile,
      medium: iphoneMedium,
      mediumTall: iphoneMediumTall,
      large: iphoneLarge,
    },
    learnMoreRef: "#",
    buyRef: "#",
    fontColor: "text-[#f5f5f7]",
  },
  {
    title: "iPhone Air",
    description: ["The thinnest iPhone ever.", "With the power of pro inside."],
    images: {
      mobile: iphoneAirMobile,
      medium: iphoneAirMedium,
      mediumTall: iphoneAirMediumTall,
      large: iphoneAirLarge,
    },
    learnMoreRef: "#",
    buyRef: "#",
    fontColor: "text-[#1d1d1f]",
  },
  {
    title: "iPad Air",
    description: ["Now supercharged by the M3 chip."],
    images: {
      mobile: ipadMobile,
      medium: ipadMedium,
      mediumTall: ipadMediumTall,
      large: ipadLarge,
    },
    learnMoreRef: "#",
    buyRef: "#",
    fontColor: "text-[#000000]",
  },
];

export function Hero() {
  return (
    <>
      {heroes.map((hero, index) => (
        <section
          key={index}
          className="relative w-full flex flex-col items-center min-h-[600px] overflow-hidden"
        >
          {/* Imagen responsiva */}
          <picture className="absolute inset-0 -z-10">
            {/* Desktop grande */}
            <source media="(min-width: 1280px)" srcSet={hero.images.large} />
            {/* Desktop mediano */}
            <source
              media="(min-width: 1024px)"
              srcSet={hero.images.mediumTall}
            />
            {/* Tablets */}
            <source media="(min-width: 768px)" srcSet={hero.images.medium} />
            {/* Móviles */}
            <img
              src={hero.images.mobile}
              alt={hero.title}
              className="w-full h-full object-cover"
            />
          </picture>

          {/* Contenido */}
          <div
            className={`relative flex flex-col items-center text-center ${hero.fontColor} mt-10`}
          >
            <h2 className="font-semibold text-3xl md:text-5xl">{hero.title}</h2>
            {hero.description.map((text, idx) => (
              <p key={idx} className="text-xl md:text-2xl">
                {text}
              </p>
            ))}
            <div className="flex gap-x-4 mt-4">
              <a
                href={hero.learnMoreRef}
                className="flex items-center py-1.5 px-4 bg-blue-500 text-white  rounded-full"
              >
                Learn more
              </a>
              <a
                href={hero.buyRef}
                className="py-1.5 px-4 text-blue-500 border border-blue-500 rounded-full"
              >
                Buy
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

// Airpods images
import airpodsMobile from "../assets/Promos/airpods/airpods_mobile.webp";
import airpodsMobileMedium from "../assets/Promos/airpods/airpods_mobile_x2.webp";
import airpodsSmall from "../assets/Promos/airpods/airpods_small.webp";
import airpodsMedium from "../assets/Promos/airpods/airpods_small_2x.webp";
import airpodsLarge from "../assets/Promos/airpods/airpods_large.webp";

// Apple Watch images
import appleWatchMobile from "../assets/Promos/apple_watch/apple_watch_mobile.webp";
import appleWatchMobileMedium from "../assets/Promos/apple_watch/apple_watch_mobile_x2.webp";
import appleWatchSmall from "../assets/Promos/apple_watch/apple_watch_small.webp";
import appleWatchMedium from "../assets/Promos/apple_watch/apple_watch_small_2x.webp";
import appleWatchLarge from "../assets/Promos/apple_watch/apple_watch_large.webp";

// iPad Pro images
import ipadProMobile from "../assets/Promos/ipad_pro/ipad_pro_mobile.webp";
import ipadProMobileX2 from "../assets/Promos/ipad_pro/ipad_pro_mobile_x2.webp";
import ipadProSmall from "../assets/Promos/ipad_pro/ipad_pro_small.webp";
import ipadProMedium from "../assets/Promos/ipad_pro/ipad_pro_small_2x.webp";
import ipadProLarge from "../assets/Promos/ipad_pro/ipad_pro_large.webp";

// MacBook Pro M5 images
import macbookProM5Mobile from "../assets/Promos/macbook_pro_m5/macbook_pro_m5_mobile.webp";
import macbookProM5Small from "../assets/Promos/macbook_pro_m5/macbook_pro_m5_small.webp";
import macbookProM5Medium from "../assets/Promos/macbook_pro_m5/macbook_pro_m5_small_2x.webp";
import macbookProM5Large from "../assets/Promos/macbook_pro_m5/macbook_pro_m5_large.webp";

// Trade-in images
import iphoneTradeinMobile from "../assets/Promos/tradein/iphone_tradein_mobile.webp";
import iphoneTradeinSmall from "../assets/Promos/tradein/iphone_tradein_small.webp";
import iphoneTradeinMedium from "../assets/Promos/tradein/iphone_tradein_small_2x.webp";
import iphoneTradeinLarge from "../assets/Promos/tradein/iphone_tradein_large.webp";

// Apple Card images
import appleCardMobile from "../assets/Promos/apple_card/apple_card_mobile.webp";
import appleCardSmall from "../assets/Promos/apple_card/apple_card_small.webp";
import appleCardMedium from "../assets/Promos/apple_card/apple_card_small_2x.webp";
import appleCardLarge from "../assets/Promos/apple_card/apple_card_large.webp";

const promos = [
  {
    title: "AirPods Pro 3",
    description: ["The world's best in-ear", "Active Noise Cancellation."],
    images: {
      mobile: airpodsMobile,
      small: airpodsSmall,
      medium: airpodsMedium,
      large: airpodsLarge,
    },
    learnMoreRef: "#",
    buyRef: "#",
    fontColor: "text-[#1d1d1f]",
  },
  {
    title: "WATCH SERIES 11",
    description: ["The ultimate way to", "watch your health."],
    images: {
      mobile: appleWatchMobile,
      small: appleWatchSmall,
      medium: appleWatchMedium,
      large: appleWatchLarge,
    },
    learnMoreRef: "#",
    buyRef: "#",
    fontColor: "text-[#1d1d1f]",
  },
  {
    title: "iPad Pro",
    description: ["Advanced AI performance", "and game-changing capabilities."],
    images: {
      mobile: ipadProMobile,
      small: ipadProSmall,
      medium: ipadProMedium,
      large: ipadProLarge,
    },
    learnMoreRef: "#",
    buyRef: "#",
    fontColor: "text-[#f5f5f7]",
  },
  {
    title: 'MacBook Pro 14"',
    description: ["Supercharged by M5."],
    images: {
      mobile: macbookProM5Mobile,
      small: macbookProM5Small,
      medium: macbookProM5Medium,
      large: macbookProM5Large,
    },
    learnMoreRef: "#",
    buyRef: "#",
    fontColor: "text-[#f5f5f7]",
  },
  {
    title: "Trade In",
    description: [
      "Get up to $180-$670",
      "in credit when you trade in",
      "iPhone 13 or higher.",
    ],
    images: {
      mobile: iphoneTradeinMobile,
      small: iphoneTradeinSmall,
      medium: iphoneTradeinMedium,
      large: iphoneTradeinLarge,
    },
    learnMoreRef: "#",
    buyRef: "#",
    fontColor: "text-[#1d1d1f]",
  },
  {
    title: "Card",
    description: ["Get uo 3% Daily Cash back", "with every purchase."],
    images: {
      mobile: appleCardMobile,
      small: appleCardSmall,
      medium: appleCardMedium,
      large: appleCardLarge,
    },
    learnMoreRef: "#",
    buyRef: "#",
    fontColor: "text-[#1d1d1f]",
  },
];

export function Promos() {
  return (
    <section className="w-full flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-x-4 md:px-4">
      {promos &&
        promos.map((promo, index) => (
          <article
            key={index}
            className="relative w-full flex flex-col items-center min-h-[600px] overflow-hidden"
          >
            {/* Imagen responsiva */}
            <picture className="absolute inset-0 -z-10">
              {/* Desktop grande */}
              <source media="(min-width: 1280px)" srcSet={promo.images.large} />
              {/* Desktop mediano */}
              <source
                media="(min-width: 1024px)"
                srcSet={promo.images.medium}
              />
              {/* Tablets */}
              <source media="(min-width: 768px)" srcSet={promo.images.small} />
              {/* Móviles */}
              <img
                src={promo.images.mobile}
                alt={promo.title}
                className="w-full h-full object-cover"
              />
            </picture>

            {/* Contenido */}
            <div
              className={`relative flex flex-col items-center text-center ${promo.fontColor} mt-10`}
            >
              <h2 className="font-semibold text-3xl md:text-4xl">
                {promo.title}
              </h2>
              {promo.description.map((text, idx) => (
                <p key={idx} className="text-xl">
                  {text}
                </p>
              ))}
              <div className="flex gap-x-4 mt-4">
                <a
                  href={promo.learnMoreRef}
                  className="flex items-center py-1.5 px-4 bg-blue-500 text-white  rounded-full"
                >
                  Learn more
                </a>
                <a
                  href={promo.buyRef}
                  className="py-1.5 px-4 text-blue-500 border border-blue-500 rounded-full"
                >
                  Buy
                </a>
              </div>
            </div>
          </article>
        ))}
    </section>
  );
}

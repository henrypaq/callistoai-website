"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import images - these will need to be added to public/hero/ directory
// For now, using placeholder paths that you'll need to replace with actual assets
const art = "/hero/art.svg";
const frame3 = "/hero/frame-3.svg";
const frame = "/hero/frame.svg";
const group1940 = "/hero/group-1940.png";
const group1437255950 = "/hero/group-1437255950.png";
const illustration = "/hero/illustration.png";
const image = "/hero/image.png";
const image1 = "/hero/image.svg";
const vector2 = "/hero/vector-2.svg";
const vector3 = "/hero/vector-3.svg";
const vector = "/hero/vector.svg";

export const HeroFigma = () => {
  const navItems = [
    { label: "Products", icon: vector },
    { label: "Solutions", icon: image1 },
    { label: "Community", icon: vector2 },
    { label: "Resources", icon: vector3 },
    { label: "Pricing", icon: null },
  ];

  const featureCards = [
    {
      title: "Interactive\nComponents",
      bgColor: "bg-[#c6b8ff]",
      shadowColor: "bg-[#c3b5fa]",
      image: group1940,
      rotation: "rotate-[-15.00deg]",
      imageRotation: "rotate-[15.00deg]",
      imagePosition: "top-2.5 left-[23px]",
      imageSize: "w-[215px] h-[188px]",
      top: "top-[78px]",
      left: "left-[31px]",
      shadowHeight: "h-3",
      shadowBlur: "blur-[22px]",
      shadowRadius: "rounded-[108.09px/6.24px]",
    },
    {
      title: "Accessible\nPrototypes",
      bgColor: "bg-[#ffc600]",
      shadowColor: "bg-[#ffa246]",
      image: illustration,
      rotation: "rotate-[-6.64deg]",
      imageRotation: "rotate-[6.64deg]",
      imagePosition: "top-1 left-[29px]",
      imageSize: "w-[202px] h-[199px]",
      top: "top-7",
      left: "left-[249px]",
      shadowHeight: "h-[5px]",
      shadowBlur: "blur-[22px]",
      shadowRadius: "rounded-[108.09px/2.66px]",
    },
    {
      title: "Plugin\nPlayground",
      bgColor: "bg-[#f8a0d0]",
      shadowColor: "bg-[#ff46a2]",
      image: art,
      rotation: "rotate-[4.82deg]",
      imageRotation: "rotate-[-4.82deg]",
      imagePosition: "top-px left-[calc(50.00%_-_103px)]",
      imageSize: "w-[207px] h-[207px]",
      top: "top-2",
      left: "left-[450px]",
      shadowHeight: "h-[5px]",
      shadowBlur: "blur-[22px]",
      shadowRadius: "rounded-[108.09px/2.66px]",
    },
    {
      title: "Accessible\nPrototypes",
      bgColor: "bg-[#0bcd67]",
      shadowColor: "bg-[#11c96c]",
      image: image,
      rotation: "rotate-[13.01deg]",
      imageRotation: "rotate-[-13.01deg]",
      imagePosition: "top-[5px] left-[18px]",
      imageSize: "w-[225px] h-[204px]",
      top: "top-12",
      left: "left-[641px]",
      shadowHeight: "h-[5px]",
      shadowBlur: "blur-[22px]",
      shadowRadius: "rounded-[108.09px/2.66px]",
    },
    {
      title: "Seamless\nVariables",
      bgColor: "bg-[#699bf7]",
      shadowColor: "bg-[#699bf7]",
      image: frame,
      rotation: "rotate-[15.34deg]",
      imageRotation: "rotate-[-15.34deg]",
      imagePosition: "-top-7 left-[calc(50.00%_-_140px)]",
      imageSize: "w-[280px] h-[251px]",
      top: "top-[108px]",
      left: "left-[842px]",
      shadowHeight: "h-[5px]",
      shadowBlur: "blur-[22px]",
      shadowRadius: "rounded-[108.09px/2.66px]",
    },
  ];

  return (
    <div className="bg-white w-full min-h-[1146px] relative overflow-x-auto">
      <header className="flex w-full max-w-[1199px] items-center justify-between p-2 absolute top-[30px] left-1/2 -translate-x-1/2 z-10 px-4">
        <Image
          className="relative flex-[0_0_auto]"
          alt="Frame"
          src={frame3}
          width={120}
          height={40}
          priority
        />

        <div className="hidden lg:inline-flex items-center justify-end gap-5 relative flex-[0_0_auto]">
          <Link
            href="/contact"
            className="relative w-fit font-medium text-dark-20 text-lg text-right tracking-[0] leading-[27px] whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            Contact Sales
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-[5.79px] px-[34px] py-3.5 relative flex-[0_0_auto] rounded-xl bg-gradient-to-r from-[#27273d] to-[#0a0a14] hover:opacity-90 transition-opacity"
          >
            <span className="relative w-fit mt-[-0.58px] font-medium text-white text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap">
              Log in
            </span>
          </Link>
        </div>

        <nav className="hidden xl:inline-flex items-center gap-[30px] px-5 py-[18px] absolute top-[calc(50.00%_-_31px)] left-[109px] bg-light-97 rounded-[14px] border border-solid border-light-90">
          <ul className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
              >
                <a
                  href="#"
                  className="relative w-fit mt-[-1.00px] font-medium text-[#5e5f72] text-[17px] text-center tracking-[0] leading-[25.5px] whitespace-nowrap hover:text-dark-10 transition-colors"
                >
                  {item.label}
                </a>
                {item.icon && (
                  <Image
                    className="relative w-[8.56px] h-[5.02px] mr-[-0.75px]"
                    alt="Dropdown icon"
                    src={item.icon}
                    width={9}
                    height={5}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex flex-col w-full max-w-[828px] items-center gap-10 absolute top-[226px] left-1/2 -translate-x-1/2 px-4 z-10">
        <div className="flex flex-col items-center justify-center gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] font-bold text-dark-10 text-4xl md:text-5xl lg:text-[63px] text-center tracking-[0] leading-tight md:leading-[94.5px]">
            Think bigger. Build faster.
          </h1>
          <p className="relative self-stretch font-medium text-[#5e5f72] text-lg md:text-xl text-center tracking-[0] leading-[30px]">
            Figma helps design and development teams build <br className="hidden md:block" />
            great products, together.
          </p>
        </div>
        <Link
          href="/book-demo"
          className="inline-flex items-center justify-center gap-[5.79px] px-[34px] py-4 relative flex-[0_0_auto] rounded-xl bg-gradient-to-r from-[#27273d] to-[#0a0a14] hover:opacity-90 transition-opacity"
        >
          <span className="relative w-fit mt-[-0.58px] font-medium text-white text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap">
            Get Started for free
          </span>
        </Link>
      </main>

      <div className="absolute top-[146px] left-1/2 -translate-x-1/2 w-full max-w-[1203px] h-[369px] hidden md:block">
        <Image
          className="w-full h-full object-contain"
          alt="Decorative background"
          src={group1437255950}
          width={1203}
          height={369}
          priority
          onError={(e) => {
            // Hide image if it fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <section className="absolute top-[554px] left-1/2 -translate-x-1/2 w-full max-w-[1137px] h-[426px] hidden lg:block">
        {featureCards.map((card, index) => (
          <article
            key={index}
            className={`flex w-[264px] items-center gap-2.5 absolute ${card.top} ${card.left} rounded-[20px] border-2 border-solid border-white ${card.rotation} shadow-[-25px_4px_39.1px_#797fa61f]`}
          >
            <div
              className={`absolute top-[283px] left-[calc(50.00%_-_110px)] w-[216px] ${card.shadowHeight} ${card.shadowColor} ${card.shadowRadius} ${card.shadowBlur}`}
            />

            <div
              className={`flex flex-col h-[286px] items-start justify-end gap-[134px] p-6 relative flex-1 grow ${card.bgColor} rounded-[20px] overflow-hidden border-2 border-solid border-black`}
            >
              <h2 className="relative self-stretch font-semibold text-dark-11 text-[22px] tracking-[0] leading-[26.4px]">
                {card.title.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < card.title.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>

              <div className={`absolute ${card.imagePosition} ${card.imageSize} ${card.imageRotation}`}>
                <Image
                  className="w-full h-full object-contain"
                  alt={card.title.replace("\n", " ")}
                  src={card.image}
                  width={280}
                  height={280}
                />
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

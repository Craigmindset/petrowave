"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type CarouselItem = {
  id: string;
  src: string;
};
const items: CarouselItem[] = [
  { id: "oil-platform-gas", src: "/oil-platform-gas-svgrepo-com.svg" },
  { id: "oil-drum", src: "/oil-drum-svgrepo-com.svg" },
  { id: "oil-valve", src: "/oil-valve-valve-svgrepo-com.svg" },
  { id: "oil-rig", src: "/oil-rig-svgrepo-com.svg" },
  { id: "oil-pump", src: "/oil-pump-svgrepo-com.svg" },
  { id: "helicopter", src: "/flying-helicopter-svgrepo-com.svg" },
  { id: "oil-platform", src: "/oil-platform-svgrepo-com.svg" },
];

export function IndustryCarousel() {
  const iconsPerSlide = 6;
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = useMemo(() => {
    const paddedItems = [...items];

    while (paddedItems.length % iconsPerSlide !== 0) {
      paddedItems.push(items[paddedItems.length % items.length]);
    }

    const slideCount = paddedItems.length / iconsPerSlide;
    return Array.from({ length: slideCount }, (_, index) =>
      paddedItems.slice(index * iconsPerSlide, (index + 1) * iconsPerSlide),
    );
  }, [iconsPerSlide]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="bg-black px-6 pb-4 pt-2 sm:pb-6">
      <div className="mx-auto w-full max-w-7xl overflow-hidden">
        <motion.div
          key={activeSlide}
          className="mx-auto grid w-full max-w-[760px] grid-cols-6 items-center justify-items-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {slides[activeSlide]?.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className="flex h-14 w-14 items-center justify-center rounded-xl"
            >
              <span
                className="h-8 w-8 bg-white"
                style={{
                  WebkitMaskImage: `url('${item.src}')`,
                  maskImage: `url('${item.src}')`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
                aria-hidden="true"
              />
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

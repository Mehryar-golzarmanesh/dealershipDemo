"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export function CarGallery({ images, alt }: { images: string[]; alt: string }) {
  const [mainRef, mainApi] = useEmblaCarousel({ direction: "rtl", loop: true });
  const [thumbRef, thumbApi] = useEmblaCarousel({
    direction: "rtl",
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const savedScroll = useRef<number | null>(null);
  const savedFocus = useRef<HTMLElement | null>(null);

  const onThumbClick = useCallback(
    (index: number) => mainApi?.scrollTo(index),
    [mainApi],
  );

  useEffect(() => {
    if (!mainApi) return;
    const onSelect = () => {
      const i = mainApi.selectedScrollSnap();
      setSelectedIndex(i);
      thumbApi?.scrollTo(i);
    };
    mainApi.on("select", onSelect);
    return () => {
      mainApi.off("select", onSelect);
    };
  }, [mainApi, thumbApi]);

  const openLightbox = useCallback((index: number) => {
    if (typeof document !== "undefined")
      savedFocus.current = document.activeElement as HTMLElement | null;
    setSelectedIndex(index);
    setLightboxOpen(true);
  }, []);

  // Lock body scroll while lightbox is open and restore scroll/focus on close
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (lightboxOpen) {
      savedScroll.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${savedScroll.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      if (savedScroll.current !== null) {
        const scrollTo = savedScroll.current;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        window.scrollTo({ top: scrollTo, left: 0, behavior: "auto" });
        savedScroll.current = null;
      }
      if (savedFocus.current) {
        try {
          savedFocus.current.focus({ preventScroll: true });
        } catch (e) {
          savedFocus.current.focus();
        }
        savedFocus.current = null;
      }
    }
    // cleanup in case component unmounts while locked
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [lightboxOpen]);

  return (
    <>
      {/* main image*/}
      <div className="relative ">
        <div className="overflow-hidden rounded-md" ref={mainRef}>
          <div className="flex">
            {images.map((src, i) => (
              <button
                key={src}
                className="min-w-0 flex-[0_0_100%] relative aspect-video cursor-zoom-in"
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={src}
                  alt={`${alt} — تصویر ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={i === 0}
                  quality={90}
                  className="object-cover border border-[#b8935f] rounded-xl"
                />
              </button>
            ))}
          </div>
        </div>

        <button
          aria-label="تصویر قبلی"
          onClick={() => mainApi?.scrollPrev()}
          className="absolute top-1/2 -translate-y-1/2 right-5 w-11 h-11 rounded-full
               bg-[#14161A]/70 border border-white/10 text-[#EDE9E1]
               flex items-center justify-center text-lg
               hover:border-[#B8935F] hover:text-[#D9B37E] transition-colors"
        >
          ‹
        </button>
        <button
          aria-label="تصویر بعدی"
          onClick={() => mainApi?.scrollNext()}
          className="absolute top-1/2 -translate-y-1/2 left-5 w-11 h-11 rounded-full
               bg-[#14161A]/70 border border-white/10 text-[#EDE9E1]
               flex items-center justify-center text-lg
               hover:border-[#B8935F] hover:text-[#D9B37E] transition-colors"
        >
          ›
        </button>

        <span
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-[#B9B5AC]
                    bg-[#14161A]/60 border border-white/10 rounded-full px-3.5 py-1"
        >
          {selectedIndex + 1} / {images.length}
        </span>
      </div>

      {/* always-visible thumbnail strip */}
      <div className="overflow-hidden mt-3" ref={thumbRef}>
        <div className="flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => onThumbClick(i)}
              className={`min-w-0 flex-[0_0_92px] h-16 relative rounded overflow-hidden border transition-opacity ${
                i === selectedIndex
                  ? "opacity-100 border-[#B8935F]"
                  : "opacity-55 border-white/10"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="92px"
                quality={90}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* fullscreen overlay, opened by clicking the main image */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={selectedIndex}
        slides={images.map((src) => ({ src, alt }))}
        plugins={[Zoom, Thumbnails]}
        on={{
          view: ({ index }) => {
            setSelectedIndex(index);
            mainApi?.scrollTo(index);
            thumbApi?.scrollTo(index);
          },
        }}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
      />
    </>
  );
}

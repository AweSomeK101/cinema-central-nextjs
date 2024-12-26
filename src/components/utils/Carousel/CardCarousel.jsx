"use client";

import { useRef, useState, useEffect } from "react";
import ChevronLeft from "@/../public/icons/chevron-left.svg";
import ChevronRight from "@/../public/icons/chevron-right.svg";

function CardCarousel({ children }) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const wrapperRef = useRef(null);

  function scrollLeft() {
    wrapperRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  }

  function scrollRight() {
    wrapperRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  }

  function checkOverflow() {
    const element = wrapperRef.current;

    if (element) {
      setIsOverflowing(element.scrollWidth > element.clientWidth);
    }
  }

  useEffect(() => {
    checkOverflow();

    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <div className="grid relative">
      <div
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-proximity"
        ref={wrapperRef}
      >
        {isOverflowing && (
          <button
            type="button"
            className="absolute left-0 top-0 bottom-0 w-8 bg-black opacity-20 hover:opacity-50 transition-opacity hover:text-white cursor-pointer"
            onClick={scrollLeft}
          >
            <ChevronLeft alt="scroll left" />
          </button>
        )}

        {children}

        {isOverflowing && (
          <button
            type="button"
            className="absolute right-0 top-0 bottom-0 w-8 bg-black opacity-20 hover:opacity-50 transition-opacity hover:text-white cursor-pointer"
            onClick={scrollRight}
          >
            <ChevronRight alt="scroll right" />
          </button>
        )}
      </div>
    </div>
  );
}

export default CardCarousel;

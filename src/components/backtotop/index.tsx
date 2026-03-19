"use client";

import { useState, useEffect } from "react";

const BUTTON_HIDDEN = "translate-x-24 opacity-0 cursor-default";

export default function BackToTop() {
  const [buttonClass, setButtonClass] = useState(BUTTON_HIDDEN);

  useEffect(() => {
    const handleScroll = () => {
      // Check the current vertical scroll position
      if (window.scrollY > window.innerHeight - 480) {
        setButtonClass("");
      } else {
        setButtonClass(BUTTON_HIDDEN);
      }
    };

    // Add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
    window.location.replace("/#");
  };

  return (
    <button
      title="Back to Top"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 text-white bg-[#8FFF00] bg-opacity-50 transition duration-500 ${buttonClass}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-chevron-up"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
        />
      </svg>
    </button>
  );
}

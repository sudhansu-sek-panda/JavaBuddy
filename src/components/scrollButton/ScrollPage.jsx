import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Try to find the scrollable container
    const scrollContainer = document.getElementById("main-scroll") || window;

    const handleScroll = () => {
      const scrollTop =
        scrollContainer === window
          ? window.scrollY
          : scrollContainer.scrollTop;

      setVisible(scrollTop > 300);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollContainer = document.getElementById("main-scroll");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
  onClick={scrollToTop}
  className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#323233] text-[#f89820] shadow-lg border-2 border-[#f89820] transition-all duration-300 
    hover:bg-[#f89820] hover:text-[#2d2d2d] hover:scale-110 hover:shadow-[0_0_15px_#f89820] 
    ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
>
  <ArrowUp size={30} />
</button>
  );
};

export default ScrollPage;

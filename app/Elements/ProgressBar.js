import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Jarak scroll vertikal
      const documentHeight = document.body.scrollHeight - window.innerHeight; // Total tinggi scrollable halaman
      const scrollPercentage = (scrollTop / documentHeight) * 100; // Persentase scroll
      setScrollWidth(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="progress-bar"
      style={{
        width: `${scrollWidth}%`,
      }}
    ></div>
  );
};

export default ProgressBar;

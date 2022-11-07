import { useState, useEffect, useRef } from "react";

export default function useWaifuVisible(initialIsVisible) {
  const [isWaifuVisible, setIsWaifuVisible] =
    useState(initialIsVisible);
  const waifuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (waifuRef.current && !waifuRef.current.contains(event.target)) {
        setIsWaifuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { waifuRef, isWaifuVisible, setIsWaifuVisible };
}

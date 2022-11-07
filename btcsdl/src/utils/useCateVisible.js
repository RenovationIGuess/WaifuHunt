import { useState, useEffect, useRef } from "react";

export default function useCateVisible(initialIsVisible) {
  const [isCateVisible, setIsCateVisible] =
    useState(initialIsVisible);
  const cateRef = useRef(null);

  const handleClickOutside = (event) => {
    if (cateRef.current && !cateRef.current.contains(event.target)) {
        setIsCateVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { cateRef, isCateVisible, setIsCateVisible };
}

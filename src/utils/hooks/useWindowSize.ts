/* global window */

import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleWindowResize = () =>
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return size;
};

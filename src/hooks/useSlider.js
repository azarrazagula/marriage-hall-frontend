import { useState, useCallback } from "react";

/**
 * useSlider Hook
 * Manages image index, direction, and animation state for sliders.
 * 
 * @param {number} totalImages - The total number of images in the slider.
 * @param {number} animationDuration - Duration of the slide animation in ms (default 320).
 */
const useSlider = (totalImages, animationDuration = 320) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [dir, setDir] = useState("right");

  const slideTo = useCallback(
    (next, d) => {
      if (sliding) return;
      setDir(d);
      setSliding(true);
      setTimeout(() => {
        setImgIdx(next);
        setSliding(false);
      }, animationDuration);
    },
    [sliding, animationDuration]
  );

  const nextSlide = useCallback(() => {
    slideTo((imgIdx + 1) % totalImages, "right");
  }, [imgIdx, totalImages, slideTo]);

  const prevSlide = useCallback(() => {
    slideTo((imgIdx - 1 + totalImages) % totalImages, "left");
  }, [imgIdx, totalImages, slideTo]);

  return {
    imgIdx,
    sliding,
    dir,
    slideTo,
    nextSlide,
    prevSlide,
    setImgIdx
  };
};

export default useSlider;

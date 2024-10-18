import { useCallback, useEffect, useState } from "react";

function useCarousel(itemLength: number, autoPlay?: boolean) {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 === itemLength ? 0 : prevIndex + 1));
  }, [itemLength]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? itemLength - 1 : prevIndex - 1));
  };

  const handleCarouselItemClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(handleNext, 1000 * 3)

    return () => clearInterval(interval);
  }, [autoPlay, currentIndex, handleNext, itemLength])

  return [currentIndex, { handleNext, handlePrevious, handleCarouselItemClick }] as const;
}

export default useCarousel;

import { useState, useEffect, useCallback } from 'react';

const headerHeight = 36;

const useScroll = () => {
  const [pageY, setPageY] = useState(0);
  const [isBelow, setIsBelow] = useState(false);
  
  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    setPageY(pageYOffset);
    setIsBelow(pageYOffset > headerHeight && pageYOffset > pageY);
  }, [pageY])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  
  return isBelow;
}

export default useScroll;
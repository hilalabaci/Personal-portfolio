import React, { useEffect, useState } from "react";

const useOnScreen = <T extends HTMLElement>(ref: React.RefObject<T>) => {
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsOnScreen(entry.isIntersecting);
    },
    {
      threshold: 0.1,
    }
  );

  useEffect(() => {
    observer.observe(ref.current!);

    return () => observer.disconnect();
  });
  return isOnScreen;
};

export default useOnScreen;

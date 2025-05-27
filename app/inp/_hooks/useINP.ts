import { useState } from "react";

export const useINP = (delay: number = 1000) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    if (isSuccess) return setIsSuccess(false);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, delay);
  };

  return { isLoading, isSuccess, handleClick };
};

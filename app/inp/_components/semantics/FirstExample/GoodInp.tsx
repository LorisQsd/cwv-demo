"use client";
import Check from "@/public/check.svg";
import Spinner from "@/public/spinner.svg";
import { useINP } from "../../../_hooks/useINP";
import INPButton from "./INPButton";

export const GoodInp = () => {
  const { isLoading, isSuccess, handleClick } = useINP();

  return (
    <INPButton
      variant="secondary"
      className="min-w-[141px] text-center"
      onClick={handleClick}
    >
      {isSuccess && <Check className="size-6" />}
      {isLoading && <Spinner className="animate-spin size-6" />}
      {!isSuccess && !isLoading && "Good INP"}
    </INPButton>
  );
};

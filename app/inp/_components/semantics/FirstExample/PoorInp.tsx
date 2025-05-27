"use client";
import Check from "@/public/check.svg";
import { useINP } from "../../../_hooks/useINP";
import INPButton from "./INPButton";
export const PoorInp = () => {
  const { isSuccess, handleClick } = useINP();

  return (
    <INPButton className="min-w-[133px] text-center" onClick={handleClick}>
      {isSuccess && <Check className="size-6" />}
      {!isSuccess && "Poor INP"}
    </INPButton>
  );
};

"use client";

import { useState } from "react";

export const Selection = () => {
  const [delayedSelected, setDelayedSelected] = useState<string>("🦦");
  const [selected, setSelected] = useState<string>("🦦");

  const handleClick = (emoji: string) => {
    if (emoji === delayedSelected) return;

    setSelected(emoji);
    setTimeout(() => {
      setDelayedSelected(emoji);
    }, 2000);
  };

  return (
    <>
      <div className="flex gap-2 mt-4 justify-center">
        <button
          className="text-4xl cursor-pointer duration-300 hover:scale-110 hover:rotate-6"
          onClick={() => handleClick("🦦")}
        >
          🦦
        </button>
        <button
          className="text-4xl cursor-pointer duration-300 hover:scale-110 hover:rotate-6"
          onClick={() => handleClick("🐶")}
        >
          🐶
        </button>
        <button
          className="text-4xl cursor-pointer duration-300 hover:scale-110 hover:rotate-6"
          onClick={() => handleClick("🐱")}
        >
          🐱
        </button>
      </div>
      <div className="flex mt-8 gap-4 justify-center">
        <div className="flex flex-col gap-2 items-center">
          <p className="font-bold text-red-400">Poor INP</p>
          <p className="text-4xl">{delayedSelected}</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="font-bold text-green-400">Good INP</p>
          <p className="text-4xl">{selected}</p>
        </div>
      </div>
    </>
  );
};

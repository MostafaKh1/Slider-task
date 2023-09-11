import React, { Dispatch, SetStateAction } from "react";

interface SliderBulletsProps {
  id: number;
  imgUrl: string;
  currentImageIndex: number;
  setCurrentImageIndex: Dispatch<SetStateAction<number>>;
}

function SliderBullets({
  id,
  currentImageIndex,
  imgUrl,
  setCurrentImageIndex,
}: SliderBulletsProps) {
  const currentBullet = id - 1 === currentImageIndex;
  return (
    <button
      className={`w-4 h-4 border     rounded-full ${
        currentBullet
          ? " bg-green-300 w-[13px] h-[13px] border-green-300"
          : "bg-gray-400 border-white"
      }`}
    ></button>
  );
}

export default SliderBullets;

import React, { Dispatch, SetStateAction } from "react";

interface PhotoProps {
  id: number;
  imgUrl: string;
  currentImageIndex: number;
  setCurrentImageIndex: Dispatch<SetStateAction<number>>;
}

function Photo({
  id,
  imgUrl,
  currentImageIndex,
  setCurrentImageIndex,
}: PhotoProps) {
  const isFullWidth = id - 1 === currentImageIndex;
  const width = isFullWidth ? { width: "60%" } : { width: "8rem" };

  const handleChange = () => {
    setCurrentImageIndex(id - 1);
  };

  return (
    <div
      className="transition-all duration-300 cursor-pointer"
      style={width}
      onClick={handleChange}
    >
      <img src={imgUrl} className={`h-[40rem]  w-full  object-cover `} />
    </div>
  );
}

export default Photo;

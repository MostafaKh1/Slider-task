import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import the CSS

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

  const [isLoading, setIsLoading] = useState(true);

  const handleChange = () => {
    setCurrentImageIndex(id - 1);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <SkeletonTheme baseColor="#1A1A1A" highlightColor="#333">
      <div
        className="transition-all duration-300 cursor-pointer"
        style={width}
        onClick={handleChange}
      >
        {isLoading ? (
          <Skeleton width={"100%"} className="h-full custom-skeleton" />
        ) : (
          <img
            src={imgUrl}
            className="h-[40rem] w-full object-cover"
            onLoad={handleImageLoad}
          />
        )}
      </div>
    </SkeletonTheme>
  );
}

export default Photo;

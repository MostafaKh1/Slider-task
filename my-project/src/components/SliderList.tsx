import React, { useState } from "react";
import { data } from "../data";
import Photo from "./Photo";
import SliderBullets from "./SliderBollets";

function SliderList() {
  const [currentImageIndex, setCurrentImageIndex] = useState(5);

  const showPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const showNextImage = () => {
    if (currentImageIndex < data.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  console.log(data[currentImageIndex]);

  return (
    <div>
      <div className="flex   md:flex-row justify-center items-center ">
        <div className="bg-mainColor m-10 w-[75%] h-[40rem] -translate-x-[20%] -skew-x-[30deg] flex  gap-x-4">
          {data.map(({ id, imgUrl }) => {
            return (
              <Photo
                key={id}
                id={id}
                imgUrl={imgUrl}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
              />
            );
          })}

          <h3 className="text-xl w-[10rem]  text-green-400 ">SEE ALL</h3>
        </div>
        <div className="flex flex-col gap-y-4 text-center items-center justify-center -translate-x-[50%] relative ">
          <div className="flex gap-x-4">
            <span className="text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>

            <h1 className="text-gray-100">{data[currentImageIndex].title}</h1>
          </div>
          <div className="flex items-center gap-x-12">
            {/* left arrow */}
            <button className="text-white" onClick={showPreviousImage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <p className="text-[#383838] w-[300px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam
              eos aperiam, esse nostrum nobis, et mollitia odio quisquam, non
              fugiat fugit error earum consequatur atque officiis aspernatur
              placeat voluptatem!
            </p>
            {/* right arrow */}
            <button className="text-white" onClick={showNextImage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center max-w-[1000px]  gap-x-3">
        {data.map(({ id, imgUrl }) => {
          return (
            <SliderBullets
              key={id}
              id={id}
              imgUrl={imgUrl}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SliderList;

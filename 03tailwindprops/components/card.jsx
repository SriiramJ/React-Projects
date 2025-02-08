import React from "react";

function Card({year = "2026"}) {

    // console.log(props)
  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="https://images.pexels.com/photos/18681384/pexels-photo-18681384/free-photo-of-gaming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="flex items-center md:items-start">
          <span className="text-2xl font-medium">Class Warfare</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>{year}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;

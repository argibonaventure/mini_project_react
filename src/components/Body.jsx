import React from "react";

const Body = () => {
  return (
    <div>
      <h1 className="font-bold text-center my-4 text-red-800 text-2xl mt-5">
        {" "}
        BEST SELLING MENU
      </h1>

      <div className="flex flex-col ml-[50px] gap-4  md:flex-row md:justify-around mb-10 mt-5">
        <div>
          <img src="src/assets/Menu-1.jpeg" className="h-[200px] w-[300px]" />
        </div>
        <div>
          <img src="src/assets/Menu-2.jpeg" className="h-[200px] w-[300px]" />
        </div>
        <div>
          <img src="src/assets/Menu-3.jpeg" className="h-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default Body;

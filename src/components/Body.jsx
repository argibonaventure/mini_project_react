import React from "react";


const Body = () => {
  return (
    <div>
      <h1 className="font-bold text-center my-4 text-red-800 text-2xl">
        {" "}
        BEST SELLING MENU
      </h1>

      <div className="md:justify-evenly md:my-4 md:flex ">
        <div>
          <img src="src/assets/Menu-1.jpeg" className="h-[200px]" />
        </div>
        <div>
          <img src="src/assets/Menu-2.jpeg" className="h-[200px]" />
        </div>
        <div>
          <img src="src/assets/Menu-3.jpeg" className="h-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default Body;

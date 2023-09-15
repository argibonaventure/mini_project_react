import React from "react";
import { Link } from "react-router-dom";
import TeamResources from "../pages/TeamResources";

const TeamResourcesBtn = () => {
  return (
    <div>
     <Link to={'/teamResources'}><button className="text-white border border-black-2 p-2">
        Team Resources
      </button></Link> 
    </div>
  );
};

export default TeamResourcesBtn;

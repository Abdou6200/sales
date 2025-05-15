import React from "react";
import SideBar from "./Sections/SideBar/SideBar";
import TopBar from "./Sections/TopBar/TopBar";
import { InfoSection } from "./Sections/InfoSection/InfoSection";

export const AdminBonTable = (): JSX.Element => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 bg-gray-100 p-4">
        <TopBar /> 
        <InfoSection /> 
      </div>
    </div>
  );
};

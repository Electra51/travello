import React, { useState } from "react";
import { flightOffer } from "../../Components/data/Data";
import SectionHeader from "../../Components/UI/SectionHeader";
import OneWayTab from "./OneWayTab";
import Searchfield from "../../Components/UI/Searchfield";
import RoundTripTab from "./RoundTripTab";
import MultiCityTab from "./MultiCityTab";
import ComponentWrapper from "../../Components/UI/ComponentWrapper";

const MasterPrice = () => {
  const [activeTab, setActiveTab] = useState("OneWay");

  //tab click
  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <SectionHeader title="Master Price" />
      <ComponentWrapper>
        {/* tab */}
        <div className="w-[400px] mx-auto flex justify-center items-center py-5">
          <div
            onClick={() => handleClick("RoundTrip")}
            className={`h-7 w-[120px] border border-[#2F3A91] flex justify-center items-center text-[15px] cursor-pointer ${
              activeTab === "RoundTrip" ? "text-white bg-[#2F3A91]" : ""
            }`}>
            Round Trip
          </div>
          <div
            onClick={() => handleClick("OneWay")}
            className={`h-7 w-[120px] border border-[#2F3A91] flex justify-center items-center text-[15px] cursor-pointer ${
              activeTab === "OneWay" ? "text-white bg-[#2F3A91]" : ""
            }`}>
            One way
          </div>
          <div
            onClick={() => handleClick("MultiCity")}
            className={`h-7 w-[120px] border border-[#2F3A91] flex justify-center items-center text-[15px] cursor-pointer ${
              activeTab === "MultiCity" ? "text-white bg-[#2F3A91]" : ""
            }`}>
            Multi City
          </div>
        </div>
      </ComponentWrapper>

      {/* tab wise content */}
      <Searchfield />
      {activeTab === "OneWay" && <OneWayTab flightOffer={flightOffer} />}
      {activeTab === "RoundTrip" && <RoundTripTab />}
      {activeTab === "MultiCity" && <MultiCityTab />}
    </div>
  );
};

export default MasterPrice;

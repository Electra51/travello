import React, { useState } from "react";
import { flightOffer } from "../../Components/data/Data";
const MasterPrice = () => {
  const [activeTab, setActiveTab] = useState("RoundTrip");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="border-0 border-b border-[#c3c3c3] pb-2">
        <p className="font-bold text-xl text-black w-[1440px] mx-auto px-5 py-1">
          Master Price
        </p>
      </div>

      <div className="w-[1440px] mx-auto">
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
      </div>

      {activeTab === "OneWay" && (
        <>
          <div className="w-[1440px] mx-auto px-5">
            <hr />
            <div className="flex justify-normal items-center gap-2">
              <div className="border border-red-500 h-8 w-[400px] my-4"></div>
              <div className="border border-red-500 h-8 w-[400px] my-4"></div>
              <div className="border border-red-500 h-8 w-[400px] my-4"></div>
              <div className="border border-red-500 h-8 w-[400px] my-4"></div>
              <div className="border border-red-500 h-8 w-[400px] my-4"></div>
            </div>
            <hr />
          </div>
          <div className="w-[1440px] mx-auto px-5">
            <table className="w-full table">
              <thead>
                <tr className="bg-[#E5E7EB] py-2">
                  <th className="uppercase font-medium text-black">Flight</th>
                  <th className="uppercase font-medium text-black">Aircraft</th>
                  <th className="uppercase font-medium text-black">Class</th>
                  <th className="uppercase font-medium text-black">Fare</th>
                  <th className="uppercase font-medium text-black">Route</th>
                  <th className="uppercase font-medium text-black">
                    Departure
                  </th>
                  <th className="uppercase font-medium text-black">Arrival</th>
                  <th className="uppercase font-medium text-black">Duration</th>
                  <th className="uppercase font-medium text-black">Price</th>
                </tr>
              </thead>
              <tbody className="mt-8">
                {flightOffer?.map((e, i) => {
                  console.log("e", e);
                  return (
                    <tr key={i} className="hover">
                      <td>
                        {e?.itineraries[0]?.segments?.map((seg, i) => {
                          console.log("segg", seg);
                          return (
                            <div>
                              {seg?.marketingCarrier} {seg?.flightNumber}
                            </div>
                          );
                        })}
                      </td>
                      <td>
                        {e?.itineraries[0].segments?.map((seg, i) => {
                          return <div>{seg?.aircraft}</div>;
                        })}
                      </td>
                      <td>
                        {e?.class[0]?.map((cl, i) => {
                          return <p>{cl}</p>;
                        })}
                      </td>
                      <td>
                        {e?.fareBasis[0]?.map((fare, i) => {
                          return <p>{fare}</p>;
                        })}
                      </td>
                      <td>
                        {e?.itineraries[0]?.segments?.map((seg, i) => {
                          return (
                            <div>
                              {seg?.departure.iataCode}-{seg?.arrival.iataCode}
                            </div>
                          );
                        })}
                      </td>
                      <td>
                        {e?.itineraries[0]?.segments?.map((seg, i) => {
                          return (
                            <div className="text-nowrap">
                              {seg?.departure.at}
                            </div>
                          );
                        })}
                      </td>
                      <td>
                        {e?.itineraries[0]?.segments?.map((seg, i) => {
                          return <div>{seg?.arrival.at}</div>;
                        })}
                      </td>
                      <td>{e?.itineraries[0]?.duration}</td>

                      <td className="flex flex-col">
                        {e.price}
                        <button className="bg-[#2F3A91] px-1 text-white rounded-sm w-[77px]">
                          Select
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
      {activeTab !== "OneWay" && (
        <div className="w-[1440px] mx-auto px-5 flex justify-center items-center mt-20">
          <p className="text-xl">Comming Soon...</p>
        </div>
      )}
    </div>
  );
};

export default MasterPrice;

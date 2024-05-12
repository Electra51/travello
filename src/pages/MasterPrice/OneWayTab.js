import React from "react";
import ComponentWrapper from "../../Components/UI/ComponentWrapper";

const OneWayTab = ({ flightOffer }) => {
  return (
    <ComponentWrapper>
      <p className="text-[16px] font-medium py-3">Data Parse Successfully</p>
      <table className="w-full table">
        <thead>
          <tr className="bg-[#E5E7EB] py-2">
            <th className="uppercase font-medium text-black">Flight</th>
            <th className="uppercase font-medium text-black">Aircraft</th>
            <th className="uppercase font-medium text-black">Class</th>
            <th className="uppercase font-medium text-black">Fare</th>
            <th className="uppercase font-medium text-black">Route</th>
            <th className="uppercase font-medium text-black">Departure</th>
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
                      <div className="text-nowrap">{seg?.departure.at}</div>
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
    </ComponentWrapper>
  );
};

export default OneWayTab;

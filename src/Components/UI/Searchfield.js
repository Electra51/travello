import React from "react";

const Searchfield = () => {
  return (
    <div className="w-[1440px] mx-auto px-5">
      <hr />
      <div className="flex justify-normal items-center gap-6 py-4">
        <input
          className="border border-gray-300 h-8 w-[140px] px-4"
          placeholder="LHR"
          type="text"
        />
        <input
          className="border border-gray-300 h-8 w-[140px] px-4"
          placeholder="CDG"
          type="text"
        />
        <input
          className="border border-gray-300 h-8 w-[140px] px-4"
          placeholder="YY-MM-DD"
          type="date"
        />
        <select className="border border-gray-300 h-8 w-[130px] px-4">
          <option>Day -</option>
          <option>hello</option>
          <option>hello</option>
          <option>hello</option>
        </select>
        <select className="border border-gray-300 h-8 w-[140px] px-4">
          <option>Day +</option>
          <option>hello</option>
          <option>hello</option>
          <option>hello</option>
        </select>
        <select className="border border-gray-300 h-8 w-[150px] px-4">
          <option>Any time</option>
          <option>hello</option>
          <option>hello</option>
          <option>hello</option>
        </select>
        +
        <select className="border border-gray-300 h-8 w-[170px] px-4">
          <option>ADT</option>
          <option>hello</option>
          <option>hello</option>
          <option>hello</option>
        </select>
        <select className="border border-gray-300 h-8 w-[150px] px-4">
          <option>1</option>
          <option>hello</option>
          <option>hello</option>
          <option>hello</option>
        </select>
        +
      </div>
      <hr />
      <div className="flex justify-between items-center gap-2 py-3">
        <div className="flex justify-normal items-center gap-1 text-[15px] font-normal">
          <input type="checkbox" />
          <p>Extra Options</p>
        </div>
        <div className="flex justify-normal items-center gap-1 text-[15px] font-normal">
          <p className="font-medium">Environment</p>
          <input type="radio" />
          <p className="font-medium">Dummy</p>
          <input type="radio" />
          <p className="font-medium">PDT</p>
        </div>
        <div className="flex justify-normal items-center text-white bg-[#2F3A91] px-2 py-0.5 rounded-sm text-[15px] font-normal">
          Search
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Searchfield;

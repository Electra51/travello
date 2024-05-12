import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <div className="border-0 border-b border-[#c3c3c3] pb-2">
      <p className="font-bold text-xl text-black w-[1440px] mx-auto px-5 py-1">
        {title}
      </p>
    </div>
  );
};

export default SectionHeader;

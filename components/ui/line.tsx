import React from "react";

const Line = (needsHide: { needsHide: boolean }) => {
  return (
    <div
      className={`${needsHide ? "h-px w-7 bg-[#b8935f]" : "h-px w-7 bg-[#b8935f] hidden md:block"}`}
    ></div>
  );
};

export default Line;

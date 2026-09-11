import { SearchAlert } from "lucide-react";
import React from "react";

const notFound = () => {
  return (
    <div className="flex justify-center items-center pt-50">
      <p className="bg-[#14161a] p-20 rounded-xl text-[#bb9a6e] flex flex-col gap-4 items-center">
        <SearchAlert size={50} />
        صفحه مورد نظر هنوز نوشته نشده است.
      </p>
    </div>
  );
};

export default notFound;

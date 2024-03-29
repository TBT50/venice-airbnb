"use client";

import { BiSearch } from "react-icons/bi";

export const SearchFilters = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <button type="button" className="text-sm font-semibold px-6">
          Anywhere
        </button>
        <button
          type="button"
          className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center"
        >
          Any week
        </button>
        <button
          type="button"
          className="text-sm pl-6 pr-2 text-gray-600 flex items-center gap-3"
        >
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 text-white rounded-full">
            <BiSearch size={18} />
          </div>
        </button>
      </div>
    </div>
  );
};

import React from "react";

const TabSelector = ({
                         isActive,
                         children,
                         onClick,
                     }) => (
    <button
        className={`group inline-flex items-center px-10 py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap font-bold lg:text-lg ${
            isActive
                ? "border-[#5A142A] text-[#5A142A] focus:outline-none focus:text-[#5A142A] focus:border-[#5A142A]"
                : "border-transparent text-[#B08D57] hover:text-[#B08D57] hover:border-[#B08D57] focus:text-[#B08D57] focus:border-[#B08D57]"
        }`}
        onClick={onClick}
    >
        {children}
    </button>
);

export default TabSelector;

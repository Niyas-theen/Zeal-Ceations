import React from "react";

const Header = () => {
  return (
    <div className="header w-full h-24 flex flex-col justify-center items-center text-[#222222] font-sans text-lg lg:text-xl lg:flex-row lg:justify-between lg:px-20">
      <span className="hover:text-[#d93827]">
        <i class="ri-phone-line"></i> +91 421 2262556
      </span>
      <span className="hover:text-[#d93827]">
        <i class="ri-mail-line"></i> mis@zealgroups.in
      </span>
      <span className="hover:text-[#d93827]">
        <i class="ri-map-pin-line"></i> Tirupur, Tamilnadu, IND - 641604
      </span>
    </div>
  );
};

export default Header;

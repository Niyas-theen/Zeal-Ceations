import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <hr className="border-t-[1px] border-[#222222] w-full" /> */}
      <div className="w-full py-8 lg:flex justify-around lg:items-center lg:px-10">
        <div className="logoName w-full  ">
          <img
            className="w-[250px] px-5 pb-7 md:w-[350px] md:px-10 lg:w-[500px]"
            src="../CompanyName.png"
            alt="logo"
          />
        </div>
        <div className="w-full flex flex-row  justify-between px-7 md:px-10 lg:flex lg:justify-around">
          <div>
            <h2 className="text-2xl font-sans font-medium text-[#222222} pb-5 md:text-4xl ">
              Our Comapny
            </h2>
            <ul className="text-lg text-[#222222] font-sans font-normal space-y-2 md:text-xl lg:space-y-5">
              <li className="text-[#222222] cursor-pointer hover:text-[#d93827] ">About Us</li>
              <li className="text-[#222222] cursor-pointer hover:text-[#d93827] ">Design Studio</li>
              <li className="text-[#222222] cursor-pointer hover:text-[#d93827] ">Managment</li>
              <li className="text-[#222222] cursor-pointer hover:text-[#d93827] ">Company</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-sans font-medium text-[#222222} pb-5 md:text-4xl ">
              Contacts
            </h2>
            <ul className="text-lg text-[#222222] font-sans font-normal space-y-2 md:text-xl lg:space-y-5">
              <li className="text-[#222222] cursor-pointer hover:text-[#d93827]">
                <i class="ri-phone-line"></i> +91 421 2262556
              </li>
              <li className="text-[#222222] cursor-pointer hover:text-[#d93827]">
                <i class="ri-mail-line"></i> mis@zealgroups.in
              </li>
              <li className="text-[#222222] cursor-pointer hover:text-[#d93827]">
                <i class="ri-map-pin-line"></i> Tirupur, Tamilnadu, <br /> IND -
                641604
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-t-[1px] border-[#222222] w-full" />
      <div className="icons w-full">
        <ul className="flex text-3xl tetx-[#222222] justify-center space-x-8 py-5 md:space-x-14 md:text-5xl lg:text-6xl lg:space-x-36 ">
          <li className=" text-[#222222] cursor-pointer hover:text-[#d93827] ">
            <i class="ri-facebook-fill"></i>
          </li>
          <li className=" text-[#222222] cursor-pointer hover:text-[#d93827] ">
            <i class="ri-twitter-fill"></i>
          </li>
          <li className=" text-[#222222] cursor-pointer hover:text-[#d93827] ">
            <i class="ri-youtube-fill"></i>
          </li>
          <li className=" text-[#222222] cursor-pointer hover:text-[#d93827] ">
            <i class="ri-instagram-fill"></i>
          </li>
        </ul>
      </div>
      <hr className="border-t-[1px] border-[#222222] w-full" />
      <footer className="text-center text-[#222222] font-sans font-light px-5 py-5 md:text-xl lg:text-2xl">
        © Copyright 2024 All Rights Reserved,  Designed & Developed by Zeal
        Design Studio
      </footer>
    </div>
  );
};

export default Footer;

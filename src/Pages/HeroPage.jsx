import React from "react";
import Marquee from "react-fast-marquee";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const HeroPage = () => {
  return (
    <>
      {/* HeroBanner */}
      <Header />
      <div className="bannerImage w-full flex justify-center items-center ">
        <img
          className=" relative w-[1850px] h-[600px] rounded-3xl lg:w-[1850px] lg:h-[750px] object-cover bg-center px-3"
          src="./MainBanner.png"
          alt="Banner Image"
        />
        <div className="absolute left-10 space-y-8 lg:left-20 lg:space-y-1 ">
          <p className="text-xl text-[#222222] font-poppins pb-5">
            Welcome to,
          </p>
          <img
            className="w-[300px] lg:w-[600px]"
            src="./CompanyName.png"
            alt=""
          />
          <p className="text- lg:text-xl text-[#222222] font-Poppins italic  pb-10 w-[305px] lg:w-[500px] ">
            Welcome to zeal groups, where we stay ahead of the curve in the
            dynamic world of fashion.
          </p>
          <button
            className="bg-[#222222] text-2xl font-sans text-white px-10 py-5 rounded-full hover:bg-[#d93827]"
            type="button"
          >
            About Us
          </button>
        </div>
      </div>
      <div className="bannerContent w-full flex justify-center items-center text-[#222222]  px-10 text-center font-popins italic py-5 pb-16">
        <p className=" text-lg lg:text-2xl ">
          As a leading garment manufacturing company, we are dedicated to
          crafting clothing that not Only meets but exceeds the expectations of
          modern trends. <br /> Our commitment to innovation And quality is
          evident in every stitch, fabric choice, and design detail.
        </p>
      </div>

      {/* Our Brands */}
      <div className="pb-20">
        <h1 className="font-Bebas text-[#222222] text-7xl px-10 space-x-10 text-center pb-8">
          Our Brands
        </h1>
        <div className="brand-container w-full flex items-center lg:justify-center space-x-7 lg:space-x-20  px-6 oveverflow-x-scroll scroll-smooth overflow-auto ">
          <div className="Fervoro">
            <div className="brand-1 bg-[url('./Fervoro.jpg')] bg-cover w-[275px] h-[400px] lg:w-[375px] lg:h-[600px] bg-[#222222] flex justify-center items-center rounded-xl">
              {/* <h1 className="text-5xl text-[#d93827] font-Bebas ">Brand 1</h1> */}
            </div>
            <div className="brand-link w-[275px] lg:w-[375px] flex justify-between items-center p-5 font-Bebas text-5xl">
              <h1>FERVORO</h1>
              <a href="">
                <i class="ri-arrow-right-up-line text-[#222222] hover:text-[#d93827]"></i>
              </a>
            </div>
          </div>
          <div className="ardeur">
            <div className="brand-2 bg-[url('./Ardeur.jpg')] bg-cover w-[275px] h-[400px] lg:w-[375px] lg:h-[600px] bg-[#222222] flex justify-center items-center rounded-xl">
              {/* <h1 className="text-5xl text-[#d93827] font-Bebas ">Brand 1</h1> */}
            </div>
            <div className="brand-link w-[275px] lg:w-[375px] flex justify-between items-center p-5 font-Bebas text-5xl">
              <h1>ardeur</h1>
              <a href="">
                <i class="ri-arrow-right-up-line text-[#222222] hover:text-[#d93827]"></i>
              </a>
            </div>
          </div>
          <div className="revisited">
            <div className="brand-3 bg-[url('./Revisited.jpg')] bg-cover w-[275px] h-[400px] lg:w-[375px] lg:h-[600px] bg-[#222222] flex justify-center items-center rounded-xl">
              {/* <h1 className="text-5xl text-[#d93827] font-Bebas ">Brand 3</h1> */}
            </div>
            <div className="brand-link w-[275px] lg:w-[375px] flex justify-between items-center p-5 font-Bebas text-5xl">
              <h1>revisited</h1>
              <a href="">
                <i class="ri-arrow-right-up-line text-[#222222] hover:text-[#d93827]"></i>
              </a>
            </div>
          </div>
          <div className="streetz">
            <div className="brand-4 bg-[url('./Streetz.jpg')] bg-cover w-[275px] h-[400px] lg:w-[375px] lg:h-[600px] bg-[#222222] flex justify-center items-center rounded-xl">
              {/* <h1 className="text-5xl text-[#d93827] font-Bebas ">Brand 4</h1> */}
            </div>
            <div className="brand-link w-[275px] lg:w-[375px] flex justify-between items-center p-5 font-Bebas text-5xl">
              <h1>streetz</h1>
              <a href="">
                <i class="ri-arrow-right-up-line text-[#222222] hover:text-[#d93827]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Studio & showroom */}

      {/* Knitted Garments */}
      <div className="kinttedGarments w-full flex flex-col items-center lg:flex lg:flex-row lg:justify-center lg:gap-20">
        <div className="kinttedcontent">
          <h1 className="font-Bebas text-[#222222] text-center text-7xl lg:text-[100px]">
            Knitted Garments
          </h1>
          <h6 className="font-Poppins text-[#222222] text-lg text-center tracking-[8px] pb-8 lg:tracking-[19px] lg:pb-[340px]">
            FOR A BETTER FUTURE
          </h6>
          <p className="font-Poppins text-[#222222] text-lg lg:text-2xl text-justify lg:leading-10 italic px-6 lg:w-[700px] pb-8">
            Zeal is a india based leading manufacturer of high quality Knit
            garments – offering international buyers a one-stop Destination for
            cutting-edge knitwear products and related Services located in
            tirupur, with emphasis on r&d, knit Expert limited aims to
            distinguish from the rest with industry Research and analysis,
            fashion trend forecasts, product design And development, sourcing,
            reduced lead times, competitive Pricing, no compromise on
            compliance, high-end manufacturing, strict quality control,
            efficient risk management, fast shipments and comprehensive
            reporting.
          </p>
        </div>
        <div className="kinttedImage pb-8">
          <div className="w-[380px] h-[500px] md:w-[700px] md:h-[500px] lg:w-[1000px] lg:h-[950px] bg-[url('./knittedimage.jpg')] bg-cover bg-left rounded-lg"></div>
        </div>
      </div>

      {/* sustainable fashion */}
      <div className="sustainableFashion w-full font-Bebas text-[80px] md:text-[100px] lg:text-[150px] text-[#222222] flex justify-center items-center">
        <Marquee play>
          sustainable fashion - sustainable fashion - sustainable fashion -
        </Marquee>
      </div>

      {/* sustainable fashion Image */}
      <div className="sustainableImage">
        <div className="image w-full h-[960px] bg-[url('./sustainablefashion.jpg')] bg-cover bg-top">
          <h1 className="font-Bebas text-[#222222] text-[70px] md:text-[100px] lg:text-[170px] text-center">
            eco fashion{" "}
          </h1>
          <p className="font-Poppins text-lg text-center italic text-[#222222] md:px-5 lg:text-2xl lg:w-[1000px] lg:mx-auto">
            A mindful approach to designing, producing, and consuming clothing
            that prioritizes environmental preservation, ethical labor
            practices, and reducing waste. It focuses on creating long-lasting,
            eco-friendly pieces while promoting social responsibility.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HeroPage;

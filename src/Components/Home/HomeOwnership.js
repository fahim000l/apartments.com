import React from "react";
import homeImage from "../../Assets/Home_logo-removebg-preview.png";
import cardImage from "../../Assets/home_ownership/home_ownership.PNG";
import { Button } from "@mui/material";
import CommonCard from "../../Items/CommonCard";

const HomeOwnership = () => {
  const cardInfo = {
    media: cardImage,
    title: "Explore Your Options",
    details:
      "Deciding to become a homeowner is a big deal! Luckily, with Homes.com, you get the most accurate homes for sale property data, an agent directory, and collaboration tools to browse with your agent and co-shopper to help you make the right decision.",
    action: "Start Your Search",
    status: true,
  };

  return (
    <div>
      <div className="px-2 lg:px-20 mb-10">
        <div className="flex lg:flex-row flex-col items-center justify-center px-auto">
          <p className="lg:text-3xl text-xl font-semibold">
            Discover Homeownership on{" "}
          </p>
          <img
            onClick={() => {
              window.open("https://www.homes.com/", "_blank");
            }}
            className="w-[200px] cursor-pointer"
            src={homeImage}
            alt=""
          />
        </div>
        <p className="text-lg lg:text-xl">
          Renting is great, but maybe you’re thinking about buying a home
          instead. We want you to find the right place. That’s why our sister
          site, Homes.com, is designed to help you find your dream home, even if
          you’re a first time buyer.
        </p>
      </div>
      <CommonCard cardInfo={cardInfo} />
    </div>
  );
};

export default HomeOwnership;

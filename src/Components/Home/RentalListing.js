import React from "react";
import rentalImage from "../../Assets/rental_listing/rental_listing.PNG";
import { Button } from "@mui/material";
import CommonCard from "../../Items/CommonCard";

const RentalListing = () => {
  const cardInfo = {
    media: rentalImage,
    title: "Renting Made Simple",
    details:
      "Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.",
    action: "Find Out More",
    status: true,
  };

  return (
    <div>
      <div className="px-2 mb-10">
        <p className="lg:text-3xl text-xl font-bold">
          The Most Rental Listings
        </p>
        <p className="lg:text-xl text-lg">
          Choose from over 1 million apartments, houses, condos, and townhomes
          for rent.
        </p>
      </div>
      <CommonCard cardInfo={cardInfo} />
    </div>
  );
};

export default RentalListing;

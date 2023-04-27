import React, { useRef } from "react";
import Banner from "../Components/Home/Banner";
import FeaturedRentals from "../Components/Home/FeaturedRentals";
import { Divider } from "@mui/material";
import RentalListing from "../Components/Home/RentalListing";
import HomeOwnership from "../Components/Home/HomeOwnership";
import ManageProperty from "../Components/Home/ManageProperty";
import PropertyManager from "../Components/Home/PropertyManager";
import Footera from "../Components/Common/Footera";
import Footerb from "../Components/Common/Footerb";

const Home = () => {
  const scrollRf = useRef(null);

  return (
    <div>
      <Banner scrollRf={scrollRf}></Banner>
      <FeaturedRentals scrollRf={scrollRf}></FeaturedRentals>
      <Divider
        sx={{
          my: [5, 5, 10],
          border: "1px solid gray",
          width: "75%",
          mx: "auto",
        }}
      />
      <RentalListing></RentalListing>
      <Divider
        sx={{
          my: [5, 5, 10],
          border: "1px solid gray",
          width: "75%",
          mx: "auto",
        }}
      />
      <HomeOwnership></HomeOwnership>
      <Divider
        sx={{
          my: [5, 5, 10],
          border: "1px solid gray",
          width: "75%",
          mx: "auto",
        }}
      />
      <ManageProperty></ManageProperty>
      <Divider
        sx={{
          my: [5, 5, 10],
          border: "1px solid gray",
          width: "75%",
          mx: "auto",
        }}
      />
      <PropertyManager></PropertyManager>
      <Divider
        sx={{
          my: [5, 5, 10],
          border: "1px solid gray",
          width: "75%",
          mx: "auto",
        }}
      />
      <Footera></Footera>
      <Divider
        sx={{
          my: [5, 5, 10],
          border: "1px solid gray",
          width: "75%",
          mx: "auto",
        }}
      />
      <Footerb></Footerb>
    </div>
  );
};

export default Home;

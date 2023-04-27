import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SearchDrawer from "../../Items/SearchDrawer";

const Banner = ({ scrollRf }) => {
  const [placeHolder, setPlaceHolder] = useState("Charlotte, NC");

  return (
    <Box
      className="hero"
      sx={{
        height: ["75vh", "75vh", "63vh"],
        backgroundImage: `url("https://images.ctfassets.net/pg6xj64qk0kh/mwsUhyGswLjXMSLoDfpqH/529760a3f4cd85c5c3eb8f7b6c13a67d/camden-tempe-apartments-tempe-az-west-pool-and-loungers.jpg")`,
        clipPath: [
          "polygon(0% 0%, 100% 0%, 100% 90%, 55% 90%, 50% 100%, 45% 90%, 0 90%)",
          "polygon(0% 0%, 100% 0%, 100% 90%, 55% 90%, 50% 100%, 45% 90%, 0 90%)",
          "polygon(0% 0%, 100% 0%, 100% 100%, 64% 100%, 50% 100%, 33% 100%, 0 100%)",
        ],
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center ">
        <div className="">
          <h1 className="mb-5 text-2xl lg:text-6xl font-bold text-white">
            Discover Your New Home
          </h1>
          <p className="mb-5 text-xl lg:text-2xl text-white">
            Helping 100 million renters <br className="lg:hidden block" /> find
            their perfect fit.
          </p>
          <div className="flex">
            <SearchDrawer />
            <input
              onClick={() =>
                setPlaceHolder("Search by location or point of interest")
              }
              onBlur={() => setPlaceHolder("Charlotte, NC")}
              type="text"
              placeholder={placeHolder}
              className="input input-bordered w-full hidden lg:block"
            />
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                ml: 1,
                backgroundColor: "green",
                "&:hover": {
                  backgroundColor: "green",
                },
              }}
            >
              Search
            </Button>
          </div>
          <div className="flex flex-col items-center lg:hidden">
            <Button
              onClick={() =>
                scrollRf.current.scrollIntoView({ behavior: "smooth" })
              }
              sx={{
                fontWeight: "bold",
                color: "white",
                mt: 10,
                textTransform: "none",
              }}
              // className="font-bold text-white mt-10"
            >
              Scroll for more
            </Button>
            <KeyboardDoubleArrowDownIcon sx={{ color: "white" }} />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Banner;

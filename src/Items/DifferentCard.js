import React from "react";
import playstore from "../Assets/play_store.png";
import appstore from "../Assets/app_store.png";
import { Button } from "@mui/material";

const DifferentCard = ({ cardInfo }) => {
  const { media, title, details, status } = cardInfo;

  return (
    <div>
      <div
        className={`flex flex-col-reverse ${
          status ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center lg:text-start lg:px-20`}
      >
        <div className="lg:p-20 px-5 lg:bg-gray-100 lg:h-[300px] lg:w-[50%] py-5">
          <p className="lg:text-2xl font-bold">{title}</p>
          <div>
            <p className="lg:text-lg inline">{details[0]}</p>
            <Button
              sx={{
                textTransform: "none",
                display: "inline",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Apartments.com
            </Button>
            <p className="lg:text-lg inline">{details[1]}</p>
          </div>
          <div className="flex justify-center">
            <img
              onClick={() =>
                window.open("https://apps.apple.com/app/id319836632")
              }
              className="w-[200px] cursor-pointer lg:block hidden"
              src={appstore}
              alt=""
            />
            <img
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.apartments.mobile.android"
                )
              }
              className="w-[200px] cursor-pointer"
              src={playstore}
              alt=""
            />
          </div>
        </div>
        <img className="h-[300px] lg:w-[50%]" src={media} alt="" />
      </div>
      <div className="mt-10 lg:text-xl lg:px-20 px-5">
        <p className="inline">Search over 1 million listings including</p>
        <Button
          onClick={() => window.open("https://www.apartments.com/")}
          sx={{
            fontSize: ["", "", "20px"],
            textTransform: "none",
            display: "inline",
            textDecoration: ["underline", "underline", "none"],
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          appartments
        </Button>
        ,
        <Button
          onClick={() => window.open("https://www.apartments.com/houses/")}
          sx={{
            fontSize: ["", "", "20px"],
            textTransform: "none",
            display: "inline",
            textDecoration: ["underline", "underline", "none"],
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          houses
        </Button>
        ,
        <Button
          onClick={() => window.open("https://www.apartments.com/condos/")}
          sx={{
            fontSize: ["", "", "20px"],
            textTransform: "none",
            display: "inline",
            textDecoration: ["underline", "underline", "none"],
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          condos
        </Button>
        and
        <Button
          onClick={() => window.open("https://www.apartments.com/townhomes/")}
          sx={{
            fontSize: ["", "", "20px"],
            textTransform: "none",
            display: "inline",
            textDecoration: ["underline", "underline", "none"],
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          townhomes
        </Button>
        <p className="inline">
          available for rent. You’ll find your next home, in any style you
          prefer.
        </p>
      </div>
    </div>
  );
};

export default DifferentCard;

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const CommonCard = ({ cardInfo }) => {
  const { title, details, action, status, media } = cardInfo;
  return (
    <div
      className={`flex flex-col-reverse ${
        status ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center lg:text-start lg:px-20`}
    >
      <div className="lg:p-20 px-5 lg:bg-gray-100 lg:h-[300px] lg:w-[50%] py-5">
        <p className="lg:text-2xl font-bold">{title}</p>
        <p className="lg:text-lg">{details}</p>
        <Button
          sx={{
            textTransform: "none",
            fontSize: "20px",
            fontWeight: "bold",
            display: ["none", "none", "block"],
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {action}
        </Button>
        <Button
          variant="contained"
          sx={{
            my: 2,
            mx: "auto",
            width: "90%",
            backgroundColor: "green",
            textTransform: "none",
            fontSize: "15px",
            fontWeight: "bold",
            display: ["block", "block", "none"],
            "&:hover": {
              backgroundColor: "green",
            },
          }}
        >
          {action}
        </Button>
      </div>
      <img className="h-[300px] lg:w-[50%]" src={media} alt="" />
    </div>
  );
};

export default CommonCard;

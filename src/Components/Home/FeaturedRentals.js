import { Box, Button, Stack } from "@mui/material";
import React from "react";
import rental1 from "../../Assets/chicago_rents/post_apartments.jpg";
import rental2 from "../../Assets/chicago_rents/fulbrix.jpg";
import rental3 from "../../Assets/chicago_rents/5630_N_Sheridan_Rd.jpg";
import rental4 from "../../Assets/chicago_rents/elevate.jpg";
import RentalCard from "../../Items/RentalCard";

const FeaturedRentals = ({ scrollRf }) => {
  const rentals = [
    {
      image: rental1,
      title: "Post Apartments",
      place: "856 W Blackhawk St",
      city: "Chicago, IL 60642",
      rent: "Studio - 2 beds | $1,773 - $3,640",
    },
    {
      image: rental2,
      title: "Fulbrix",
      place: "160 N Elizabeth St",
      city: "Chicago, IL 60607",
      rent: "Studio - 3 beds | $2,354 - $6,647",
    },
    {
      image: rental3,
      title: "5630 N Sheridan Rd",
      place: "5630 N Sheridan Rd",
      city: "Chicago, IL 60660",
      rent: "Studio - 1 bed | $1,130 - $1,550",
    },
    {
      image: rental4,
      title: "Elevate",
      place: "930 W Altgeld St",
      city: "Chicago, IL 60614",
      rent: "Studio - 3 beds | $2,150 - $14,910",
    },
  ];

  return (
    <Box sx={{ mt: 10 }}>
      <p ref={scrollRf} className="lg:text-3xl text-xl font-bold">
        Explore Rentals in Chicago, IL
      </p>
      <Stack
        direction={["column", "column", "row"]}
        gap={5}
        sx={{ mt: 5, px: [2, 2, 10] }}
      >
        {rentals?.map((rental, i) => (
          <RentalCard rental={rental} key={i} />
        ))}
      </Stack>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "green",
          textTransform: "none",
          mt: 5,
          width: ["90%", "90%", "10%"],
          fontSize: "large",
          mx: [2, 2, 0],
          "&:hover": {
            backgroundColor: "green",
          },
        }}
      >
        View More
      </Button>
    </Box>
  );
};

export default FeaturedRentals;

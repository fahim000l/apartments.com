import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function RentalCard({ rental }) {
  const { image, title, place, city, rent } = rental;

  return (
    <Card
      sx={{
        cursor: "pointer",
        maxWidth: ["100%", "100%", 300],
        border: "1px solid gray",
        "&:hover": {
          border: "1px solid green",
          //   maxWidth: 300,
          //   height: 500,
          transform: "scale3d(1.05, 1.05, 1)",
        },
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        // height="140px"
        sx={{ height: "200px", width: ["100%", "100%", "300px"] }}
        image={image}
      />
      <CardContent>
        <Typography
          fontWeight={"bold"}
          gutterBottom
          variant="p"
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {place}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rent}
        </Typography>
      </CardContent>
    </Card>
  );
}

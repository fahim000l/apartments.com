import React from "react";
import cardMedia1 from "../../Assets/manage_property/card_media1.PNG";
import cardMedia2 from "../../Assets/manage_property/card_media2.PNG";
import CommonCard from "../../Items/CommonCard";

const ManageProperty = () => {
  const cardInfos = [
    {
      media: cardMedia1,
      title: "Advertise Your Rental",
      details:
        "Connect with more than 75 million renters looking for new homes using our comprehensive marketing platform.",
      action: "List Your Property",
      status: true,
    },
    {
      media: cardMedia2,
      title: "Lease 100% Online",
      details:
        "Accept applications, process rent payments online, and sign digital leases all powered on a single platform.",
      action: "Manage Your Property",
      status: false,
    },
  ];

  return (
    <div>
      <div className="mb-10 px-2 lg:px-20">
        <p className="text-xl lg:text-3xl font-bold">
          The Perfect Place to Manage Your Property
        </p>
        <p className="text-lg lg:text-xl">
          Work with the best suite of property management tools on the market.
        </p>
      </div>
      {cardInfos?.map((cardInfo, i) => (
        <CommonCard key={i} cardInfo={cardInfo} />
      ))}
    </div>
  );
};

export default ManageProperty;

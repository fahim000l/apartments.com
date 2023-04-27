import React from "react";
import CommonCard from "../../Items/CommonCard";
import cardMedia1 from "../../Assets/property_managers/card_media1.PNG";
import cardMedia2 from "../../Assets/property_managers/card_media2.PNG";
import cardMedia3 from "../../Assets/property_managers/card_media3.PNG";
import DifferentCard from "../../Items/DifferentCard";

const PropertyManager = () => {
  const cardInfos = [
    {
      media: cardMedia1,
      title: "Tips for Renters",
      details:
        "Find answers to all of your renting questions with the best renter’s guide in the galaxy.",
      action: "Browse Articles",
      status: true,
    },
    {
      media: cardMedia2,
      title: "Property Manager Resources",
      details:
        "Stay up-to-date using our tips and guides on rent payments, leasing, management solutions, and more.",
      action: "Stay Informed",
      status: false,
    },
  ];

  const cardInfo = {
    media: cardMedia3,
    title: "Take Us With You",
    details: [
      "keep",
      "in the palm of your hand throughout your rental journey.",
    ],
    status: true,
  };

  return (
    <div>
      <div className="mb-10 px-2 lg:px-20">
        <p className="text-xl lg:text-3xl font-bold">
          Renting Made Easy for Residents and Property Managers
        </p>
        <p className="text-lg lg:text-xl">
          Our articles, guides, and videos help you through the process, start
          to finish.
        </p>
      </div>
      {cardInfos?.map((cardInfo, i) => (
        <CommonCard key={i} cardInfo={cardInfo} />
      ))}
      <DifferentCard cardInfo={cardInfo} />
    </div>
  );
};

export default PropertyManager;

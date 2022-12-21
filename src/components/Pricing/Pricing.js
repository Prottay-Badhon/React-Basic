import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricings = [
    {
      id: 1,
      name: "Free",
      price: 0.0,
      benefits: ["Free", "Life time", "Pretty"],
    },
    {
      id: 2,
      name: "Regular",
      price: 9.99,
      benefits: ["Free", "Life time", "Pretty"],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.9,
      benefits: ["Free", "Life time", "Pretty"],
    },
  ];

  return (
    <div className="bg-indigo-200 p-4 mt-12 lg:grid grid-cols-3 gap-2">
      {pricings.map((option) => (
        <PricingOption option={option}></PricingOption>
      ))}
    </div>
  );
};

export default Pricing;

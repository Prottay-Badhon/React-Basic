import React from "react";
import Benefit from "../Benefit/Benefit";
import {ArrowRightIcon } from '@heroicons/react/24/solid'

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-2">
      <h1 className="text-3xl bg-indigo-200 p-2">{name}</h1>
      <p className="">
        <span className="text-5xl font-bold"> {price}</span>
        <span className="font-bold text-2xl text-gray-500">/mo</span>
      </p>
      <h1 className="text-2xl">Benefits:</h1>
      {benefits.map((benefit) => (
        <Benefit benefit={benefit}></Benefit>
      ))}
      <button className="flex justify-center items-center py-2 font-bold text-white bg-green-500 w-full rounded">
        Buy Now
        <ArrowRightIcon className="h-6 w-6 ml-2"></ArrowRightIcon>

      </button>
    </div>
  );
};

export default PricingOption;

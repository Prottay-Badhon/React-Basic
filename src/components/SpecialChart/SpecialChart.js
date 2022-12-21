import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SpecialChart = (props) => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        const phoneData = loadedData.map((phone) => {
          const parts = phone.slug.split("-");
          const ph = {
            name: parts[0],
            value: parseInt(parts[1]),
          };
          return ph;
        });
        setPhones(phoneData);
        console.log(phoneData);
      });
  }, []);

  return (
    <div>
      <BarChart width={650} height={400} data={phones}>
        <Bar dataKey="value" fill="#8884d8" />
        <XAxis dataKey="value" />
          <YAxis />
          <Tooltip />
      </BarChart>
    </div>
  );
};

export default SpecialChart;

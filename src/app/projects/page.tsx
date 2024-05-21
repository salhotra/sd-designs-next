"use client";

import React from "react";
import ProjectListItem from "./components/ProjectListItem";
import SmoothScroll from "../components/SmoothScroll";

const projects = [
  {
    id: "01",
    title: "Kalkaji - New Delhi - Aug 2023",
    thumbnail: "/kalkaji-hall.webp",
  },
  {
    id: "02",
    title: "Saket - New Delhi - Oct 2023",
    thumbnail: "/saket-bedroom-render.webp",
  },
];

const PortfolioList: React.FC = () => {
  return (
    <div className="bg-offwhite flex flex-1">
      <SmoothScroll>
        {projects.map((item, index) => (
          <ProjectListItem
            key={index}
            index={index}
            id={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
          />
        ))}
      </SmoothScroll>
    </div>
  );
};

export default PortfolioList;

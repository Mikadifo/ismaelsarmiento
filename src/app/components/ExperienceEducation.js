"use client";

import education from "@/data/education";
import experience from "@/data/experience";
import ExperienceEducationCard from "./ExperienceEducationCard";
import { useEffect, useState } from "react";

const ExperienceEducation = ({ section }) => {
  const [max, setMax] = useState(3);
  const [originalLength] = useState(
    section === "edu" ? education.length : experience.length
  );
  const [filteredList, setFilteredList] = useState(
    (section === "edu" ? education : experience).slice(0, max)
  );

  const handleSeeMore = () => {
    if (max < originalLength) {
      if (max + 2 < originalLength) {
        setMax(2);
      } else {
        setMax(originalLength);
      }
    }
  };

  const handleSeeLess = () => {
    setMax(3);
  };

  useEffect(() => {
    setFilteredList((section === "edu" ? education : experience).slice(0, max));
  }, [max]);

  return (
    <div
      className={`flex justify-center ${
        section === "edu" ? "bg-white text-darkBlue" : "bg-lightBlue text-white"
      }`}
    >
      <div className="px-8 py-16 max-w-[1024px]">
        <h3 className="text-center font-bold text-xl mb-8">
          {section === "edu" ? "Educación" : "Experiencia Profesional"}
        </h3>
        <div className="flex gap-8 flex-col justify-center items-center">
          {filteredList.map((item) => (
            <ExperienceEducationCard
              key={item.id}
              item={item}
              styles={
                section === "edu"
                  ? "text-darkBlue border-darkBlue"
                  : "text-white border-white"
              }
            />
          ))}
        </div>
        {originalLength > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={max < originalLength ? handleSeeMore : handleSeeLess}
              className="underline underline-offset-4 text-lg font-bold"
            >
              {max < originalLength ? "Ver más" : "Ver menos"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceEducation;

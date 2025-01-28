"use client";
import testimonials from "@/data/testimonials";
import TestimonialCard from "./TestimonalCard";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [max, setMax] = useState(7);
  const [filteredList, setFilteredList] = useState(testimonials.slice(0, max));

  const handleSeeMore = () => {
    if (max < testimonials.length) {
      if (max + 5 < testimonials.length) {
        setMax(5);
      } else {
        setMax(testimonials.length);
      }
    }
  };

  const handleSeeLess = () => {
    setMax(7);
  };

  useEffect(() => {
    setFilteredList(testimonials.slice(0, max));
  }, [max]);

  return (
    <div className="flex justify-center">
      <div className="px-8 py-16 bg-white max-w-[1024px]">
        <h3 className="text-center text-darkBlue font-bold text-xl mb-8">
          Testimonios
        </h3>
        <div className="flex gap-8 flex-wrap justify-center">
          {filteredList.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={max < testimonials.length ? handleSeeMore : handleSeeLess}
            className="underline underline-offset-4 text-darkBlue text-lg font-bold"
          >
            {max < testimonials.length ? "Ver más" : "Ver menos"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

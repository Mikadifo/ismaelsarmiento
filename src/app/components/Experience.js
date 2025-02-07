import experience from "@/data/experience";
import ExperienceEducationCard from "./ExperienceEducationCard";

const Experience = () => {
  return (
    <div className="flex justify-center bg-lightBlue">
      <div className="px-8 py-16 w-[1024px]">
        <h3 className="text-center text-white font-bold text-xl mb-8">
          Experiencia Profesional
        </h3>
        <div className="flex gap-8 flex-col justify-center items-center">
          {experience.map((item) => (
            <ExperienceEducationCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

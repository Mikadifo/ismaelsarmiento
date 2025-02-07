import experience from "@/data/education";
import ExperienceEducationCard from "./ExperienceEducationCard";

const Education = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="px-8 py-16 w-[1024px]">
        <h3 className="text-center text-darkBlue font-bold text-xl mb-8">
          Educación
        </h3>
        <div className="flex gap-8 flex-col justify-center items-center">
          {experience.map((item) => (
            <ExperienceEducationCard
              item={item}
              styles={"text-darkBlue border-darkBlue"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

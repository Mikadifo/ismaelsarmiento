import services from "@/data/services";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="px-8 py-16 bg-lightBlue8">
      <h3 className="text-center text-darkBlue font-bold text-xl mb-8">
        Servicios
      </h3>
      <div className="flex justify-center">
        <div className="flex gap-8 flex-wrap justify-center max-w-[1024px]">
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

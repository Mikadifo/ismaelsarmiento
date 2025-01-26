import services from "./../../data/services.js";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="px-8 py-16 bg-lightBlue8">
      <h3 className="text-center font-bold text-xl mb-8">Servicios</h3>
      <div className="flex gap-8 flex-wrap justify-center">
        {services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

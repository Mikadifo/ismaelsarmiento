import services from "./../../data/services.js";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="px-8 pb-16 pt-8 bg-lightBlue8">
      <h3 className="text-center font-bold text-xl mb-4">Servicios</h3>
      {services.map((service) => (
        <ServiceCard service={service} />
      ))}
    </div>
  );
};

export default Services;

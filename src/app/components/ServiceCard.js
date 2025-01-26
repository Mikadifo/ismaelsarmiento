const ServiceCard = ({ service }) => {
  return (
    <div className="text-center w-20">
      <div className="bg-white w-20 h-20 rounded-full p-4 flex items-center justify-center border border-solid border-darkBlue12 text-darkBlue">
        {service.icon}
      </div>
      <span>{service.label}</span>
    </div>
  );
};

export default ServiceCard;

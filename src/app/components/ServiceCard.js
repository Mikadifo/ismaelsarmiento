const ServiceCard = (serviceObj) => {
  return (
    <div>
      <div className="bg-white w-20 h-20 rounded-full p-4 flex items-center justify-center border border-solid border-darkBlue12">
        {serviceObj.service.icon}
      </div>
      <span>{serviceObj.service.label}</span>
    </div>
  );
};

export default ServiceCard;

const ExperienceEducationCard = ({
  item,
  styles = "text-white border-white",
}) => {
  return (
    <div
      className={`bg-transparent border border-solid ${styles} rounded-lg p-4 w-full`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3 h-12 max-h-12">
          <img
            className="rounded-lg h-full"
            src={item.logo}
            alt={`${item.institution} logo`}
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-base text-ellipsis whitespace-nowrap overflow-hidden">
              {item.institution}
            </h4>
            <span className="text-xs">{item.date}</span>
          </div>
        </div>
        <ul className="list-disc list-inside">
          {item.functions.map((functionItem, index) => (
            <li className="text-base" key={index}>
              {functionItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceEducationCard;

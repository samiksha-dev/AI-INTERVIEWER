import { CircleCheck } from "lucide-react";
const InterviewModeCard = ({ title, description, Icon,onSelect,selected }) => {
  return (
    <button onClick={onSelect} type="button" aria-pressed={selected} >
      <div className="mb-4 flex items-start justify-between rounded-lg  text-indigo-600">
        <div >
              <Icon size={22} />
            </div>
      <div>
      { selected && <CircleCheck size={22}/>}
      </div>
 
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-sm leading-6 text-gray-500">
        {description}
      </p>
    </button>
  );
};

export default InterviewModeCard;
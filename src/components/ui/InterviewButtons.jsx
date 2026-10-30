const InterviewButtons = ({buttonTitle,Icon,received,type="button"}) => {
  return (
      <button
        type={type}
        className="w-full h-11 px-4 bg-primary rounded-md
              flex items-center justify-center gap-1
              text-sm font-semibold
              text-white
              hover:bg-primary-dark transition"
        onClick={received}
      >
       
      {Icon && <Icon size={17} />}
        <span>{buttonTitle}</span>
      </button>
  );
};

export default InterviewButtons
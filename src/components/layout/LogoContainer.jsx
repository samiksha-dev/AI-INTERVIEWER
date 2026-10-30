import logo from "../../assets/images/logo.png";
const LogoContainer = () => {
  return (
    <div className="flex gap-x-0.5 md:mb-5">
      <img
        className="w-10 md:w-12 h-auto object-contain"
        src={logo}
        alt="project-logo"
      />
      <div className="flex gap-x-0.5 self-center text-white font-poppins text-base">
        <div className="text-primary">AI</div> Interviewer
      </div>
    </div>
  );
};

export default LogoContainer;

import LogoContainer from "./LogoContainer";
import NavigationItems from "./NavigationItems";
const Sidebar = () => {
  return (
    <div className="w-60 shrink-0 h-screen p-4 shadow-[4px_0_10px_rgba(0,0,0,0.25)] bg-navy">
      <LogoContainer />
      <NavigationItems/>
     
    </div>
  );
};

export default Sidebar;

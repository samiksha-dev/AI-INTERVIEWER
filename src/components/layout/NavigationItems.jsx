import React from 'react'
import {
  Home,
  BookCheck,
  FolderClock,
  User,
  Settings,
  ChartColumn,
  Brain,
  UserRoundArrowLeft,
  ChevronDown,
} from "lucide-react";
const sidebarElements = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Interviews",
    component: BookCheck,
  },
  {
    name: "History",
    component: FolderClock,
  },
  {
    name: "Analytics",
    component: ChartColumn,
  },
  {
    name: "Profile",
    component: User,
  },
  {
    name: "Settings",
    component: Settings,
  },
];
const NavigationItems = () => {
  return (<div>

  
       <ul className="flex flex-col text-white text-xs font-poppins gap-7 mb-20 bg-navy">
        {sidebarElements.map((item, index) => {
          const Icon = item.component;
          const size = 10;
          return (
            <li className="flex items-center gap-2" key={`${index}`}>
              <Icon size={size} />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
       <div className="bg-dark-blue h-auto rounded-md font-poppins flex flex-col justify-center items-center p-1 gap-y-3 mb-5">
        <div className="flex text-white text-xs gap-1">
          <Brain size={20} />
          <span className="flex self-center">Upgrade to Pro</span>
        </div>
        <div className="text-white text-xs">Unlock more features</div>
        <button className="bg-primary rounded-md text-white text-xs p-2 w-28">
          Upgrade
        </button>
      </div>
      <div className="flex text-white text-base bg-dark-blue -m-2 p-2 justify-between items-center">
        <UserRoundArrowLeft size={15} />
        <div>
          <div>Samiksha</div>
          <div>Free plan</div>
        </div>
        <ChevronDown size={10} />
      </div>
      </div>
  )
}

export default NavigationItems
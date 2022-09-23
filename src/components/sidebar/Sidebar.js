import style from "./sidebar.module.css";
import { HiDesktopComputer } from "react-icons/hi";
import { TbStack2 } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import { FiShoppingBag, FiFileText, FiSettings } from "react-icons/fi";

export const Sidebar = () => {
  const options = [
    { type: "Dashboard", icon: <HiDesktopComputer /> },
    { type: "Inventory", icon: <TbStack2 /> },
    { type: "Orders", icon: <FiShoppingBag /> },
    { type: "Customers", icon: <MdPeopleAlt /> },
    { type: "Reports", icon: <FiFileText /> },
    { type: "Settings", icon: <FiSettings /> },
  ];
  return (
    <aside className={style.sidebar}>
      {options.map(({ type, icon }) => (
        <div className={style.option} id={type}>
          {icon}
          {type}
        </div>
      ))}
    </aside>
  );
};

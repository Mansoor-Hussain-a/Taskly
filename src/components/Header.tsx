import { Search, Menu } from "lucide-react";
// import { createPortal } from "react-dom";
// import SideMenu from "./SideMenu";

function Header() {
  return (
    <header className="flex bg-bg-mid h-16  justify-between items-center border-primary border-b ">
      <div className="flex gap-3 items-center px-5 md:gap-10 ">
        <Menu className=" text-white block  md:hidden" />
        <h1 className="text-white text-xl md:text-2xl">Taskly</h1>
        <div className=" gap-5 hidden md:flex">
          <ul className="flex gap-5 text-text-main pb-1 ">
            <li className="cursor-pointer">Today</li>
            <li className="cursor-pointer">Upcoming</li>
            <li className="cursor-pointer">Completed</li>
          </ul>
        </div>
      </div>
      <div className="px-5  tablet:flex ">
        <div className="bg-fg-mid   border-primary border rounded-lg py-2 px-4 text-text-muted gap-5  w-[clamp(100px,40vw,45vw)] flex">
          <Search className="hidden text-primary md:block" />
          <input
            type="text"
            className="outline-0 min-w-0"
            placeholder="Search Tasks"
            aria-label="Search Tasks"
          />
        </div>
      </div>
      {/* {createPortal(<SideMenu />, document.getElementById("appWrapper")!)} */}
    </header>
  );
}
export default Header;

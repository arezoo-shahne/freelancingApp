import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="h-screen grid grid-rows-[auto,1fr] grid-cols-[15rem_1fr]">
      <Header/>
      <SideBar/>
      <div className=" bg-secondary-100 overflow-y-auto p-8">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-3">
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;

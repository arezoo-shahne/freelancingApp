import { HiHome } from "react-icons/hi2";
import AppLayout from "../../ui/AppLayout";
import { CustomNavlink } from "../../ui/NavLink";
import SideBar from "../../ui/SideBar";
import { HiCollection, HiOutlineViewGrid } from "react-icons/hi";

function FreelancerLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavlink to="dashboard">
          <HiHome />
          <span>خانه</span>
        </CustomNavlink>
        <CustomNavlink to="projects">
          <HiOutlineViewGrid />
          <span>پروژه‌ها</span>
        </CustomNavlink>
        <CustomNavlink to="proposals">
          <HiCollection />
          <span>پروپوزال‌ها</span>
        </CustomNavlink>
      </SideBar>
    </AppLayout>
  );
}
export default FreelancerLayout;

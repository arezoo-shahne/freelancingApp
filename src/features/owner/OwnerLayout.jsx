import { HiHome } from "react-icons/hi2";
import AppLayout from "../../ui/AppLayout";
import { CustomNavlink } from "../../ui/NavLink";
import SideBar from "../../ui/SideBar";
import { HiCollection } from "react-icons/hi";

function OwnerLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavlink to="/owner/dashboard">
          <HiHome />
          <span>خانه</span>
        </CustomNavlink>
        <CustomNavlink to="/owner/projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavlink>
      </SideBar>
    </AppLayout>
  );
}
export default OwnerLayout;

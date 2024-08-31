import {
  HiCollection,
  HiHome,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import { CustomNavlink } from "../../ui/NavLink";
import SideBar from "../../ui/SideBar";
import { MdCategory } from "react-icons/md";

function AdminLayout() {
  return (
    <AppLayout>
      <SideBar>
        <CustomNavlink to="dashboard">
          <HiHome />
          <span>خانه</span>
        </CustomNavlink>
        <CustomNavlink to="users">
          <HiUser />
          <span>کاربران</span>
        </CustomNavlink>
        <CustomNavlink to="projects">
          <HiOutlineViewGrid />
          <span>پروژه‌ها</span>
        </CustomNavlink>
        <CustomNavlink to="proposals">
          <HiCollection />
          <span>پروپوزال‌ها</span>
        </CustomNavlink>
        <CustomNavlink to="categories">
          <MdCategory />
          <span>دسته‌بندی‌ها</span>
        </CustomNavlink>
      </SideBar>
    </AppLayout>
  );
}
export default AdminLayout;

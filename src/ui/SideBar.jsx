function SideBar({ children }) {
  return (
    <div className=" bg-secondary-0 row-start-1 row-span-2 p-4 border-l border-l-secondary-200">
      <ul className="flex flex-row text-[12px] flex-wrap gap-x-1 md:flex-nowrap md:flex-col md:gap-y-4 md:text-sm">{children}</ul>
    </div>
  );
}

export default SideBar;

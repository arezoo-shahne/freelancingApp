import useUser from "../features/authentication/useUser";

function Header() {
  const { data } = useUser();
  return <div className="px-8 py-4 bg-secondary-0">App header</div>;
}

export default Header;

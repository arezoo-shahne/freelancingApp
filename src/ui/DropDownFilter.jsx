import { useSearchParams } from "react-router-dom";

function DropDownFilter({ options, filterValue }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterValue) || "";

  function handleChange(e) {
    searchParams.set(filterValue, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select
      value={value}
      onChange={handleChange}
      className="inputs text-primary-500 text-sm bg-secondary-0 w-40"
    >
      {options.map((item) => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
export default DropDownFilter;

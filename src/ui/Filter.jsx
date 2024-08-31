import { useSearchParams } from "react-router-dom";

function Filter({ options, filterValue }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get(filterValue) || options[0].value;

  function handleChange(value) {
    searchParams.set(filterValue, value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex items-center gap-x-2">
      <p>وضعیت</p>
      <div className="flex items-center gap-x-4 bg-secondary-0 rounded-lg border border-secondary-200">
        {options.map((item) => {
          const isActive = item.value === currentValue;
          return (
            <button
              onClick={() => handleChange(item.value)}
              className={`px-3 py-2.5 rounded-lg transition-all duration-300 text-sm ${
                isActive
                  ? "bg-primary-900 text-white"
                  : "bg-secondary-0 text-secondary-800"
              }`}
              key={item.value}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Filter;

function Selection({ label, name, option, value, register, require }) {
  return (
    <div>
      <label htmlFor={name}>
        {label} {require && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} className="inputs mt-4" value={value} id={name}>
        {option.map((option) => {
          return (
            <option key={option.value} value={option.value} className="text-secondary-500">
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Selection;

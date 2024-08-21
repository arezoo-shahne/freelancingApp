function Selection({ label, name, option, value, register, require }) {
  return (
    <div>
      <label htmlFor={name}>{label} {require && <span className="text-error">*</span>}</label>
      <select {...register(name)} className="inputs" value={value} id={name}>
        {option.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Selection;

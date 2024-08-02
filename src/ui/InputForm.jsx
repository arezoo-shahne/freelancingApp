function InputForm({ name, label, onChange, value }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        type="text"
        className="inputs"
      />
    </div>
  );
}

export default InputForm;

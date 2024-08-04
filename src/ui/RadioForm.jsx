function RadioForm({ name, id, value, label, onChange, checked }) {
  return (
    <div className="flex items-center  gap-x-2 text-secondary-600">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        className="form-radio w-3 h-3"
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioForm;

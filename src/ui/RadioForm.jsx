function RadioForm({ name, id, value, label ,register , validationSchema,watch,required}) {
  return (
    <div className="flex items-center  gap-x-2 text-secondary-600">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        className="form-radio w-3 h-3"
        {...register(name,validationSchema)}
        checked={watch(name)===value}
        required={required}
      />
      <label htmlFor={id}>{label} {required && <span className="text-error">*</span>}</label>
    </div>
  );
}

export default RadioForm;

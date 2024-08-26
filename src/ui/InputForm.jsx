function InputForm({
  name,
  label,
  register,
  validationSchema,
  type = "text",
  required,
  errors,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        className="inputs"
        autoComplete="off"
        required={required}
      />
      {errors && errors[name] && (
        <span className="text-error block">{errors[name]?.message}</span>
      )}
    </div>
  );
}

export default InputForm;

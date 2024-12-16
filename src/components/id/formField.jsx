import React from "react";

export const FormField = ({
  label,
  type,
  autoComplete,
  placeholder,
  select,
  value,
  onChange
}) => {
  const inputProps = {
    type,
    name: label,
    autoComplete: autoComplete || "off",
    placeholder,
    required: true,
    value,
    onChange: (e) => onChange(e, label)
  };

  return (
    <div className="course-input-field">
      <label htmlFor={label}>{label}*</label>
      {select ? (
        <select
          id={label}
          name={label}
          onChange={(e) => onChange(e, label)}
          defaultValue={""}
          required
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {select.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input {...inputProps} />
      )}
    </div>
  );
};

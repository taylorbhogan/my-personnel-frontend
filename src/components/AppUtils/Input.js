export const INPUT_ATTRIBUTES = "my-4 py-1 px-2 leading-10 bg-sky-100 rounded basis-full"

const Input = ({
  type = "text",
  value,
  name,
  onChange,
  labelOverrideText = null,
  showLabel = false,
  required = false,
  autoFocus = false,
}) => {

  if (showLabel) {
    return (
      <>
        <label htmlFor={name} className="basis-full">{labelOverrideText ?? `${name}:`}</label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={name}
          aria-label={name}
          value={value}
          onChange={onChange}
          required={required}
          autoFocus={autoFocus}
          className={INPUT_ATTRIBUTES}
        ></input>
      </>
    );
  } else {
    return (
      <input
        type={type}
        name={name}
        placeholder={name}
        aria-label={name}
        value={value}
        onChange={onChange}
        required={required}
        autoFocus={autoFocus}
        className={INPUT_ATTRIBUTES}
      ></input>
    );
  }
};

export default Input;

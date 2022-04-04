const Button = ({
  onClick,
  color = "blue",
  text,
  options,
  type = "button",
  spaceAndCenter = false,
}) => {
  const colorOptions = {
    gray: "border-slate-500 hover:bg-slate-500 hover:text-white",
    blue: "border-sky-500 hover:bg-sky-500 hover:text-white",
    red: "border-red-700 hover:bg-red-700 hover:text-black",
  };

  const button = (
    <button
      className={`${options} ${colorOptions[color]} border-2 rounded-lg px-3 py-1`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );

  if (spaceAndCenter) {
    return <div className="flex justify-center my-6">{button}</div>;
  } else {
    return button;
  }
};

export default Button;

// Designed for use within className="h-full flex items-center justify-center"
// n.b. options specifically requires a flex-basis
// to override border, set border=true, then set your own in options

const Form = ({
  children,
  onSubmit,
  options,
  border = "border-4 border-sky-500",
  padding = "p-16",
  gap = "gap-2",
  flip = false
}) => {
  return (
    <form
      className={`${border} rounded-lg flex flex-col ${gap} ${padding} ${flip && "md:flex-row"} ${options}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;

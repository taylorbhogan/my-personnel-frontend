const Centerer = ({ children, fullScreen = false, width = "", innerOptions = "" }) => {
  return (
    <div
      className={`${fullScreen && "h-full"} flex items-center justify-center`}
    >
      <div className={`${width} ${innerOptions} flex flex-col justify-center text-center`}>
        {children}
      </div>
    </div>
  );
};

export default Centerer;

const FlexCol = ({ children, options }) => {
  return (
    <div className={`${options} flex flex-col`}>
      {children}
    </div>
  );
};
export default FlexCol;

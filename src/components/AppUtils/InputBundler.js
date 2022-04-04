// To implement when shownLabel === true:
// // Wrap each Input component in a FlexCol component with options={"basis-full"}

const InputBundler = ({children}) => {
  return (
    <div className="basis-full flex flex-col lg:flex-row gap-2">
      {children}
    </div>
  )
}

export default InputBundler;

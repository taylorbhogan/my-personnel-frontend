import { GrClose } from "react-icons/gr";

const ButtonX = ({ setFunction }) => {
  return (
    <button
      type="button"
      onClick={() => setFunction(false)}
      className="absolute top-0 right-0 m-4"
    >
      <GrClose />
    </button>
  );
};

export default ButtonX;

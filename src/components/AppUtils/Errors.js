import FlexCol from "./FlexCol";

const Errors = ({ errors = [] }) => {
  return (
    errors.length > 0 && (
      <FlexCol options={"items-center p-6 border-2 rounded-lg border-red-700"}>
        <h2>Oops, we've run into a problem or two.</h2>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </FlexCol>
    )
  );
};

export default Errors;

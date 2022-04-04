const InfoField = ({ label, value, labelOptions = "" }) => {
  return (
    <p className="text-lg pb-2">
      <span className={`text-lg ${labelOptions}`}>{label}</span>
      <span className="text-xl">{value}</span>
    </p>
  );
};

export default InfoField;

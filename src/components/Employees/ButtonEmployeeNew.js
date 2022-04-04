import { useState } from "react";
import { Modal } from "../../context/Modal";
import Button from "../AppUtils/Button";
import NewEmployeeForm from "./NewEmployeeForm";

const ButtonEmployeeNew = ({ employees, setEmployees }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button text={"Add new employee"} onClick={handleClick} />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewEmployeeForm
            employees={employees}
            setEmployees={setEmployees}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
};

export default ButtonEmployeeNew;

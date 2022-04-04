import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonX from "../AppUtils/ButtonX";
import { Modal } from "../../context/Modal";
import FlexCol from "../AppUtils/FlexCol";
import Button from "../AppUtils/Button";

const ButtonEmployeeDelete = ({ id, employees, setEmployees }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/employees/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "MY_PERSONNEL_ACCESS_TOKEN"
        )}`,
      },
    });
    if (res.ok) {
      // const newEmployeeData = await res.json();

      const employeesObject = { ...employees };
      delete employeesObject[id];

      setEmployees(employeesObject);
      navigate("/employees");
    } else {
      console.log("res", res);
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        text={"Delete employee record"}
        color={"red"}
      />

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <FlexCol
            options={"items-center justify-around bg-gray-100 rounded-lg p-48"}
          >
            <ButtonX setFunction={setShowModal} />
            <h2>Deleting is permanent. Are you sure you'd like to proceed?</h2>
            <Button
              onClick={handleDelete}
              text={"confirm delete"}
              color={"red"}
              options={"mt-6"}
            />
          </FlexCol>
        </Modal>
      )}
    </>
  );
};

export default ButtonEmployeeDelete;

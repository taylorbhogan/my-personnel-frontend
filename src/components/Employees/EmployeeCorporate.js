import { useState } from "react";
import Input from "../AppUtils/Input";
import InfoField from "../AppUtils/InfoField";
import DropdownDepartment from "../Departments/DepartmentDropdown";
import FlexCol from "../AppUtils/FlexCol";
import InputBundler from "../AppUtils/InputBundler";
import Form from "../AppUtils/Form";
import Button from "../AppUtils/Button";

const Corporate = ({ employee, employees, setEmployees }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [firstName, setFirstName] = useState(employee.name?.first);
  const [middleName, setMiddleName] = useState(employee.name?.middle);
  const [lastName, setLastName] = useState(employee.name?.last);
  const [title, setTitle] = useState(employee.title);
  const [isAdmin, setIsAdmin] = useState(false);
  const [department, setDepartment] = useState(employee.department);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeObject = { ...employee };
    employeeObject.name.first = firstName;
    employeeObject.name.middle = middleName;
    employeeObject.name.last = lastName;
    employeeObject.title = title;
    employeeObject.isAdmin = isAdmin;
    employeeObject.department = department;

    const res = await fetch(`/api/employees/${employee._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(
          "MY_PERSONNEL_ACCESS_TOKEN"
        )}`,
      },
      body: JSON.stringify(employeeObject),
    });
    if (res.ok) {
      const newEmployeeData = await res.json();

      const employeesObject = { ...employees };
      employeesObject[employee._id] = newEmployeeData;

      setEmployees(employeesObject);
      setIsEditable(false);
    } else {
      console.log("res", res);
    }
  };

  return (
    <div className="">
      {isEditable ? (
        <Form onSubmit={handleSubmit} flip={true}>
          <FlexCol options={"basis-5/6"}>
            <InputBundler>
              <FlexCol options={"basis-full"}>
                <Input
                  value={firstName}
                  name={"First Name"}
                  onChange={(e) => setFirstName(e.target.value)}
                  showLabel={true}
                  required={true}
                  autoFocus={true}
                />
              </FlexCol>
              <FlexCol options={"basis-full"}>
                <Input
                  value={middleName}
                  name={"Middle Name"}
                  onChange={(e) => setMiddleName(e.target.value)}
                  showLabel={true}
                  required={true}
                />
              </FlexCol>
              <FlexCol options={"basis-full"}>
                <Input
                  value={lastName}
                  name={"Last Name"}
                  onChange={(e) => setLastName(e.target.value)}
                  showLabel={true}
                  required={true}
                />
              </FlexCol>
            </InputBundler>
            <Input
              value={title}
              name={"Title"}
              onChange={(e) => setTitle(e.target.value)}
              showLabel={true}
              required={true}
            />
            <div className="basis-full flex items-center">
              <label className="m-4 basis-full">
                <span>Admin?</span>
                <input
                  type={"checkbox"}
                  checked={isAdmin}
                  name={"isAdmin"}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                  className="m-2"
                ></input>
              </label>
              <DropdownDepartment
                value={department}
                setFunction={(department) => setDepartment(department)}
              />
            </div>
          </FlexCol>
          <FlexCol options={"basis-1/6"}>
            <Button
              options={"mb-3"}
              text={"Close"}
              color={"gray"}
              onClick={() => setIsEditable(false)}
            />
            <Button text={"Save"} options={"w-full"} type={"submit"} />
          </FlexCol>
        </Form>
      ) : (
        <div className="flex">
          <div className="basis-5/6">
            <h2 className="text-3xl mb-4">
              {`${employee.name?.first} ${employee.name?.middle} ${employee.name?.last}`}
            </h2>
            <p className="text-xl">{employee.title}</p>
            <p className="text-xl">{employee.department}</p>
            <InfoField label={"EmployeeId: "} value={employee._id} />
          </div>
          <FlexCol options={"basis-1/6"}>
            <Button onClick={() => setIsEditable(true)} text={"edit"} />
          </FlexCol>
        </div>
      )}
    </div>
  );
};

export default Corporate;

import { useState } from "react";
import ButtonX from "../AppUtils/ButtonX";
import Form from "../AppUtils/Form";
import Input from "../AppUtils/Input";
import DropdownDepartment from "../Departments/DepartmentDropdown";
import InputBundler from "../AppUtils/InputBundler";
import { INPUT_ATTRIBUTES } from "../AppUtils/Input";
import Button from "../AppUtils/Button";

const NewEmployeeForm = ({ employees, setEmployees, setShowModal }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [phonePersonal, setPhone1] = useState("");
  const [phoneCorporate, setPhone2] = useState("");
  const [email, setEmail] = useState("");
  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [pto, setPto] = useState(0);
  const [taxDocument, setTaxDocument] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = {
      corporateId: 2,
      password: "password",
      name: {
        first: firstName,
        middle: middleName,
        last: lastName,
      },
      title,
      department,
      admin: isAdmin,
      phone: {
        personal: phonePersonal,
        corporate: phoneCorporate,
      },
      email,
      address: {
        street1,
        street2,
        city,
        state,
        zip,
        country,
      },
      pto,
      taxDocuments: [taxDocument],
      imgUrl,
      directSupervisor: "62183672fe76c4271819c360",
    };

    const res = await fetch("/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(
          "MY_PERSONNEL_ACCESS_TOKEN"
        )}`,
      },
      body: JSON.stringify(newEmployee),
    });
    console.log("res", res);
    if (res.ok) {
      const { newEmployeeData } = await res.json();

      const employeesObject = { ...employees };
      employeesObject[newEmployeeData._id] = newEmployeeData;

      setEmployees(employeesObject);

      setShowModal(false);
    } else {
      console.log("res", res);
    }
  };

  const sectionClassName =
    "border-2 border-sky-500 rounded-lg p-8 flex flex-col";

  return (
    <Form
      options={"bg-white overflow-auto h-8vh"}
      gap={"gap-8"}
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl">Create a New Employee Record</h1>
      <ButtonX setFunction={setShowModal} />
      <section className={sectionClassName}>
        <h2>Personal Info</h2>
        <InputBundler>
          <Input
            value={firstName}
            name={"First Name"}
            onChange={(e) => setFirstName(e.target.value)}
            required={true}
            autoFocus={true}
          />
          <Input
            value={middleName}
            name={"Middle Name"}
            onChange={(e) => setMiddleName(e.target.value)}
            required={true}
          />
          <Input
            value={lastName}
            name={"Last Name"}
            onChange={(e) => setLastName(e.target.value)}
            required={true}
          />
        </InputBundler>
        <Input
          value={imgUrl}
          name={"Headshot url"}
          onChange={(e) => setImgUrl(e.target.value)}
          required={true}
        />
      </section>
      <section className={sectionClassName}>
        <h2>Company Info</h2>
        <InputBundler>
          <Input
            value={title}
            name={"Title"}
            onChange={(e) => setTitle(e.target.value)}
            required={true}
          />
          <DropdownDepartment
            setFunction={(department) => setDepartment(department)}
          />
        </InputBundler>
        <InputBundler>
          <label className="m-4 basis-full flex flex-row items-center justify-start">
            <span>Admin: </span>
            <input
              type={"checkbox"}
              checked={isAdmin}
              name={"isAdmin placeholder"}
              onChange={(e) => setIsAdmin(e.target.checked)}
              className="m-2"
            ></input>
          </label>
          <label className="m-4 basis-full flex flex-row items-center justify-between">
            <span>PTO Hours:</span>
            <input
              type={"number"}
              value={pto}
              name={"pto placeholder"}
              onChange={(e) => setPto(e.target.value)}
              className={INPUT_ATTRIBUTES}
            ></input>
          </label>
        </InputBundler>
      </section>
      <section className={sectionClassName}>
        <h2>Address Info</h2>
        <InputBundler>
          <Input
            value={street1}
            name={"Street Address"}
            onChange={(e) => setStreet1(e.target.value)}
            required={true}
          />
          <Input
            value={street2}
            name={"Apt/Suite/Other"}
            onChange={(e) => setStreet2(e.target.value)}
            required={true}
          />
          <Input
            value={city}
            name={"City"}
            onChange={(e) => setCity(e.target.value)}
            required={true}
          />
        </InputBundler>
        <InputBundler>
          <Input
            value={state}
            name={"State"}
            onChange={(e) => setState(e.target.value)}
            required={true}
          />
          <Input
            value={zip}
            name={"ZIP Code"}
            onChange={(e) => setZip(e.target.value)}
            required={true}
          />
          <Input
            value={country}
            name={"Country"}
            onChange={(e) => setCountry(e.target.value)}
            required={true}
          />
        </InputBundler>
      </section>
      <section className={sectionClassName}>
        <h2>Contact Info</h2>
        <InputBundler>
          <Input
            value={phonePersonal}
            name={"Personal Phone"}
            onChange={(e) => setPhone1(e.target.value)}
            required={true}
          />
          <Input
            value={phoneCorporate}
            name={"Corporate Phone"}
            onChange={(e) => setPhone2(e.target.value)}
            required={true}
          />
        </InputBundler>
        <Input
          value={email}
          name={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
      </section>
      <section className={sectionClassName}>
        <h2>Tax Documents</h2>
        <InputBundler>
          <Input
            name={"Tax Document url"}
            onChange={(e) => setTaxDocument(e.target.value)}
            required={true}
          />
        </InputBundler>
      </section>
      <Button
        text={"Submit"}
        options={"w-1/2"}
        type={"submit"}
        spaceAndCenter={true}
      />
    </Form>
  );
};

export default NewEmployeeForm;

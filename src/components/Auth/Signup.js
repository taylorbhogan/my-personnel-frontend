import React, { useState } from "react";
import Button from "../AppUtils/Button";
import Centerer from "../AppUtils/Centerer";
import Form from "../AppUtils/Form";
import Input from "../AppUtils/Input";
import StyledLink from "../AppUtils/StyledLink";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Centerer fullScreen={true} width={"basis-1/3"} innerOptions={"pb-8 border-4 border-sky-500 rounded-lg"}>
      <Form options={"basis-1/3"} border={false}>
        <Input
          value={email}
          name={"Email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          name={"Password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          text={"Sign Up"}
          options={"w-1/2"}
          type={"submit"}
          spaceAndCenter={true}
        />
      </Form>
      <StyledLink
        to={"/login"}
        text={"Or click here to log in to your account."}
      />
    </Centerer>
  );
};

export default Signup;

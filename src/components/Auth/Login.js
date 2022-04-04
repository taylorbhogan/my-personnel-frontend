import React, { useState } from "react";
import Input from "../AppUtils/Input";
import Button from "../AppUtils/Button";
import Form from "../AppUtils/Form";
import StyledLink from "../AppUtils/StyledLink";
import Centerer from "../AppUtils/Centerer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Centerer width={"basis-1/3"} fullScreen={true} innerOptions={"pb-8 border-4 border-sky-500 rounded-lg"}>
      <Form padding={"px-16 pt-16 pb-2"} border={false}>
        <h1 className="text-3xl mb-6">Welcome Back</h1>
        <Input
          value={email}
          name={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <Input
          value={password}
          name={"Password"}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
        <Button
          text={"Log In"}
          options={"w-1/2"}
          type={"submit"}
          spaceAndCenter={true}
        />
      </Form>
      <StyledLink
        to={"/signup"}
        text={"Or click here to sign up for an account."}
      />
    </Centerer>
  );
};

export default Login;

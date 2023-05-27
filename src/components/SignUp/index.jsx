import React, { useState } from "react";
import { message } from "antd";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import { Content } from "./style";
export const SignUp = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [body, setBody] = useState({});
  const onChange = ({ target: { value, placeholder } }) => {
    setBody({ ...body, [placeholder]: value });
  };
  const onSubmit = () => {
    fetch(`http://localhost:8081/api/public/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      res.ok
        ? messageApi.open({
            type: "success",
            content: "Account created",
          })
        : messageApi.open({
            type: "warning",
            content: "Something went wrong!",
          });
    });
  };
  return (
    <Content>
      {contextHolder}
      <h3 className="subTitle">Sign up</h3>
      <Input type="text" onChange={onChange} placeholder="email" />
      <Input type="text" onChange={onChange} placeholder="firstname" />
      <Input type="text" onChange={onChange} placeholder="lastname" />
      <Input type="text" onChange={onChange} placeholder="password" />
      <Button width={"100%"} onClick={onSubmit}>
        Register
      </Button>
    </Content>
  );
};

export default SignUp;

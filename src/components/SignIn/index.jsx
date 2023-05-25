import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content } from "./style";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

export const SignIn = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [body, setBody] = useState({});
  const navigate = useNavigate();
  const request = useRequest();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({ ...body, [placeholder]: value });
  };

  const onSubmit = () => {
    request({
      method: "POST",
      me: true,
      body,
    }).then((res) => {
      if (res.authenticationToken) {
        messageApi.open({
          type: "success",
          content: "Logged in",
        });
        localStorage.setItem("token", res.authenticationToken);
        setTimeout(() => navigate("/home"), 500);
      } else {
        messageApi.open({
          type: "error",
          content: "Password or email is incorrect!",
        });
      }
    });
  };
  return (
    <Container>
      {contextHolder}
      <Content>
        <h3 className="subTitle">Sign in</h3>
        <Input type="text" onChange={onChange} placeholder="email" />
        <Input type="text" onChange={onChange} placeholder="password" />
        <Button width={"100%"} onClick={onSubmit}>
          Login
        </Button>
      </Content>
    </Container>
  );
};

export default SignIn;

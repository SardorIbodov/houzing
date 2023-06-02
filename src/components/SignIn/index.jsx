import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import { Content } from "./style";
export const SignIn = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [body, setBody] = useState({});
  const navigate = useNavigate();
  const onChange = ({ target: { value, placeholder } }) => {
    setBody({ ...body, [placeholder]: value });
  };
  const onSubmit = () => {
    fetch(`https://sardoribodov.jprq.live/api/public/auth/login`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.authenticationToken) {
          messageApi.open({
            type: "success",
            content: "Logged in",
          });
          localStorage.setItem("token", res.authenticationToken);
          setTimeout(() => {
            navigate("/home");
            window.location.reload();
          }, 500);
        } else {
          messageApi.open({
            type: "error",
            content: "Password or email is incorrect!",
          });
        }
      })
      .catch((res) => console.log("Something went wrong from backend!!!"));
  };
  return (
    <Content>
      {contextHolder}
      <h3 className="subTitle">Sign in</h3>
      <Input type="text" onChange={onChange} placeholder="email" />
      <Input type="text" onChange={onChange} placeholder="password" />
      <Button width={"100%"} onClick={onSubmit}>
        Login
      </Button>
    </Content>
  );
};

export default SignIn;

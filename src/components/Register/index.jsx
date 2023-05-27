import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { message, Tabs } from "antd";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
export const Register = () => {
  // const [messageApi, contextHolder] = message.useMessage();
  // const [body, setBody] = useState({});
  // const navigate = useNavigate();

  // const onChange = ({ target: { value, placeholder } }) => {
  //   setBody({ ...body, [placeholder]: value });
  // };

  // const onSubmit = () => {
  //   fetch(`http://localhost:8081/api/public/auth/login`, {
  //     method: "POST",
  //     body: JSON.stringify(body),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.authenticationToken) {
  //         messageApi.open({
  //           type: "success",
  //           content: "Logged in",
  //         });
  //         localStorage.setItem("token", res.authenticationToken);
  //         setTimeout(() => {
  //           navigate("/home");
  //           window.location.reload();
  //         }, 500);
  //       } else {
  //         messageApi.open({
  //           type: "error",
  //           content: "Password or email is incorrect!",
  //         });
  //       }
  //     });
  // };

  const items = [
    {
      key: "1",
      label: `Sign in`,
      children: <SignIn />,
    },
    {
      key: "2",
      label: `Sign up`,
      children: <SignUp />,
    },
  ];
  return (
    <Container>
      <Tabs
        defaultActiveKey="1"
        items={items}
        style={{ maxWidth: "580px", width: "100%" }}
      />
    </Container>
  );
};

export default Register;

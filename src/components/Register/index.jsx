import { Container } from "./style";
import { Tabs } from "antd";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
export const Register = () => {
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

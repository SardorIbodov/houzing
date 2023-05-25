import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Section,
  Logo,
  Link,
  Main,
  Profile,
} from "./style";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic";
import Filter from "../Filter";
import Footer from "../Footer";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <Container>
      <Main>
        <Wrapper>
          <Section logo="true" onClick={() => navigate("/home")}>
            <Logo />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link to={path} key={index}>
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            {token ? (
              <Profile />
            ) : (
              <Button type="dark" onClick={() => navigate("/signin")}>
                Sign in
              </Button>
            )}
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;

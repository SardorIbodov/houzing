import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Section, Logo, Link, Main } from "./style";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic";
import Filter from "../Filter";

export const Navbar = () => {
  const navigate = useNavigate();

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
            <Button type="dark" onClick={() => navigate("/signin")}>
              Sign in
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
    </Container>
  );
};

export default Navbar;

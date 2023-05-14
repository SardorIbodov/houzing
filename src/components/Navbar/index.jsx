import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Section, Logo, Link, Main } from "./style";
import { navbar } from "../../utils/navbar";

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
            {navbar.map(({ title, path }, index) => {
              return (
                <Link to={path} key={index}>
                  {title}
                </Link>
              );
            })}
          </Section>
          <Section>
            <button>Sign in</button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Navbar;

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
import { Dropdown } from "antd";
import Filter from "../Filter";
import Footer from "../Footer";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const onClick = () => {
    navigate("/signin");
  };
  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("token");
      navigate("/home");
      window.location.reload();
    } else {
      navigate(`/${name}`);
    }
  };
  const items = [
    {
      key: 1,
      label: (
        <div data-name="myprofile" onClick={onClickProfile}>
          My Profile
        </div>
      ),
    },
    {
      key: 2,
      label: (
        <div data-name="favourites" onClick={onClickProfile}>
          Favourites
        </div>
      ),
    },
    {
      key: 3,
      label: (
        <div data-name="logout" onClick={onClickProfile}>
          Log out
        </div>
      ),
    },
  ];
  const menuStyle = {
    width: "171px",
    boxShadow:
      "0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06)",
  };

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
              <Dropdown
                menu={{ items }}
                dropdownRender={(menu) =>
                  React.cloneElement(menu, { style: menuStyle })
                }
                trigger={["click"]}
                placement="topRight"
              >
                <Profile />
              </Dropdown>
            ) : (
              <Button type="dark" onClick={onClick}>
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

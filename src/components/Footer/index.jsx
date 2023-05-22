import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Wrapper,
  Content,
  Icons,
  Socials,
  Diveder,
  Bottom,
  Section,
  Logo,
  Copyright,
} from "./style";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Content>
          <Content.Item>
            <Content.Title>Contact Us</Content.Title>
            <Content.Elem>
              <div>
                <Icons.Pin />
              </div>
              <Content.Text>
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </Content.Text>
            </Content.Elem>
            <Content.Elem>
              <div>
                <Icons.Phone />
              </div>
              <Content.Text>123 456 7890</Content.Text>
            </Content.Elem>
            <Content.Elem>
              <div>
                <Icons.Email />
              </div>
              <Content.Text>support@houzing.com</Content.Text>
            </Content.Elem>
            <Socials>
              <Icons.Facebook />
              <Icons.Twitter />
              <Icons.Instagram />
              <Icons.Linkedin />
            </Socials>
          </Content.Item>
          <Content.Item>
            <Content.Title>Discover</Content.Title>
            <Content.Elem>
              <Content.Text>Chicago</Content.Text>
            </Content.Elem>
            <Content.Elem>
              <Content.Text>Los Angeles</Content.Text>
            </Content.Elem>
            <Content.Elem>
              <Content.Text>Miami</Content.Text>
            </Content.Elem>
            <Content.Elem>
              <Content.Text>New York</Content.Text>
            </Content.Elem>
          </Content.Item>
          <Content.Item>
            <Content.Title>Lists by Category</Content.Title>
            <Content.Elem>
              <Content.Text>Apartments</Content.Text>
            </Content.Elem>
            <Content.Elem>
              <Content.Text>Condos</Content.Text>
            </Content.Elem>
            <Content.Elem>
              <Content.Text>Houses</Content.Text>
            </Content.Elem>
            <Content.Elem>
              <Content.Text>Offices</Content.Text>
            </Content.Elem>
            <Content.Elem>
              <Content.Text>Retail</Content.Text>
            </Content.Elem>
            <Content.Elem>
              <Content.Text>Villas</Content.Text>
            </Content.Elem>
          </Content.Item>
          <Content.Item>
            <Content.Title>Lists by Category</Content.Title>
            <Content.Elem>
              <Content.Text>About Us</Content.Text>
            </Content.Elem>
            <Content.Elem>
              <Content.Text>Terms & Conditions</Content.Text>
            </Content.Elem>
            <Content.Elem>
              <Content.Text>Support Center</Content.Text>
            </Content.Elem>
            <Content.Elem>
              <Content.Text>Contact Us</Content.Text>
            </Content.Elem>
          </Content.Item>
        </Content>
        <Diveder />
        <Bottom>
          <Section logo="true" onClick={() => navigate("/home")}>
            <Logo />
            <h3>Houzing</h3>
          </Section>
          <Copyright>
            Copyright © 2021 CreativeLayers. All Right Reserved.
          </Copyright>
        </Bottom>
      </Container>
    </Wrapper>
  );
};

export default Footer;

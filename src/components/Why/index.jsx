import React from "react";
import { Container, Header, Wrapper, Content, Icons } from "./style";

export const Why = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <h3 className="title">Why Choose Us?</h3>
          <h4 className="info">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </h4>
        </Header>
        <Content>
          <Content.Item>
            <Icons.Discord />
            <h4 className="subTitle">Trusted By Thousands</h4>
            <p className="info">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
          </Content.Item>
          <Content.Item>
            <Icons.House />
            <h4 className="subTitle">Trusted By Thousands</h4>
            <p className="info">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
          </Content.Item>
          <Content.Item>
            <Icons.Calculator />
            <h4 className="subTitle">Trusted By Thousands</h4>
            <p className="info">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
          </Content.Item>
          <Content.Item>
            <Icons.Maps />
            <h4 className="subTitle">Trusted By Thousands</h4>
            <p className="info">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
          </Content.Item>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Why;

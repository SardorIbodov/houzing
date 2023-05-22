import React from "react";
import { Container, Img, Blur, Content } from "./style";
import house1 from "../../assets/imgs/house1.png";
import Button from "../Generic/Button";

export const Banner = () => {
  return (
    <Container>
      <Img src={house1} />
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Content.Title>
        <Button>Read more</Button>
      </Content>
    </Container>
  );
};

export default Banner;

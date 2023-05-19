import React, { useRef } from "react";
import { Carousel } from "antd";
import { Arrow, Container, Img, Blur, Content } from "./style";
import house1 from "../../assets/imgs/house1.png";
import house2 from "../../assets/imgs/house2.png";

export const GenCarousel = () => {
  const sliderRef = useRef();

  const onMove = ({ target }) => {
    if (target.getAttribute("name") === "next") sliderRef.current.next();
    if (target.getAttribute("name") === "prev") sliderRef.current.prev();
  };
  return (
    <Container>
      <Carousel ref={sliderRef}>
        <Img src={house1} />
        <Img src={house2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.SubTitle>
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.SubTitle>
        <Content.Price>5250$ / month</Content.Price>
      </Content>
      <Arrow onClick={onMove} name="prev" />
      <Arrow onClick={onMove} next="true" name="next" />
    </Container>
  );
};

export default GenCarousel;

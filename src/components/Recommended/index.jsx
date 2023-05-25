import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import HouseCard from "../HouseCard";
import { Container, Content } from "./style";
import useRequest from "../../hooks/useRequest";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 2.75,
  speed: 500,
  dots: true,
};
export const Recommended = () => {
  const navigate = useNavigate();
  const request = useRequest();
  const [data, setData] = useState([]);
  useEffect(() => {
    request({
      url: "/houses/list",
    }).then((res) => {
      setData(res?.data || []);
    });
  }, [request]);

  return (
    <Container>
      <Content>
        <h3 className="title">Recommended</h3>
        <h4 className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </h4>
      </Content>
      <Slider {...settings}>
        {data.map((card) => {
          return (
            <HouseCard
              onClick={() => navigate(`/properties/${card.id}`)}
              data={card}
              key={card.id}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recommended;
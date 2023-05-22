import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import HouseCard from "../HouseCard";
import { Container, Content } from "./style";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 2.75,
  speed: 500,
  dots: true,
};
export const Recent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  return (
    <Container>
      <Content>
        <h3 className="title">Recent Properties for Rent</h3>
        <h4 className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </h4>
      </Content>
      <Slider {...settings}>
        {data.map((card) => {
          return (
            <HouseCard
              onClick={() => navigate(`/properties?category_id=${card.id}`)}
              data={card}
              key={card.id}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recent;

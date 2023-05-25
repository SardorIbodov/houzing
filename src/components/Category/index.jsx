import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import CarouselCard from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3.5,
  speed: 500,
  dots: true,
};
export const Category = () => {
  const navigate = useNavigate();
  const request = useRequest();
  const [data, setData] = useState([]);
  useEffect(() => {
    request({
      url: "/categories/list",
      token: localStorage.getItem("token"),
    }).then((res) => setData(res.data));
  }, [request]);
  return (
    <Container>
      <Content>
        <h3 className="title">Category</h3>
        <h4 className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </h4>
      </Content>
      <Slider {...settings}>
        {data?.map((card) => {
          return (
            <CarouselCard
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

export default Category;

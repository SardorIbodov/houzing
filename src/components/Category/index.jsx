import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import CarouselCard from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3.5,
  speed: 500,
  dots: true,
};

const token = localStorage.getItem("token");
export const Category = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    token &&
      fetch(`${REACT_APP_BASE_URL}/categories/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setData(res?.data || []))
        .catch((res) => {
          console.log("Something went wrong from backend");
        });
  }, []);
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

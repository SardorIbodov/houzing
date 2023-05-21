import React, { useState, useEffect } from "react";
import { Container } from "./style";
import CarouselCard from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3,
  speed: 500,
  dots: true,
};
export const Category = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/categories/list`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);
  return (
    <Container>
      <Slider {...settings}>
        {data.map((card) => {
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

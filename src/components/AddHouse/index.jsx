
import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";

import { Container, MenuWrapper, Section, Group, DeleteIcon } from "./style";
import { Input, Button } from "../Generic";
import { Checkbox, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";

export const AddHouse = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { REACT_APP_BASE_URL } = process.env;
  const { id } = useParams();
  const addImgRef = useRef();

  const [imgs, setImgs] = useState([]);
  const [img, setImg] = useState("");
  const [initial, setInitial] = useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
    status: true,
    categoryId: Math.floor(Math.random() * 4) + 1,
  });

  useEffect(() => {
    id &&
      fetch(`${REACT_APP_BASE_URL}/houses/id/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((res) => {
          setImgs(res?.data.attachments);
          setInitial({ ...res?.data });
        })
        .catch((res) => {
          console.log("Something went wrong from backend");
        });
  }, []);

  const addImg = () => {
    if (imgs.length < 5 && img) {
      setImgs([...imgs, { imgPath: img }]);
      setImg("");
    } else {
      messageApi.open({
        type: "warning",
        content: "Only 5 images you can upload!",
      });
    }
    addImgRef.current.value = "";
  };

  let url = id
    ? `${REACT_APP_BASE_URL}/houses/${id}`
    : `${REACT_APP_BASE_URL}/houses`;

  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,
    onSubmit: (values) => {
      fetch(url, {
        method: id ? "PUT" : "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          attachments: imgs,
        }),
      })
        .then((res) => {
          if (res.ok) {
            navigate("/myprofile");
          } else
            messageApi.open({
              type: "warning",
              content: "Opps, something went wrong! Try again",
            });
        })
        .catch((res) => {
          console.log("Something went wrong from backend");
        });
    },
  });

  return (
    <Container>
      {contextHolder}
      <form onSubmit={formik.handleSubmit}>
        <MenuWrapper>
          <h3 className="subTitle">Address</h3>
          <Section>
            <Input
              value={formik.values.country}
              name="country"
              onChange={formik.handleChange}
              placeholder={"Country"}
            />
            <Input
              value={formik.values.region}
              name="region"
              onChange={formik.handleChange}
              placeholder={"Region"}
            />
            <Input
              value={formik.values.city}
              name="city"
              onChange={formik.handleChange}
              placeholder={"City"}
            />
            <Input
              value={formik.values.address}
              name="address"
              onChange={formik.handleChange}
              placeholder={"Address"}
            />
          </Section>
          <h3 className="subTitle">Apartment info</h3>
          <Section>
            <Input
              value={formik.values.houseDetails.room}
              type="number"
              name="houseDetails.room"
              onChange={formik.handleChange}
              placeholder={"Rooms"}
            />
            <Input
              value={formik.values.houseDetails.area}
              type="number"
              name="houseDetails.area"
              onChange={formik.handleChange}
              placeholder={"Area"}
            />
            <Input
              value={formik.values.houseDetails.bath}
              type="number"
              name="houseDetails.bath"
              onChange={formik.handleChange}
              placeholder={"Bath"}
            />
            <Input
              value={formik.values.houseDetails.beds}
              type="number"
              name="houseDetails.beds"
              onChange={formik.handleChange}
              placeholder={"Beds"}
            />
            <Input
              value={formik.values.houseDetails.garage}
              type="number"
              name="houseDetails.garage"
              onChange={formik.handleChange}
              placeholder={"Garage"}
            />
            <Input
              value={formik.values.houseDetails.yearBuilt}
              type="number"
              name="houseDetails.yearBuilt"
              onChange={formik.handleChange}
              placeholder={"Year built"}
            />
          </Section>
          <h3 className="subTitle">Price</h3>
          <Section>
            <Input
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              placeholder={"Name"}
            />
            <Input
              value={formik.values.zipCode}
              name="zipCode"
              onChange={formik.handleChange}
              placeholder={"Zip code"}
            />
            <Input
              type="number"
              value={formik.values.price}
              name="price"
              onChange={formik.handleChange}
              placeholder={"Price"}
            />
            <Input
              type="number"
              value={formik.values.salePrice}
              name="salePrice"
              onChange={formik.handleChange}
              placeholder={"Sale price"}
            />
          </Section>
          <Section>
            <Input
              ref={addImgRef}
              onChange={({ target: { value } }) => {
                setImg(value);
              }}
              placeholder="Image URL"
            />
            <div
              onClick={addImg}
              style={{
                marginLeft: "5px",
                width: "160px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: " #0061df",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add image URL
            </div>
          </Section>
          <div style={{ margin: "10px 0" }}>
            {imgs.map((img) => (
              <>
                <span>{img.imgPath}</span>
                <DeleteIcon
                  onClick={() => {
                    let res = imgs.filter((v) => v.imgPath !== img.imgPath);
                    setImgs(res);
                  }}
                />
              </>
            ))}
          </div>
          <Section>
            <textarea
              value={formik.values.description}
              onChange={formik.handleChange}
              name="description"
              placeholder="Write about your house"
              rows="10"
              style={{ width: "100%", padding: "10px", resize: "none" }}
            ></textarea>
          </Section>
          <h3 className="subtitle">Additional</h3>
          <Section>
            <Group>
              <Checkbox
                checked={formik.values.homeAmenitiesDto?.busStop}
                onChange={formik.handleChange}
                name="homeAmenitiesDto.busStop"
              >
                Bus stop
              </Checkbox>
              <Checkbox
                checked={formik.values.homeAmenitiesDto?.garden}
                onChange={formik.handleChange}
                name="homeAmenitiesDto.garden"
              >
                Garden
              </Checkbox>
              <Checkbox
                checked={formik.values.homeAmenitiesDto?.market}
                onChange={formik.handleChange}
                name="homeAmenitiesDto.market"
              >
                Market
              </Checkbox>
              <Checkbox
                checked={formik.values.homeAmenitiesDto?.park}
                onChange={formik.handleChange}
                name="homeAmenitiesDto.park"
              >
                Park
              </Checkbox>
              <Checkbox
                checked={formik.values.homeAmenitiesDto?.parking}
                onChange={formik.handleChange}
                name="homeAmenitiesDto.parking"
              >
                Parking
              </Checkbox>
            </Group>
            <Group>
              <Checkbox
                checked={formik.values.homeAmenitiesDto?.school}
                onChange={formik.handleChange}
                name="homeAmenitiesDto.school"
              >
                School
              </Checkbox>
              <Checkbox
                checked={formik.values.homeAmenitiesDto?.stadium}
                onChange={formik.handleChange}
                name="homeAmenitiesDto.stadium"
              >
                Stadium
              </Checkbox>
              <Checkbox
                checked={formik.values.homeAmenitiesDto?.subway}
                onChange={formik.handleChange}
                name="homeAmenitiesDto.subway"
              >
                Subway
              </Checkbox>
              <Checkbox
                checked={formik.values.homeAmenitiesDto?.superMarket}
                onChange={formik.handleChange}
                name="homeAmenitiesDto.superMarket"
              >
                Supermarket
              </Checkbox>
              <Checkbox
                checked={formik.values.componentsDto?.airCondition}
                onChange={formik.handleChange}
                name="componentsDto.airCondition"
              >
                Air condition
              </Checkbox>
            </Group>
            <Group>
              <Checkbox
                checked={formik.values.componentsDto?.courtyard}
                onChange={formik.handleChange}
                name="componentsDto.courtyard"
              >
                Courtyard
              </Checkbox>
              <Checkbox
                checked={formik.values.componentsDto?.furniture}
                onChange={formik.handleChange}
                name="componentsDto.furniture"
              >
                Furniture
              </Checkbox>
              <Checkbox
                checked={formik.values.componentsDto?.gasStove}
                onChange={formik.handleChange}
                name="componentsDto.gasStove"
              >
                Gas stove
              </Checkbox>
              <Checkbox
                checked={formik.values.componentsDto?.internet}
                onChange={formik.handleChange}
                name="componentsDto.internet"
              >
                Internet
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                checked={formik.values.componentsDto?.tv}
                name="componentsDto.tv"
              >
                Tv
              </Checkbox>
            </Group>
          </Section>
          <Button>{id ? "Save" : "Update"}</Button>
        </MenuWrapper>
      </form>
    </Container>
  );
};

export default AddHouse;

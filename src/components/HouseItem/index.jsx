import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Input } from "../Generic";
import YandexMaps from "../Generic/Yandex Maps";
import Recent from "../Recent";
import { Checkbox } from "antd";
import {
  Container,
  Content,
  Section,
  Icons,
  Details,
  Description,
  Wrapper,
  User,
  Maps,
} from "./style";
import noUser from "../../assets/imgs/no-user.png";
const { REACT_APP_BASE_URL } = process.env;

export const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`${REACT_APP_BASE_URL}/houses/id/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        setData(res?.data || {});
      });
  }, [params.id]);
  return (
    <>
      <Wrapper>
        <Container flex={3}>
          <Content>
            <Section column={"true"}>
              <div className="title">{data?.name}</div>
              <div className="info">
                {data?.city}, {data?.address}, {data?.country}
              </div>
            </Section>
            <Section>
              <Icons.Share />
              <Icons.Title>Share</Icons.Title>
              <Icons.Heart />
              <Icons.Title>Save</Icons.Title>
            </Section>
          </Content>
          <Content>
            <Details>
              <Details.Item row="true">
                <Icons.Bed />
                <div className="info">{data?.houseDetails?.room || 0} Room</div>
              </Details.Item>
              <Details.Item row="true">
                <Icons.Bath />
                <div className="info">{data?.houseDetails?.bath || 0} Bath</div>
              </Details.Item>
              <Details.Item row="true">
                <Icons.Garage />
                <div className="info">
                  {data?.houseDetails?.garage || 0} Garage
                </div>
              </Details.Item>
              <Details.Item row="true">
                <Icons.Ruler />
                <div className="info">
                  {data?.houseDetails?.area || 0} Sq Ft
                </div>
              </Details.Item>
              <Details.Item row="true">
                <Icons.Calendar />
                <div className="info">
                  {data?.houseDetails?.yearBuilt || 0} Year
                </div>
              </Details.Item>
            </Details>
            <Details.Item footer="true">
              <Details.Item row="true">
                <div
                  className="info"
                  style={{ textDecoration: "line-through" }}
                >
                  {data?.price}$/mo
                </div>
                <div className="subTitle">{data?.salePrice}$/mo</div>
              </Details.Item>
              <div className="info">{data?.address}</div>
            </Details.Item>
          </Content>
          <Description>
            <div className="subTitle">Description</div>
            <div className="info">{data?.description}</div>
          </Description>
          <Maps>
            <div className="subTitle">Location</div>
            <YandexMaps location={data.location} />
          </Maps>
        </Container>
        <Container className="user" flex={1}>
          <User>
            <User.Img src={noUser} alt="user" />
            <div className="user-info">
              <div className="subTitle">Darrel Steward</div>
              <div className="info">(123)456-7890</div>
            </div>
          </User>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"100%"}>Send request</Button>
        </Container>
      </Wrapper>
      <Recent />
    </>
  );
};

export default HouseItem;

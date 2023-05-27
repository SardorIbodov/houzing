import { Container, Content, Details, Icons, Footer, Img } from "./style";
import noImg from "../../assets/imgs/noimg.png";
import { message } from "antd";
import { useContext } from "react";
import { PropertiesContext } from "../../context/Properties";

export const HouseCard = ({ data = {}, onClick }) => {
  const {
    attachments,
    address,
    city,
    country,
    description,
    houseDetails,
    salePrice,
    price,
    category,
    favorite,
    id,
  } = data;
  const [state] = useContext(PropertiesContext);
  const token = localStorage.getItem("token");
  const [messageApi, contextHolder] = message.useMessage();
  const save = (event) => {
    event.stopPropagation();
    token &&
      fetch(
        `http://localhost:8081/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (favorite) {
            res?.success &&
              messageApi.open({
                type: "warning",
                content: "Disliked",
              });
          } else {
            res?.success &&
              messageApi.open({
                type: "success",
                content: "Liked",
              });
          }
          state.refetch && state.refetch();
        });
  };
  return (
    <Container onClick={onClick}>
      {contextHolder}
      <Img src={(attachments && attachments[0].imgPath) || noImg} />
      <Content>
        <div className="subTitle inline">
          {city}, {country}, {description}
        </div>
        <div className="info">
          {address || "Quincy St, Brooklyn, NY, USA"} |{" "}
          {category?.name || "Category"}
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{houseDetails?.room || 0} Room</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{houseDetails?.bath || 0} Bath</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">{houseDetails?.garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{houseDetails?.area || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Footer>
        <Details.Item footer="true">
          <div className="info" style={{ textDecoration: "line-through" }}>
            ${price || 0}/mo
          </div>
          <div className="subTitle">${salePrice || 0}/mo</div>
        </Details.Item>
        <Details.Item row="true">
          <Icons.Resize></Icons.Resize>
          {token && (
            <Icons.Heart favorite={favorite} onClick={save}></Icons.Heart>
          )}
        </Details.Item>
      </Footer>
    </Container>
  );
};

export default HouseCard;

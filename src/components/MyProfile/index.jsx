import { Container, Content, Header, Icons, Home } from "./style";
import { useNavigate } from "react-router-dom";
import { Button } from "../Generic";
import { Table, message } from "antd";
import noimage from "../../assets/imgs/noimg.png";
import { useQuery } from "react-query";
const { REACT_APP_BASE_URL } = process.env;

export const MyProfile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { data, refetch } = useQuery([], async () => {
    return fetch(`${REACT_APP_BASE_URL}/houses/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .catch((res) => {
        console.log("Something went wrong from backend");
      });
  });

  const [messageApi, contextHolder] = message.useMessage();

  const onDelete = (id) => {
    fetch(`${REACT_APP_BASE_URL}/houses/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res?.ok) {
          messageApi.open({
            type: "success",
            content: "Successfully deleted",
          });
          refetch();
        } else
          messageApi.open({
            type: "error",
            content: "Something went wrong",
          });
      })
      .catch((res) => {
        console.log("Something went wrong from backend");
      });
  };

  const columns = [
    {
      title: "Listing title",
      key: "name",
      render: (data) => {
        return (
          <Home>
            <Home.Img src={data.attachments[0]?.imgPath || noimage} />
            <Home.Details>
              <div className="subTitle">{data?.name || "no name"}</div>
              <div className="info">
                {data?.address || "no address"}, {data?.city || "no city"},{" "}
                {data?.country || "no city"}
              </div>
              <div className="info">
                <del>{data?.price || "no price"}$</del>
              </div>
              <div className="subTitle">
                {data?.salePrice || "no sale price"}$
              </div>
            </Home.Details>
          </Home>
        );
      },
    },
    {
      title: "Year Build",
      dataIndex: "houseDetails",
      key: "houseDetails",
      render: (_, { houseDetails }) => {
        return <span>{houseDetails?.yearBuilt}</span>;
      },
    },
    {
      title: "Room",
      key: "price",
      render: (data) => {
        return <span>{data?.houseDetails?.room}</span>;
      },
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      width: 120,
      title: "Action",
      key: "action",
      render: (data) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "22px",
            }}
          >
            <Icons.Edit
              onClick={(event) => {
                event.stopPropagation();
                navigate(`/myprofile/edithouse/${data?.id}`);
              }}
            />
            <Icons.Delete
              onClick={(event) => {
                event.stopPropagation();
                onDelete(data?.id);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {contextHolder}
      <Header>
        <div className="title">My properties</div>
        <Button onClick={() => navigate("/myprofile/newhouse")}>
          Add new house
        </Button>
      </Header>
      <Content>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                navigate(`/properties/${record.id}`);
              },
            };
          }}
          columns={columns}
          dataSource={data?.data}
        />
      </Content>
    </Container>
  );
};

export default MyProfile;

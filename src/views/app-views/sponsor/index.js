import React, { useState, useEffect } from "react";
import { Table, Divider, Skeleton, Button, Tooltip, message, } from "antd";
import { PlusCircleOutlined,DollarCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { DELETE_SPONSOR, GET_ALL_SPONSOR } from "configs/Endpoints";
import { IMAGE_BASE_URL } from "configs/AppConfig";

const Sponsor = () => {
  const columns = [
    {
      title: "Avatar",
      dataIndex: "picture",
      key: "picture",
      render: (text) => (
        <img
          style={{
            objectFit: "cover",
            width: 50,
            height: 50,
            borderRadius: 100,
          }}
          src={`${IMAGE_BASE_URL + text}`}
        />
      ),
    },

    {
      title: "Sponsor ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Sponsor Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="/#">{text}</a>,
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link
            to={{
              pathname: "sponsor/edit/" + record.id,
              dataProps: { sponsordetails: record },
            }}
          >
            Edit
          </Link>
          <Divider type="vertical" />
          <Link
            onClick={() => {
              deleteSponsor(record.id);
            }}
          >
            Delete
          </Link>
        </span>
      ),
    },
  ];
  const [sponsorList, setSponsorList] = useState([]);
  const [loading, setloading] = useState(false);

  const deleteSponsor = (id) => {
    setloading(true);

    service
      .delete(DELETE_SPONSOR + id, {})
      .then((res) => {
        console.log(res);
        if (res.message == "sponsor was deleted successfully!") {
          message.success("Successfully Deleted :) ");
        } else {
          message.error("Failed to delete ");
        }
        //alert(response);
        fetchData();
        setloading(false);
      })
      .catch((e) => {
        setloading(false);

        message.error(
          "Unable to load  ! Please check your internet or Server "
        );
      });
  };
  const fetchData = () => {
    setloading(true);

    service.get(GET_ALL_SPONSOR).then((response) => {
      setloading(false);
      console.log(response);
      setSponsorList(response);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading)
    return (
      <div
        style={{
          minHeight: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Skeleton active paragraph={{ rows: 10 }} />
      </div>
    );
  return (
    <div>
      <br></br>

      <span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <DollarCircleOutlined style={{ fontSize: 85, color: "#1a3353" }}> </DollarCircleOutlined>{" "}
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <h1 style={{ fontFamily: "fantasy", fontSize: 60 }}> SPONSORS </h1>
      </span>
      <br></br>

      <Tooltip title="Add Sponsor">
        <Link to="sponsor/add">
          <Button
            type="primary"
            icon={<PlusCircleOutlined style={{ fontSize: "18px" }} />}
          >
            Add Sponsor
          </Button>
        </Link>
      </Tooltip>
      <br></br>
      <br></br>
      <Table columns={columns} dataSource={sponsorList} />
    </div>
  );
};

export default Sponsor;

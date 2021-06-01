import React, { useState, useEffect } from "react";
import { Table, Divider, Skeleton, Button, Tooltip, message } from "antd";
import { PlusCircleOutlined,ProfileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { DELETE_FEED, GET_ALL_FEED } from "configs/Endpoints";
import { IMAGE_BASE_URL } from "configs/AppConfig";

const Feed = () => {
  const columns = [
    {
      title: "Avatar",
      dataIndex: "picture",
      key: "picture",
      render: (text) => <img style={{objectFit:'cover', width:50, height:50,borderRadius:100 }}src={`${IMAGE_BASE_URL+text}`}/>,
    },


    {
      title: "Feed ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Title",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "Feed Description ",
      dataIndex: "description",
      key: "description",
      render: (text) => {
        console.log(text.length)
        if (text.length < 40) {
          return <a href="/#">{text}</a>;
        }else{
          return <a href="/#">{text.slice(0,45)+"..."}</a>;
        }
      },
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link
            to={{
              pathname: "feed/edit/" + record.id,
              dataProps: { feeddetails: record },
            }}
          >
            Edit
          </Link>
          <Divider type="vertical" />
          <Link
            onClick={() => {
              deleteFeed(record.id);
            }}
          >
            Delete
          </Link>
        </span>
      ),
    },
  ];
  const [feedList, setFeedList] = useState([]);
  const [loading, setloading] = useState(false);

  const deleteFeed = (id) => {
    setloading(true);

    service
      .delete(DELETE_FEED + id, {})
      .then((res) => {
        if (res.message == "Feed was deleted successfully!") {
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

    service
      .get(GET_ALL_FEED, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then((response) => {
        setloading(false);
        console.log(response);
        setFeedList(response);
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

<span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ProfileOutlined style={{ fontSize: 80,color:"#1a3353" }}> </ProfileOutlined>{" "}
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <h1 style={{ fontFamily: "fantasy", fontSize: 60 }}> NEW FEED </h1>
      </span>
      <br></br>

      <Tooltip title="Add Feed">
        <Link to="feed/add">
          <Button
            type="primary"
            icon={<PlusCircleOutlined style={{ fontSize: "18px" }} />}
          >
            Add Feed
          </Button>
        </Link>
      </Tooltip>
      <br></br>
      <br></br>
      <Table columns={columns} dataSource={feedList} />
    </div>
  );
};

export default Feed;

import React, { useState, useEffect } from "react";
import { Table, Divider, Skeleton, Button, Tooltip, message } from "antd";
import { PlusCircleOutlined,UnorderedListOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { DELETE_CATEGORY,GET_ALL_CATEGORIES, GET_ALL_LEVEL,DELETE_LEVEL, } from "configs/Endpoints";

const Level = () => {
  const columns = [
    {
      title: "Level ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Level Title",
      dataIndex: "title",
      key: "name",
      render: (text) => <a href="/#">{text}</a>,
    },

    {
      title: "Level XP",
      dataIndex: "minxp",
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
              pathname: "level/edit/" + record.id,
              dataProps: { leveldetails: record },
            }}
          >
            Edit
          </Link>
          <Divider type="vertical" />
          <Link
            onClick={() => {
              deleteLevel(record.id);
            }}
          >
            Delete
          </Link>
        </span>
      ),
    },
  ];
  const [levelList, setLevelList] = useState([]);
  const [loading, setloading] = useState(false);

  const deleteLevel = (id) => {
    setloading(true);

   service.delete( DELETE_LEVEL + id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
 
          console.log(res)
          if (res.message == "Level was deleted successfully!") {
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

    service.get(GET_ALL_LEVEL, {
 
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res)  => {
        setloading(false)
        console.log(res)
        setLevelList(res);
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
        <UnorderedListOutlined style={{ fontSize: 70,color:"#1a3353" }}> </UnorderedListOutlined>{" "}
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <h1 style={{ fontFamily: "fantasy", fontSize: 50 }}> LEVELS </h1>
      </span>
      <br></br>

      <Tooltip title="Add Level">
        <Link to="level/add">
          <Button
            type="primary"
            icon={<PlusCircleOutlined style={{ fontSize: "18px" }} />}
          >
            Add Level
          </Button>
        </Link>
      </Tooltip>
      <br></br>
      <br></br>
      <Table columns={columns} dataSource={levelList} />
    </div>
  );
};

export default Level;

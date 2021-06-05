import React, { useState, useEffect } from "react";
import { Table, Divider, Skeleton, Button, Tooltip, message } from "antd";
import { PlusCircleOutlined, BankFilled,UsergroupAddOutlined  } from "@ant-design/icons";
import { Link } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { GET_ALL_CHARITIES, DELETE_CHARITY } from "configs/Endpoints";
import { IMAGE_BASE_URL } from "configs/AppConfig";

const Employee = () => {
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
      title: "Employee ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "Employee Description ",
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
              pathname: "employee/edit/" + record.id,
              dataProps: { charitydetails: record },
            }}
          >
            Edit
          </Link>
          <Divider type="vertical" />
          <Link
            onClick={() => {
              deleteCharity(record.id);
            }}
          >
            Delete
          </Link>
        </span>
      ),
    },
  ];
  const [charityList, setCharityList] = useState([]);
  const [loading, setloading] = useState(false);

  const deleteCharity = (id) => {
    setloading(true);

    service
      .delete(DELETE_CHARITY + id, {})
      .then((res) => {
        if (res.message == "Employee was deleted successfully!") {
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

    service.get(GET_ALL_CHARITIES, {}).then((response) => {
      setloading(false);
      console.log(response);
      setCharityList(response);
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
        <UsergroupAddOutlined style={{ fontSize: 90, color: "#1a3353" }}> </UsergroupAddOutlined >{" "}
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <h1 style={{ fontFamily: "fantasy", fontSize: 60 }}> EMPLOYEES </h1>
      </span>
      <br></br>

      <Tooltip title="Add Employee">
        <Link to="employee/add">
          <Button
            type="primary"
            icon={<PlusCircleOutlined style={{ fontSize: "18px" }} />}
          >
            Add Employee
          </Button>
        </Link>
      </Tooltip>
      <br></br>
      <br></br>
      <Table columns={columns} dataSource={charityList} />
    </div>
  );
};

export default Employee;

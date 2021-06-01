import React, { useState, useEffect } from "react";
import {
  Table,
  Divider,
  Skeleton,
  Button,
  Tooltip,
  message,
  Select,
  Form,
} from "antd";
import {
  PlusCircleOutlined,
  BankFilled,
  InteractionOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import service from "auth/FetchInterceptor";
import {
  GET_ALL_CHARITIES,
  DELETE_CHARITY,
  GET_ALL_ACTIVITY,
  GET_ACTIVITY_BY_ID,
  GET_ALL_CATEGORIES,
  ALL_TYPES,
  ALL_USERS,
} from "configs/Endpoints";
import { IMAGE_BASE_URL } from "configs/AppConfig";
import Moment from "moment";

const Activity = () => {
  const id = 0;

  const columns = [
    {
      title: "Activity ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "User ID",
      dataIndex: "users_id",
      key: "name",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "Activity Details ",
      dataIndex: "description",
      key: "description",
      render: (text) => <a href="/#">{text}</a>,
    },

    {
      title: "Activity Time",
      dataIndex: "createdAt",
      key: "startsOn",
      render: (text) => <a href="/#">{Moment(text).format("LLLL")}</a>,
    },
  ];
  const [activityList, setActivityList] = useState([]);
  const [loading, setloading] = useState(false);

  const [usertList, setUserList] = useState([]);

  // drop down things
  const { Option } = Select;
  function handleChange(value) {
    console.log(value);
    if (value == "all") {
      fetchData();
    } else {
      service.get(GET_ACTIVITY_BY_ID + value).then((response) => {
        setActivityList(response);
      });
    }
    //  console.log(`selected ${value}`);
  }

  // date picker methods
  function onChange(value, dateString) {
    console.log("Formatted Selected Time: ", value.toJSON());
  }

  function onOk(value) {
    console.log("onOk: ", value);
  }

  // get all method
  const fetchusers = () => {
    setloading(true);

    service.get(ALL_USERS).then((response) => {
      setloading(false);
      console.log(response);
      setUserList(response);
    });
  };

  const fetchData = () => {
    setloading(true);
    service.get(GET_ALL_ACTIVITY, {}).then((response) => {
      setloading(false);
      console.log(response);
      setActivityList(response);
    });
  };
  useEffect(() => {
    fetchData();
    fetchusers();
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
        <InteractionOutlined
          style={{ fontSize: 90, color: "#1a3353" }}
        ></InteractionOutlined>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <h1 style={{ fontFamily: "fantasy", fontSize: 60 }}> ACTIVITIES </h1>
      </span>
      <Form.Item label=" See Activity By Name  " name="user_id">
        <Select
          defaultValue="Choose "
          style={{ width: "auto" }}
          onChange={handleChange}
        >
          <Option value={"all"}>All Users</Option>
          {usertList.map((user) => (
            <Option value={user.id}>{user.name}</Option>
          ))}
        </Select>
      </Form.Item>

      <br></br>
      <Table columns={columns} dataSource={activityList} />
    </div>
  );
};

export default Activity;

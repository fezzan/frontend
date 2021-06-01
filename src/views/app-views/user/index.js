import React, { useState, useEffect } from "react";
import {
  Table,
  Divider,
  Skeleton,
  Button,
  Tooltip,
  message,
  Form,
  Input,
  Typography,
  InputNumber,
  Select,
} from "antd";
import { Modal } from "antd";
import { PlusCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import service from "auth/FetchInterceptor";
import {
  ADD_TRANSACTION,
  ALL_TYPES,
  ALL_USERS,
  FIND_CHARITY,
  DONATE,
} from "configs/Endpoints";
import { IMAGE_BASE_URL } from "configs/AppConfig";

const User = () => {
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const layout = {
    labelCol: {
      span: 3,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const columns = [
    {
      title: "User ID",
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
      title: "User Age ",
      dataIndex: "age",
      key: "age",
      render: (text) => <a href="/#">{text}</a>,
    },

    {
      title: "User XP",
      dataIndex: "xp",
      key: "xp",
      render: (text) => <a href="/#">{text}</a>,
    },


    {
      title: "Level",
      dataIndex: "Level",
      key: "level",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "Invited By",
      dataIndex: "Invited By",
      key: "invited",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "User Balance",
      dataIndex: "Amount",
      key: "amount",
      render: (text) => <a href="/#">{text}</a>,
    },


    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Divider type="vertical" />

          <Button type="primary" onClick={() => showModal(record.id)}>
            Add Transaction
          </Button>
          <Divider type="vertical" />

          <Modal
            title="User Transactions"
            visible={visible}
            footer={null}
            onCancel={handleCancel}
          >
            <Form
              {...layout}
              name="AddTickets"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <br></br>
              <Form.Item
                label=" Type : "
                name="type_id"
                rules={[
                  {
                    required: true,
                    message: "Please select a type  !",
                  },
                ]}
              >
                <Select
                  defaultValue="Choose"
                  style={{ width: 150 }}
                  onChange={handleChange}
                >
                  {typelist.map((mytype) => (
                    <Option value={mytype.id}>{mytype.name}</Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="Amount"
                name="amount"
                style={{ width: 650 }}
                rules={[
                  {
                    required: true,
                    message: "Please enter valid amount !",
                  },
                  {
                    validator: (r, value) =>
                      value < 1
                        ? Promise.reject("value low")
                        : Promise.resolve(true),
                    message: "Value should be greate than 1 !",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Add Transaction
                </Button>
              </Form.Item>
            </Form>{" "}
          </Modal>

          {record.Amount > 0 ? (
            <>
              <Button
                type="primary"
                onClick={() => showModal1(record.charity_id, record.id)}
              >
                Donate{" "}
              </Button>
              <Divider type="vertical" />

              <Modal
                title="Donate to Charity"
                visible={visible1}
                footer={null}
                onCancel={handleCancel1}
              >
                <Form
                  {...layout}
                  name="Donate"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish1}
                  onFinishFailed={onFinishFailed}
                >
                  <br></br>
                  <center>
                    <h2>Charity Name : {charity.name}</h2>
                    <br></br>
                    <h2>Charity Details : {charity.description}</h2>
                    <br></br>
                    <img style={{ height: 200, width: 200 }} src={image}></img>
                  </center>
                  <br></br> <br></br> <br></br>
                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                      Donate
                    </Button>
                  </Form.Item>
                </Form>{" "}
              </Modal>
            </>
          ) : (
            <div></div>
          )}
        </span>
      ),
    },
  ];
  const [userList, setUserList] = useState([]);
  const [loading, setloading] = useState(false);
  const [visible, setvisible] = useState(false);
  const [visible1, setvisible1] = useState(false);

  const [typelist, settypelist] = useState([]);
  const [userid, setuserid] = useState();
  const [charity, setcharity] = useState("");

  const [image, setImage] = useState();
  // drop down of type
  const { Option } = Select;
  function handleChange(value) {
    
  }

  // get all method
  const fetchallData = () => {
    setloading(true);
    service.get(ALL_TYPES).then((response) => {
      setloading(false);
      console.log(response);
      settypelist(response);
    });
  };

  const showModal = (id) => {
    setvisible(true);
    setuserid(id);
  };

  const showModal1 = (id, userid) => {
    service.get(FIND_CHARITY + id).then((response) => {
      // console.log(response[0]);
      setvisible1(true);
      setcharity(response[0]);
      setuserid(userid);
      // console.log(userid);
      setImage(IMAGE_BASE_URL + response[0].picture);
    });

    // setcharityid(id);
  };

  const handleCancel = () => {
    setvisible(false);
  };
  const handleCancel1 = () => {
    setvisible1(false);
  };

  const onFinish1 = (values) => {
    setloading(true);
    service
      .post(DONATE + userid, {})
      .then((data) => {
        if (data.success) {
          setvisible1(false);
          message.success("Successfully Done :) ");
          fetchData()
        } else {
          message.error(data.message);
        }
      })

      .catch((e) => {
        message.error(
          "Unable to load  ! Please check your internet or Server "
        );
      })
      .finally(() => {
        setloading(false);
      });
  };

  const onFinish = (values) => {
    setloading(true);
    service
      .post(ADD_TRANSACTION, {
        amount: values.amount,
        users_id: userid,
        type_id: values.type_id,
      })
      .then((data) => {
        if (data.id) {
          setvisible(false);
          message.success("Successfully Done :) ");
        } else {
          message.error(data.message);
        }
      })

      .catch((e) => {
        message.error(
          "Unable to load  ! Please check your internet or Server "
        );
      })
      .finally(() => {
        setloading(false);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const fetchData = () => {
    setloading(true);

    service
      .get(ALL_USERS)

      .then((response) => {
        setloading(false);
        console.log(response);
        setUserList(response);
      });
  };

  // user effect load when page loads and if we put any vairable in array bracket it just runs on every update ...
  useEffect(() => {
    fetchData();
    fetchallData();
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
        <UserOutlined style={{ fontSize: 80, color: "#1a3353" }}>
          {" "}
        </UserOutlined>{" "}
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <h1 style={{ fontFamily: "fantasy", fontSize: 60 }}> USERS </h1>
      </span>

      <br></br>
      <Table columns={columns} dataSource={userList} />
    </div>
  );
};

export default User;

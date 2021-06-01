import React, { Component, useState } from "react";
import { Form, Input, Button, Upload, message, Typography } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { EDIT_CATEGORY } from "configs/Endpoints";
import service from "auth/FetchInterceptor";

const { Title, Paragraph, Text } = Typography;
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 12,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = (props) => {
  const history = useHistory();
  const [loading, setloading] = useState(false);
  const [url, seturl] = useState(
    "https://h7u5d3a4.stackpathcdn.com/assets/hospitals/1448/saylani-welfare-65_450X450.jpg"
  );

  const onFinish = (values) => {
    console.log("Success:", values);

    setloading(true);

    service
      .put(EDIT_CATEGORY + props.location.dataProps.categorydetails.id, values)
      .then((res) => {
        console.log(res.message);
        if (res.message == "Category was updated successfully.") {
          // history.push("/app/category");
          history.goBack();
          message.success("Successfully Done :) ");
        } else {
          message.error("Failed");
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

  return (
    <Form
      {...layout}
      name="EditCategory"
      initialValues={{
        name: props.location.dataProps.categorydetails.name,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Edit Category </Title>
      </Typography>
      <br></br>
      <br></br>

      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input a Category Name !",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;

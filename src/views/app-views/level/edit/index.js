import React, { Component, useState } from "react";
import { Form, Input, Button, Upload, message, Typography,InputNumber } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { EDIT_CATEGORY, EDIT_LEVEL } from "configs/Endpoints";
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

  const onFinish = (values) => {
    console.log("Success:", values);

    setloading(true);

    service
      .put(EDIT_LEVEL + props.location.dataProps.leveldetails.id, values)
      .then((res) => {
        console.log(res.message);
        if (res.message == "Level was updated successfully.") {
          // history.push("/app/level");
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
      name="EditLevel"
      initialValues={{
        title: props.location.dataProps.leveldetails.title,
        minxp: props.location.dataProps.leveldetails.minxp,

      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Edit Level </Title>
      </Typography>
      <br></br>
      <br></br>

      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>

      <Form.Item
        label="  Min XP"
        name="minxp"
        rules={[
          {
            validator: (r, value) =>
              value < 0 ? Promise.reject("value low") : Promise.resolve(true),
            message: "Please Choose Valid Value!",
          },
        ]}
      >
        <InputNumber />
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

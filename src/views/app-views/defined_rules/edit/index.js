import React, { Component, useState } from "react";
import { Form, Input, Button, Upload, message, Typography } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { EDIT_CATEGORY, EDIT_FIXED_RULE } from "configs/Endpoints";
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
      .put(EDIT_FIXED_RULE + props.location.dataProps.ruledetails.id, values)
      .then((res) => {
        console.log(res.message);
        if (res.message == "Rule was updated successfully.") {
          // history.push("/app/rule");
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
      name="EditRule"
      initialValues={{
        description: props.location.dataProps.ruledetails.description,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Edit Rule </Title>
      </Typography>
      <br></br>
      <br></br>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please input a Rule Description   !",
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

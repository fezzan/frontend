import React, { Component, useState } from "react";
import { Form, Input, Button, Upload, message, Typography } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { EDIT_RULE } from "configs/Endpoints";

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
      .put(
        EDIT_RULE + props.location.dataProps.ruledetails.id,

        values
      )
      .then((data) => {
        console.log(data.message);
        if (data.message == "Custom Rule was updated successfully.") {
          // history.push("/app/rules/gameid/" + props.match.params.id);
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

      <Form.Item label="Text" name="description">
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

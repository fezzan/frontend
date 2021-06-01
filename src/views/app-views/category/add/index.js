import React, { Component, useState } from "react";
import { Form, Input, Button, Upload, Typography, message } from "antd";

import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { ADD_CATEGORY } from "configs/Endpoints";

const { Title, Paragraph, Text } = Typography;

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

const Demo = () => {
  const history = useHistory();

  const [loading, setloading] = useState(false);

  const onFinish = (values) => {
    setloading(true);
    //formData.append("picture", file);
    //  console.log(file);
    service.post(ADD_CATEGORY, values)
      .then((res) => {
          if (res.id) {
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
      name="AddCategory"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Add Category</Title>
      </Typography>
      <br></br>
      <br></br>

      <Form.Item
        label=" Name"
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

export class AddCategory extends Component {
  render() {
    return <Demo />;
  }
}

export default AddCategory;

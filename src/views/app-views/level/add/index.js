import React, { Component, useState } from "react";
import { Form, Input, Button, Upload, Typography, message ,InputNumber} from "antd";

import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { ADD_CATEGORY, ADD_LEVEL } from "configs/Endpoints";

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
    service
      .post(ADD_LEVEL, values)
      .then((res) => {
        if (res.id) {
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
      name="AddLevel"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Add Level</Title>
      </Typography>
      <br></br>
      <br></br>

      <Form.Item
        label=" Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input a Level Title !",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="  Min XP"
        name="minxp"
        rules={[
          {
            required: true,
            message: "Please enter minimum XP equired !",
          },
          {
            validator: (r, value) =>
              value < 0? Promise.reject("value low") : Promise.resolve(true),
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

export class AddLevel extends Component {
  render() {
    return <Demo />;
  }
}

export default AddLevel;

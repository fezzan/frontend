import React, { Component, useState, useEffect } from "react";
import { Form, Input, Button, Upload, Typography, message, Select } from "antd";

import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { ADD_RULE } from "configs/Endpoints";

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

const Demo = (props) => {
  const history = useHistory();

  const [loading, setloading] = useState(false);

  useEffect(() => {}, []);

  const onFinish = (values) => {
    setloading(true);
    service
      .post(ADD_RULE, {
        game_id: props.match.params.id,
        description: values.description,
      })
      .then((data) => {
        if (data.id) {
          // history.push("/app/rules/gameid/" + props.match.params.id);
          history.goBack();
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

  return (
    <Form
      {...layout}
      name="AddRule"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Add Rule</Title>
      </Typography>

      <br></br>

      <Form.Item
        label=" Text"
        name="description"
        rules={[
          {
            required: true,
            message: "Please input a Rule text !",
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

export class AddRule extends Component {
  render() {
    return <Demo {...this.props} />;
  }
}

export default AddRule;

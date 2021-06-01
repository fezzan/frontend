import React, { Component, useState } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  Typography,
  message,
  InputNumber,
} from "antd";

import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { ADD_ROUND } from "configs/Endpoints";

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

  const [file, setFile] = useState("");
  const [loading, setloading] = useState(false);

  const onFinish = (values) => {
    setloading(true);

    service
      .post(ADD_ROUND, {
        tournament_id: props.match.params.id,
        criteria: values.criteria,
      })

      .then((res) => {
        if (res.id) {
          // history.push("/app/tournament/manage/" + props.match.params.id);
          history.goBack();
          message.success("Successfully Done :) ");
        } else {
          message.error(res.message);
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
      name="AddRound"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Add Round </Title>
      </Typography>
      <br></br>
      <Form.Item
        label="  Criteria"
        name="criteria"
        rules={[
          {
            required: true,
            message: "Please enter how many players will pass this round !",
          },
          {
            validator: (r, value) =>
              value < 1 ? Promise.reject("value low") : Promise.resolve(true),
            message: "Atleast 1 or more players are required!",
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

export class AddRound extends Component {
  render() {
    return <Demo {...this.props} />;
  }
}

export default AddRound;

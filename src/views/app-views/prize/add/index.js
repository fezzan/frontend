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
import { ADD_PRIZE } from "configs/Endpoints";

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

  const onFinish = (values) => {
    setloading(true);

    service
      .post(ADD_PRIZE, {
        tournament_id: props.match.params.id,
        rank: values.rank,
        prize: values.prize,
        xp:values.xp
      })
      .then((data) => {
        if (data.id) {
          // history.push("/app/tournament/manage/" + props.match.params.id);
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
      name="AddRound"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Add Prize </Title>
      </Typography>
      <br></br>
      <Form.Item
        label="  Rank"
        name="rank"
        rules={[
          {
            required: true,
            message: "Please enter prize rank !",
          },
          {
            validator: (r, value) =>
              value < 1 ? Promise.reject("value low") : Promise.resolve(true),
            message: "Value should be greate than 1 !",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>




      <Form.Item
        label="  Prize"
        name="prize"
        rules={[
          {
            required: true,
            message: "Please enter winning prize !",
          },
          {
            validator: (r, value) =>
              value < 1 ? Promise.reject("value low") : Promise.resolve(true),
            message: "Value should be greate than 1 !",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>


      <Form.Item
        label="  XP"
        name="xp"
        rules={[
          {
            required: true,
            message: "Please enter Experience points !",
          },
          {
            validator: (r, value) =>
              value < 1 ? Promise.reject("value low") : Promise.resolve(true),
            message: "Value should be greate than 1 !",
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

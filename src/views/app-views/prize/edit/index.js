import React, { Component, useState } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  message,
  Typography,
  InputNumber,
  Divider,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { EDIT_PRIZE } from "configs/Endpoints";

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
    console.log("Success:", values);

    setloading(true);
    service
      .put(
        EDIT_PRIZE +
          props.location.dataProps.prizedetails.id,
        {
          tournament_id: props.match.params.id,
          prize: values.prize,
          xp:values.xp
        }
      )
      .then((data) => {
        console.log(data.message);
        if (data.message == "Prize was updated successfully.") {
          // history.push("/app/tournament/manage/" + props.match.params.id);
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
      name="EditRound"
      initialValues={{
        prize: props.location.dataProps.prizedetails.prize,
        xp: props.location.dataProps.prizedetails.xp,

      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Edit Prize </Title>
      </Typography>
      <br></br>
      <br></br>

      <Form.Item label="  Prize Amount" name="prize">
        <InputNumber />
      </Form.Item>

      <Form.Item label="  XP" name="xp">
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

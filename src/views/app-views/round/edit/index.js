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
import { EDIT_ROUND } from "configs/Endpoints";

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
      .put(EDIT_ROUND + props.location.dataProps.rounddetails.id, {
        tournament_id: props.match.params.id,
        criteria: values.criteria,
      })

      .then((data) => {
        console.log(data.message);
        if (data.message == "Round was updated successfully.") {
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
        criteria: props.location.dataProps.rounddetails.criteria,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Edit Round </Title>
      </Typography>
      <br></br>
      <br></br>

      <Form.Item label="  Criteria" name="criteria">
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

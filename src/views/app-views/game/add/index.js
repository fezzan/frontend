import React, { Component, useState } from "react";
import { Form, Input, Button, Upload, Typography, message } from "antd";

import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { ADD_GAME, EDIT_GAME } from "configs/Endpoints";
import placeHolder from "../../../../assets/svg/icon.jpg";

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
  const [image, setImage] = useState(
    placeHolder
  );
  const onFinish = (values) => {
    setloading(true);
    var formData = new FormData();
    formData.append("gamename", values.name);
    formData.append("picture", file);

    // isko remove krna hhhh
    formData.append("ticketcost", 5);
    //dsfdsfdsfsdfds

    formData.append("round_id", props.match.params.id);
    console.log(file);
    service
      .post(ADD_GAME, formData)
      .then((data) => {
        if (data.createdAt) {
          // history.push("/app/game/" + props.match.params.id);
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
      name="AddGame"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Add Game </Title>
      </Typography>
      <br></br>
      <br></br>

      <Form.Item
        label=" Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input a Game Name !",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label=" Image">
      <Form.Item
          name="picture"
          rules={[
            {
              required: true,
              message: "Please input something about this charity !",
            },
          ]}
          valuePropName="picture"
          noStyle
        >
           <Upload.Dragger
                       accept="image/*"

            beforeUpload={(file) => {
              setFile(file);
              let reader = new FileReader();
              reader.onload = (e) => {
                setImage(e.target.result);
              };
              reader.readAsDataURL(file);

              // Prevent upload
              return false;
            }}
            name="picture"
          >
            <img style={{height:200, width:200}} src={image}></img>
            <br></br>{" "}   <br></br>{" "}   <br></br>{" "}
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Upload.Dragger>
        </Form.Item>

      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export class AddGame extends Component {
  render() {
    return <Demo {...this.props} />;
  }
}

export default AddGame;

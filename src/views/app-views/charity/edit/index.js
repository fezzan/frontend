import React, { Component, useState } from "react";
import { Form, Input, Button, Upload, message, Typography } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { EDIT_CHARITY } from "configs/Endpoints";
import { IMAGE_BASE_URL } from "configs/AppConfig";

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

  // console.log("Props:", props.location.dataProps.charitydetails.name);

  const [file, setFile] = useState();
  const [loading, setloading] = useState(false);
  const [image, setImage] = useState(
    IMAGE_BASE_URL + props.location.dataProps.charitydetails.picture
  );

  const onFinish = (values) => {
    console.log("Success:", values);

    setloading(true);
    var formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("picture", file);
    console.log(file);
    service
      .put(EDIT_CHARITY + props.location.dataProps.charitydetails.id, formData)
      .then((res) => {
        if (res.message == "Charity was updated successfully.") {
          // history.push("/app/charity");
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
      name="EditCharity"
      initialValues={{
        name: props.location.dataProps.charitydetails.name,
        description: props.location.dataProps.charitydetails.description,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Edit Charity </Title>
      </Typography>
      <br></br>
      <br></br>

      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>

      <Form.Item label=" Edit Picture">
        <Form.Item name="picture" valuePropName="picture" noStyle>
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
            <img style={{ height: 200, width: 200 }} src={image}></img>
            <br></br> <br></br> <br></br>{" "}
            <p className="ant-upload-text">Upload new Image</p>
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

export default Demo;

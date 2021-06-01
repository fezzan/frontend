import React, { Component, useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  message,
  Typography,
  Select,
  DatePicker,
  InputNumber,
} from "antd";
import moment from "moment";

import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { EDIT_TOURNAMENT, GET_ALL_CATEGORIES } from "configs/Endpoints";
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

  // category list and api call
  const [categorytList, setCategoryList] = useState([]);

  const fetchData = () => {
    setloading(true);

    service.get(GET_ALL_CATEGORIES).then((response) => {
      setloading(false);
      console.log(response);
      setCategoryList(response);
      console.log(
        "my props " + props.location.dataProps.tournamentdetails.startsOn
      );
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // drop down things
  const { Option } = Select;
  function handleChange(value) {
    //  console.log(`selected ${value}`);
  }

  // date picker methods
  function onChange(value, dateString) {
    console.log("Formatted Selected Time: ", value.toJSON());
  }

  function onOk(value) {
    console.log("onOk: ", value);
  }

  const [file, setFile] = useState("");
  const [loading, setloading] = useState(false);
  const [image, setImage] = useState(
    IMAGE_BASE_URL + props.location.dataProps.tournamentdetails.picture
  );

  const onFinish = (values) => {
    console.log("Success:", values);

    setloading(true);
    console.log(values);
    var formData = new FormData();
    formData.append("name", values.name);
    formData.append("picture", file);
    formData.append("ticketReq", values.ticketReq);
    formData.append("category_id", values.category_id);

    console.log(file);
    
    service
      .put(
        EDIT_TOURNAMENT + props.location.dataProps.tournamentdetails.id,
        formData
      )
      .then((res) => {
        if (res.message == "Tournament was updated successfully.") {
          // history.push("/app/tournament");
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
      name="EditTournament"
      initialValues={{
        name: props.location.dataProps.tournamentdetails.name,
        ticketReq: props.location.dataProps.tournamentdetails.ticketReq,
        category_id: props.location.dataProps.tournamentdetails.category_id,
        startsOn: moment(props.location.dataProps.tournamentdetails.startsOn),
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Edit Tournament </Title>
      </Typography>
      <br></br>
      <br></br>

      <Form.Item label=" Category" name="category_id">
        <Select
          defaultValue={props.location.dataProps.tournamentdetails.category_id}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          {categorytList.map((category) => (
            <Option value={category.id}>{category.name}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Starts At :" name="startsOn">
        <DatePicker
          showTime
          defaultValue={moment(
            props.location.dataProps.tournamentdetails.startsOn
          )}
          placeholder="Select Time"
          onChange={onChange}
          onOk={onOk}
        />
      </Form.Item>

      <Form.Item
        label="  Tickets"
        name="ticketReq"
        rules={[
          {
            validator: (r, value) =>
              value < 1 ? Promise.reject("value low") : Promise.resolve(true),
            message: "Atleast 1 or more tickets are required!",
          },
        ]}
      >
        <InputNumber />
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
            <p className="ant-upload-text">
           Upload new Image 
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

export default Demo;

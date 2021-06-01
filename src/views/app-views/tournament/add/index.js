import React, { Component, useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  Typography,
  message,
  Select,
  InputNumber,
  DatePicker,
} from "antd";

import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { FormattedDateTimeRange } from "react-intl";
import service from "auth/FetchInterceptor";
import { ADD_TOURNAMENT, GET_ALL_CATEGORIES } from "configs/Endpoints";
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

const Demo = () => {
  const history = useHistory();

  const [file, setFile] = useState("");
  const [loading, setloading] = useState(false);
  const [image, setImage] = useState(
    placeHolder
  );

  const [categorytList, setCategoryList] = useState([]);

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

  // get all method
  const fetchData = () => {
    setloading(true);

    service.get(GET_ALL_CATEGORIES).then((response) => {
      setloading(false);
      console.log(response);
      setCategoryList(response);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onFinish = (values) => {
    console.log(values);
    setloading(true);
    var formData = new FormData();
    formData.append("name", values.name);
    formData.append("picture", file);
    formData.append("category_id", values.category_id);
    formData.append("ticketReq", values.ticketReq);
    formData.append("startsOn", values.startsOn.toJSON());
    console.log(file);
    service
      .post(ADD_TOURNAMENT, formData)
      .then((data) => {
        if (data.createdAt) {
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
      name="AddTournament"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Add Tournament</Title>
      </Typography>
      <br></br>
      <br></br>

      <Form.Item
        label=" Category"
        name="category_id"
        rules={[
          {
            required: true,
            message: "Please select category !",
          },
        ]}
      >
        <Select          defaultValue="Choose"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          {categorytList.map((category) => (
            <Option value={category.id}>{category.name}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label=" Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input a Tournament Name !",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Starts At :"
        name="startsOn"
        rules={[
          {
            required: true,
            message: "Please input a Tournament Name !",
          },
        ]}
      >
        <DatePicker
          showTime
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
            required: true,
            message: "Please enter how many tickets are required !",
          },
          {
            validator: (r, value) =>
              value < 1 ? Promise.reject("value low") : Promise.resolve(true),
            message: "Atleast 1 or more tickets are required!",
          },
        ]}
      >
        <InputNumber />
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
            <img style={{ height: 200, width: 200 }} src={image}></img>
            <br></br> <br></br> <br></br>{" "}
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

export class AddTournament extends Component {
  render() {
    return <Demo />;
  }
}

export default AddTournament;

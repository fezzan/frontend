import React, { Component, useState, useEffect } from "react";
import { Form, Input, Button, Upload, Typography, message, Select } from "antd";

import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { ADD_QUESTION, GET_ALL_SPONSOR } from "configs/Endpoints";

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
  const [categorytList, setCategoryList] = useState([]);

  const [loading, setloading] = useState(false);

  // drop down things
  const { Option } = Select;
  function handleChange(value) {
    //  console.log(`selected ${value}`);
  }

  // get all method
  const fetchData = () => {
    setloading(true);

    service.get(GET_ALL_SPONSOR).then((response) => {
      setloading(false);
      console.log(response);
      setCategoryList(response);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onFinish = (values) => {
    setloading(true);
    //formData.append("picture", file);
    //  console.log(file);
    service
      .post(ADD_QUESTION, {
        game_id: props.match.params.id,
        text: values.text,
        sponsor_id: values.sponsor_id,
      })

      .then((data) => {
        if (data.id) {
          // history.push("/app/questions/gameid/" + props.match.params.id);
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
      name="AddQuestion"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <br></br>
      <Typography>
        <Title>Add Question</Title>
      </Typography>
      <br></br>
      <br></br>

      <Form.Item
        label=" Sponser"
        name="sponsor_id"
        rules={[
          {
            required: true,
            message: "Please select Sponser !",
          },
        ]}
      >
        <Select
          defaultValue="Choose"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          {categorytList.map((category) => (
            <Option value={category.id}>{category.name}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label=" Text"
        name="text"
        rules={[
          {
            required: true,
            message: "Please input a Question text !",
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

export class AddQuestion extends Component {
  render() {
    return <Demo {...this.props} />;
  }
}

export default AddQuestion;

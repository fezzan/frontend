import React, { useState, useEffect } from "react";
import { Table, Divider, Skeleton, Button, Tooltip, message } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { GET_ALL_QUESTIONS, DELETE_QUESTION } from "configs/Endpoints";

const Question = (props) => {
  const columns = [
    {
      title: "Question ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Question Text",
      dataIndex: "text",
      key: "text",
      render: (text) => <a href="/#">{text}</a>,
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link
            to={{
              pathname: `/app/editquestion/gameid/${props.match.params.id}`,
              dataProps: { questiondetails: record },
            }}
          >
            Edit
          </Link>
          <Divider type="vertical" />
          <Link
            onClick={() => {
              deleteQuestion(record.id);
            }}
          >
            Delete
          </Link>
        </span>
      ),
    },
  ];
  const [questionList, setQuestionList] = useState([]);
  const [loading, setloading] = useState(false);

  const deleteQuestion = (id) => {
    setloading(true);

    service
      .delete(DELETE_QUESTION + id)
      .then((response) => {
        console.log(response);
        if (response.message == "Question was deleted successfully!") {
          message.success("Successfully Deleted :) ");
        } else {
          message.error("Failed to delete ");
        }

        //alert(response);
        fetchData();
        setloading(false);
      })
      .catch((e) => {
        setloading(false);

        message.error(
          "Unable to load  ! Please check your internet or Server "
        );
      });
  };
  const fetchData = () => {
    setloading(true);

    service.get(GET_ALL_QUESTIONS + props.match.params.id).then((response) => {
      setloading(false);
      console.log(response);
      setQuestionList(response);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading)
    return (
      <div
        style={{
          minHeight: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Skeleton active paragraph={{ rows: 10 }} />
      </div>
    );
  return (
    <div>
      <Tooltip title="Add Question">
        <Link to={`/app/addquestion/gameid/${props.match.params.id}`}>
          <Button
            type="primary"
            icon={<PlusCircleOutlined style={{ fontSize: "18px" }} />}
          >
            Add Question
          </Button>
        </Link>
      </Tooltip>
      <br></br>
      <br></br>
      <Table columns={columns} dataSource={questionList} />
    </div>
  );
};

export default Question;

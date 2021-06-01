import React, { useState, useEffect } from "react";
import { Table, Divider, Skeleton, Button, Tooltip, message } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { DELETE_RULE,GET_ALL_RULES } from "configs/Endpoints";

const Rule = (props) => {
  const columns = [
    {
      title: "Rule ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Rule Text",
      dataIndex: "description",
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
              pathname: `/app/editrule/gameid/${props.match.params.id}`,
              dataProps: { ruledetails: record },
            }}
          >
            Edit
          </Link>
          <Divider type="vertical" />
          <Link
            onClick={() => {
              deleteRule(record.id);
            }}
          >
            Delete
          </Link>
        </span>
      ),
    },
  ];
  const [ruleList, setRuleList] = useState([]);
  const [loading, setloading] = useState(false);

  const deleteRule = (id) => {
    setloading(true);

    service
      .delete(DELETE_RULE + id)
      .then((response) => {
        console.log(response);
        if (response.message == "Custome Rule was deleted successfully!") {
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

    service
      .get(
        GET_ALL_RULES + props.match.params.id
      )
      .then((response) => {
        setloading(false);
        console.log(response);
        setRuleList(response);
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
      <Tooltip title="Add Rule">
        <Link to={`/app/addrule/gameid/${props.match.params.id}`}>
          <Button
            type="primary"
            icon={<PlusCircleOutlined style={{ fontSize: "18px" }} />}
          >
            Add Rule
          </Button>
        </Link>
      </Tooltip>
      <br></br>
      <br></br>
      <Table columns={columns} dataSource={ruleList} />
    </div>
  );
};

export default Rule;

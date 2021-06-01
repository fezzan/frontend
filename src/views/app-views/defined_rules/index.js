import React, { useState, useEffect } from "react";
import { Table, Divider, Skeleton, Button, Tooltip, message } from "antd";
import { PlusCircleOutlined,UnorderedListOutlined,CarryOutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { DELETE_CATEGORY,GET_ALL_CATEGORIES,DELETE_FIXED_RULE, GET_ALL_FIXED_RULES, } from "configs/Endpoints";

const Rules = () => {
  const columns = [
    {
      title: "Rule ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Rules Description",
      dataIndex: "description",
      key: "name",
      render: (text) => <a href="/#">{text}</a>,
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link
            to={{
              pathname: "defined_rules/edit/" + record.id,
              dataProps: { ruledetails: record },
            }}
          >
            Edit
          </Link>
          <Divider type="vertical" />
          <Link
            onClick={() => {
              deleteRules(record.id);
            }}
          >
            Delete
          </Link>
        </span>
      ),
    },
  ];
  const [ruleList, setRulesList] = useState([]);
  const [loading, setloading] = useState(false);

  const deleteRules = (id) => {
    setloading(true);

   service.delete( DELETE_FIXED_RULE + id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
 
          console.log(res)
          if (res.message == "Rule was deleted successfully!") {
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

    service.get(GET_ALL_FIXED_RULES, {
 
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res)  => {
        setloading(false)
        console.log(res)
        setRulesList(res);
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
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <CarryOutOutlined style={{ fontSize: 70,color:"#1a3353" }}> </CarryOutOutlined>{" "}
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <h1 style={{ fontFamily: "fantasy", fontSize: 50 }}> RULES </h1>
      </span>
      <br></br>

      <Tooltip title="Add Rules">
        <Link to="rule/add">
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

export default Rules;

import React, { useState, useEffect } from "react";
import { Table, Divider, Skeleton, Button, Tooltip, message } from "antd";
import { PlusCircleOutlined,UnorderedListOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { DELETE_CATEGORY,GET_ALL_CATEGORIES, } from "configs/Endpoints";

const Category = () => {
  const columns = [
    {
      title: "Category ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Category Name",
      dataIndex: "name",
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
              pathname: "category/edit/" + record.id,
              dataProps: { categorydetails: record },
            }}
          >
            Edit
          </Link>
          <Divider type="vertical" />
          <Link
            onClick={() => {
              deleteCategory(record.id);
            }}
          >
            Delete
          </Link>
        </span>
      ),
    },
  ];
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setloading] = useState(false);

  const deleteCategory = (id) => {
    setloading(true);

   service.delete( DELETE_CATEGORY + id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
 
          console.log(res)
          if (res.message == "Category was deleted successfully!") {
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

    service.get(GET_ALL_CATEGORIES, {
 
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res)  => {
        setloading(false)
        console.log(res)
        setCategoryList(res);
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
        <UnorderedListOutlined style={{ fontSize: 70,color:"#1a3353" }}> </UnorderedListOutlined>{" "}
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <h1 style={{ fontFamily: "fantasy", fontSize: 50 }}> CATEGORIES </h1>
      </span>
      <br></br>

      <Tooltip title="Add Category">
        <Link to="category/add">
          <Button
            type="primary"
            icon={<PlusCircleOutlined style={{ fontSize: "18px" }} />}
          >
            Add Category
          </Button>
        </Link>
      </Tooltip>
      <br></br>
      <br></br>
      <Table columns={columns} dataSource={categoryList} />
    </div>
  );
};

export default Category;

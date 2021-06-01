import React, { useState, useEffect } from "react";
import { Table, Divider, Skeleton, Button, Tooltip, message } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { OmitProps } from "antd/lib/transfer/ListBody";
import { LEADERBOARD, WINNERS } from "configs/Endpoints";
import { TrophyOutlined,DollarOutlined  } from "@ant-design/icons";
const LeaderBoard = (props) => {
  const columns = [
    {
      title: "User ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "User Score",
      dataIndex: "Score",
      key: "score",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "User Position",
      dataIndex: "Position",
      key: "Position",
      render: (text) => <a href="/#">{text}</a>,
    },
  ];


  const columnswinners = [
    {
      title: "User ID",
      dataIndex: "uid",
      key: "id",
    },

    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "User Score",
      dataIndex: "Score",
      key: "score",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "User Position",
      dataIndex: "Position",
      key: "Position",
      render: (text) => <a href="/#">{text}</a>,
    },

    {
      title: "Prize Amount",
      dataIndex: "prize",
      key: "Position",
      render: (text) => <a href="/#">{text}</a>,
    },

  ];

  const [categoryList, setCategoryList] = useState([]);
  const [winnerList, setWinnerList] = useState([]);

  const [loading, setloading] = useState(false);

  
  
  const fetchwinnerData = () => {
    setloading(true);

    service
      .get(WINNERS + props.match.params.id)

      .then((response) => {
        setloading(false);
        console.log(response);
        setWinnerList(response);
      });
  };
  
  const fetchData = () => {
    setloading(true);

    service
      .get(LEADERBOARD + props.match.params.id)

      .then((response) => {
        setloading(false);
        console.log(response);
        setCategoryList(response);
      });
  };
  useEffect(() => {
    fetchData();
    fetchwinnerData();
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
            <br></br>
            <br></br>

      <span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TrophyOutlined style={{ fontSize: 110,color:"#1a3353" }}> </TrophyOutlined>{" "}
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <h1 style={{ fontFamily: "fantasy", fontSize: 80 }}> LEADER BOARD </h1>
      </span>
      <br></br> 
      <br></br>
      <Table columns={columns} dataSource={categoryList} />

      <br></br>
            <br></br>

      <span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <DollarOutlined style={{ fontSize: 110,color:"#1a3353" }}> </DollarOutlined>{" "}
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <h1 style={{ fontFamily: "fantasy", fontSize: 80 }}> WINNERS </h1>
      </span>
      <br></br> 
      <br></br>
      <Table columns={columnswinners} dataSource={winnerList} />


    </div>
  );
};

export default LeaderBoard;

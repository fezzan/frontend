import React, { useState, useEffect } from "react";
import {
  Table,
  Divider,
  Skeleton,
  Button,
  Tooltip,
  message,
  Row,
  Col,
} from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  FormOutlined,
  DeleteOutlined,
  FundViewOutlined,
  PlayCircleOutlined,
  DribbbleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Moment from "moment";
import service from "auth/FetchInterceptor";
import { DELETE_TOURNAMENT, GET_ALL_TOURNAMENT } from "configs/Endpoints";
import { IMAGE_BASE_URL } from "configs/AppConfig";

const Tournament = () => {
  const columns = [
    {
      title: "Avatar",
      dataIndex: "picture",
      key: "picture",
      render: (text) => (
        <img
          style={{
            objectFit: "cover",
            width: 50,
            height: 50,
            borderRadius: 100,
          }}
          src={`${IMAGE_BASE_URL + text}`}
        />
      ),
    },

    {
      title: " ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: " Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="/#">{text}</a>,
    },

    {
      title: "Start Time",
      dataIndex: "startsOn",
      key: "startsOn",
      render: (text) => <a href="/#">{Moment(text).format("LLLL")}</a>,
    },

    {
      title: "Status",
      dataIndex: "setActive",
      key: "setActive",
      render: (text) => {
        if (text == 1) {
          return <a href="/#">Active</a>;
        } else if (text == 0) {
          return <a href="/#">Ended</a>;
        } else {
          return <a href="/#">Not Started</a>;
        }
      },
    },
    {
      title: "Required Tickets",
      dataIndex: "ticketReq",
      key: "ticketReq",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <Col xs={6} sm={6} md={6} lg={24}>
            <span>
              {record.setActive == 0 ? (
                <>
                  <Link
                    to={{
                      pathname:
                        `/app/tournament/leaderboard/tournamentid/` + record.id,

                      dataProps: { tournamentdetails: record },
                    }}
                  >
                    <Button
                      type="primary"
                      style={{ background: "green", borderColor: "green" }}
                      icon={<FundViewOutlined style={{ fontSize: "18px" }} />}
                    >
                      Results
                    </Button>
                  </Link>
                  <Divider type="vertical" />
                </>
              ) : (
                <>
                  <Link
                    to={{
                      pathname: "tournament/manage/" + record.id,
                      dataProps: { tournamentdetails: record },
                    }}
                  >
                    <Button
                      type="primary"
                      icon={<EditOutlined style={{ fontSize: "15px" }} />}
                    >
                      Manage
                    </Button>
                  </Link>
                  <Divider type="vertical" />{" "}
                </>
              )}

              {record.setActive == null ? (
                <>
                  <Link
                    to={{
                      pathname: "tournament/edit/" + record.id,
                      dataProps: { tournamentdetails: record },
                    }}
                  >
                    <Button
                      style={{ background: "orange", borderColor: "orange" }}
                      type="primary"
                      icon={<FormOutlined style={{ fontSize: "14px" }} />}
                    >
                      Edit
                    </Button>
                  </Link>
                  <Divider type="vertical" />
                </>
              ) : (
                <span></span>
              )}

              {record.setActive == null ? (
                <Link
                  onClick={() => {
                    deleteTournament(record.id);
                  }}
                >
                  <Button
                    type="danger"
                    icon={<DeleteOutlined style={{ fontSize: "15px" }} />}
                  >
                    Delete
                  </Button>
                </Link>
              ) : (
                <span></span>
              )}
            </span>
          </Col>
        );
      },
    },
  ];
  const [tournamentList, setTournamentList] = useState([]);
  const [loading, setloading] = useState(false);

  const deleteTournament = (id) => {
    setloading(true);

    service
      .delete(DELETE_TOURNAMENT + id)
      .then((res) => {
        console.log(res);
        if (res.message == "Tournament was deleted successfully!") {
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

    service.get(GET_ALL_TOURNAMENT).then((res) => {
      setloading(false);
      console.log(res);
      setTournamentList(res);
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
      <br></br>

      <span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <DribbbleOutlined style={{ fontSize: 90, color: "#1a3353" }}>
          {" "}
        </DribbbleOutlined>{" "}
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <h1 style={{ fontFamily: "fantasy", fontSize: 60 }}> TOURNAMENTS </h1>
      </span>
      <br></br>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Tooltip title="Add Tournament">
          <Link to="tournament/add">
            <Button
              type="primary"
              icon={<PlusCircleOutlined style={{ fontSize: "18px" }} />}
            >
              Add Tournament
            </Button>
          </Link>
        </Tooltip>
      </div>

      <br></br>
      <br></br>
      <Table columns={columns} dataSource={tournamentList} />
    </div>
  );
};

export default Tournament;

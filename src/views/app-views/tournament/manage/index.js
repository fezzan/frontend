import React, { useState, useEffect } from "react";
import { Table, Divider, Skeleton, Button, Tooltip, message } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  FormOutlined,
  DeleteOutlined,
  PlayCircleOutlined,
  SendOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Moment from "moment";
import service from "auth/FetchInterceptor";
import {
  ACTIVATE_TOURNAMENT,
  GET_TOURNAMENT_BY_ID,
  GET_ROUND_BY_ID,
  DELETE_ROUND,
  GET_ALL_PRIZES,
  DELETE_PRIZE,
  END_TOURNAMENT,
} from "../../../../configs/Endpoints";

const Round = (props) => {
  const columns = [
    {
      title: "Round ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Round Number",
      dataIndex: "roundnumber",
      key: "roundnumber",
      render: (text) => <a href="/#">{text}</a>,
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
      title: "Criteria",
      dataIndex: "criteria",
      key: "criteria",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "",
      key: "action",
      render: (text, record) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <span>
              {record.setActive == null ? (
                <>
                  <Link
                    to={{
                      pathname: "/app/game/" + record.id,
                      dataProps: {
                        tournamentid: props.match.params.id,
                      },
                    }}
                  >
                    <Button
                      type="primary"
                      icon={<EditOutlined style={{ fontSize: "15px" }} />}
                    >
                      Manage Round
                    </Button>
                  </Link>
                  <Divider type="vertical" />
                  <Link
                    to={{
                      pathname: `/app/round/edit/${props.match.params.id}`,
                      dataProps: { rounddetails: record },
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

                  <Link
                    onClick={() => {
                      deleteRound(record.id);
                    }}
                  >
                    <Button
                      type="danger"
                      icon={<DeleteOutlined style={{ fontSize: "15px" }} />}
                    >
                      Delete
                    </Button>
                  </Link>
                </>
              ) : record.setActive == 0 ? (
                <>
                  <p>Round has been played</p>
                </>
              ) : (
                <span>
                  <Link
                    to={{
                      pathname: `/app/round/setroundanswers/roundid/${record.id}`,
                      dataProps: {
                        rounddetails: record,
                        tournamentid: props.match.params.id,
                      },
                    }}
                  >
                    <Button
                      style={{ background: "green", borderColor: "green" }}
                      type="primary"
                      icon={<SendOutlined style={{ fontSize: "14px" }} />}
                    >
                      Answer Questions and End Round
                    </Button>
                  </Link>
                </span>
              )}
            </span>
          </div>
        );
      },
    },
  ];

  // prizes columns

  const prizescolumns = [
    {
      title: "Prize ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Prize",
      dataIndex: "prize",
      key: "prize",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "XP",
      dataIndex: "xp",
      key: "xp",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "",
      key: "action",
      render: (text, record) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <span>
              {record.setActive == null ? (
                <>
                  <Link
                    to={{
                      pathname: `/app/prize/edit/${props.match.params.id}`,
                      dataProps: { prizedetails: record },
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
                    deletePrize(record.id);
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
          </div>
        );
      },
    },
  ];

  const [roundList, setRoundList] = useState([]);
  const [loading, setloading] = useState(false);
  const [tournamentstatus, settournamentstatus] = useState();
  const [prizeList, setprizeList] = useState([]);

  const StartTournament = () => {
    setloading(true);

    service
      .put(ACTIVATE_TOURNAMENT + props.match.params.id)
      .then((response) => {
        console.log(response);
        if (response.success) {
          message.success("Successfully Started :) ");

          loadTournament();
        } else {
          message.error("Failed to Start ");
        }

        setloading(false);
      })
      .catch((e) => {
        setloading(false);

        message.error(
          "Unable to load  ! Please check your internet or Server "
        );
      });
  };

  const EndTournament = () => {
    setloading(true);

    service
      .put(END_TOURNAMENT + props.match.params.id)
      .then((response) => {
        console.log(response);
        if (response.message == "Tournament has Ended") {
          message.success("Successfully Ended :) ");

          loadTournament();
        } else {
          message.error("Failed to end ");
        }

        setloading(false);
      })
      .catch((e) => {
        setloading(false);

        message.error(
          "Unable to load  ! Please check your internet or Server "
        );
      });
  };

  const deleteRound = (id) => {
    setloading(true);

    service
      .delete(DELETE_ROUND + id)
      .then((response) => {
        console.log(response);
        if (response.message == "Round was deleted successfully!") {
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

  const deletePrize = (id) => {
    setloading(true);

    service
      .delete(DELETE_PRIZE + id)
      .then((response) => {
        console.log(response);
        if (response.message == "Prize was deleted successfully!") {
          message.success("Successfully Deleted :) ");
        } else {
          message.error("Failed to delete ");
        }

        //alert(response);
        fetchprizeData();
        setloading(false);
      })
      .catch((e) => {
        setloading(false);

        message.error(
          "Unable to load  ! Please check your internet or Server "
        );
      });
  };
  const loadTournament = () => {
    service
      .get(GET_TOURNAMENT_BY_ID + props.match.params.id)

      .then((response) => {
        // console.log(response[0].setActive);
        settournamentstatus(response[0].setActive);
      });
  };

  const fetchprizeData = () => {
    setloading(true);

    service.get(GET_ALL_PRIZES + props.match.params.id).then((response) => {
      setloading(false);
      console.log(response);
      setprizeList(response);
    });
  };
  const fetchData = () => {
    setloading(true);

    loadTournament();

    service
      .get(GET_ROUND_BY_ID + props.match.params.id)

      .then((response) => {
        setloading(false);
        //   console.log(response);
        setRoundList(response);
      });
  };

  useEffect(() => {
    fetchData();
    fetchprizeData();
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
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {tournamentstatus == null ? (
          <div>
            <Tooltip title="Start Tournament">
              <Button
                type="primary"
                icon={<PlayCircleOutlined style={{ fontSize: "18px" }} />}
                onClick={StartTournament}
              >
                Start Tournament
              </Button>
            </Tooltip>
          </div>
        ) : tournamentstatus == 1 ? (
          <div>
            <Tooltip title="Start Tournament">
              <Button
                type="primary"
                icon={<SendOutlined style={{ fontSize: "18px" }} />}
                onClick={EndTournament}
              >
                Finish Tournament
              </Button>
            </Tooltip>
          </div>
        ) : (
          <div></div>
        )}
        <br></br>
        <div>
          <Link
            to={{
              pathname:
                `/app/tournament/leaderboard/tournamentid/` +
                props.match.params.id,
              dataProps: {
                tournamentid: props.match.params.id,
              },
            }}
          >
            <Button
              style={{
                background: "black",
                borderColor: "yellow",
                color: "gold",
              }}
              type="primary"
              icon={
                <TrophyOutlined style={{ fontSize: "20px", color: "gold" }} />
              }
            >
              Leaderboard{" "}
            </Button>
          </Link>
        </div>
      </div>

      <Divider />
      <Divider>Rounds Configration</Divider>
      <Divider />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Tooltip title="Add Round">
          <Link to={`/app/round/add/${props.match.params.id}`}>
            <Button
              type="primary"
              icon={<PlusCircleOutlined style={{ fontSize: "18px" }} />}
            >
              Add Round
            </Button>
          </Link>
        </Tooltip>
      </div>

      <br></br>

      <br></br>

      <Table columns={columns} dataSource={roundList} />

      <Divider />
      <Divider>Prize Configration</Divider>
      <Divider />

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Tooltip title="Add Round">
          <Link to={`/app/prize/add/${props.match.params.id}`}>
            <Button
              type="primary"
              icon={<PlusCircleOutlined style={{ fontSize: "18px" }} />}
            >
              Add Prize
            </Button>
          </Link>
        </Tooltip>
      </div>

      <br></br>

      <br></br>

      <Table columns={prizescolumns} dataSource={prizeList} />
    </div>
  );
};

export default Round;

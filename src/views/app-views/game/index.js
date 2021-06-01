import React, { useState, useEffect } from "react";
import { Table, Divider, Skeleton, Button, Tooltip, message } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  FormOutlined,
  DeleteOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { ACTIVATE_ROUND, DELETE_GAME, GET_ALL_GAMES } from "configs/Endpoints";
import { IMAGE_BASE_URL } from "configs/AppConfig";

const Game = (props) => {
  const columns = [
    
    {
      title: "Avatar",
      dataIndex: "picture",
      key: "picture",
      render: (text) => <img style={{objectFit:'cover', width:50, height:50,borderRadius:100 }}src={`${IMAGE_BASE_URL+text}`}/>,
    },

    {
      title: "Game ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Game Name",
      dataIndex: "gamename",
      key: "gamename",
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
              <Link
                to={{
                  pathname: "/app/questions/gameid/" + record.id,
                  dataProps: { gamedetails: record },
                }}
              >
                <Button
                  type="primary"
                  icon={<EditOutlined style={{ fontSize: "15px" }} />}
                >
                  Questions
                </Button>
              </Link>
              <Divider type="vertical" />

              <Link
                to={{
                  pathname: "/app/rules/gameid/" + record.id,
                  dataProps: { gamedetails: record },
                }}
              >
                <Button
                  type="primary"
                  style={{ background: "brown", borderColor: "brown" }}
                  icon={<EditOutlined style={{ fontSize: "15px" }} />}
                >
                  Rules
                </Button>
              </Link>
              <Divider type="vertical" />

              <Link
                to={{
                  pathname: `/app/game/edit/${props.match.params.id}`,
                  dataProps: { gamedetails: record },
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
                  deleteGame(record.id);
                }}
              >
                <Button
                  type="danger"
                  icon={<DeleteOutlined style={{ fontSize: "15px" }} />}
                >
                  Delete
                </Button>
              </Link>
            </span>
          </div>
        );
      },
    },
  ];

  const [gameList, setGameList] = useState([]);
  const [loading, setloading] = useState(false);
  const [roundstatus, setroundstatus] = useState();

  const StartRound = () => {
    setloading(true);
    service
      .put(
        ACTIVATE_ROUND + props.match.params.id,
        {
          tournament_id: props.location.dataProps.tournamentid,
        }
      )

      .then((response) => {
        console.log(response);
        if (response.message== 'Round Activated') {
          message.success("Round Started Successfully  :) ");

          // loadRound();
        } else {
          message.error("Failed to Start ");
        }

        setloading(false);
      })
      .catch((e) => {
        setloading(false);

        // message.error(
        //   "Unable to load  ! Please check your internet or Server "
        // );
      });
  };

  const deleteGame = (id) => {
    setloading(true);

    service
      .delete(DELETE_GAME + id)
      .then((response) => {
        console.log(response);
        if (response.message == "Game was deleted successfully!") {
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

  // const loadRound = () => {
  //   fetch("http://160.119.254.32:3000/round/find/" + props.match.params.id, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log("here it is " + response);
  //       //        setroundstatus(response[0].setActive);
  //     });
  // };

  const fetchData = () => {
    setloading(true);
    service.get(GET_ALL_GAMES + props.match.params.id).then((response) => {
      setloading(false);
      setGameList(response);
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
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {roundstatus == null ? (
          <div>
            <Tooltip title="Start Round">
              <Button
                type="primary"
                icon={<PlayCircleOutlined style={{ fontSize: "18px" }} />}
                onClick={StartRound}
              >
                Start Round
              </Button>
            </Tooltip>
          </div>
        ) : (
          <p>Round Started ... </p>
        )}
      </div>

      <Divider />
      <Divider>Games Configration</Divider>
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
        <Tooltip title="Add Game">
          <Link to={`/app/game/add/${props.match.params.id}`}>
            <Button
              type="primary"
              icon={<PlusCircleOutlined style={{ fontSize: "18px" }} />}
            >
              Add Game
            </Button>
          </Link>
        </Tooltip>
      </div>

      <br></br>

      <br></br>

      <Table columns={columns} dataSource={gameList} />
    </div>
  );
};

export default Game;

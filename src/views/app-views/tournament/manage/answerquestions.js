import React, { useState, useEffect } from "react";
import { Table, Divider, Skeleton, Button, Radio, message } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import service from "auth/FetchInterceptor";
import { ROUND_END, ROUND_QUESTIONS } from "configs/Endpoints";

const Game = (props) => {
  const history = useHistory();

  const [questionList, setQuestionList] = useState([]);
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);
  const [val, setVal] = useState(null);

  const columns = [
    {
      title: "Question ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Question ",
      dataIndex: "text",
      key: "gamename",
      render: (text) => <a href="/#">{text}</a>,
    },

    {
      title: "Answer ",

      key: "Answer",
      render: (text, record) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              //  justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <span>
              <Radio.Group buttonStyle="solid">
                <Radio.Button
                  onClick={() => setVal({ key: record.id, val: 1 })}
                  value="1"
                >
                  X
                </Radio.Button>
                <Radio.Button
                  onClick={() => setVal({ key: record.id, val: 0 })}
                  value="0"
                >
                  O
                </Radio.Button>
              </Radio.Group>
            </span>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    if (val === null) return;
    setData((old) => {
      let oldold = { ...old };
      oldold[val.key] = val.val;
      return oldold;
    });
  }, [val]);

  const endRound = () => {
    let sendvalue = Object.keys(data).map((K) => ({
      id: K,
      answer: data[K],
    }));

    if (sendvalue.length == questionList.length) {
      setloading(true);
      service
        .put(
          ROUND_END + props.match.params.id,
          sendvalue
        )
        .then((data) => {
          if (data.success) {
            // history.push(
            //   "/app/tournament/manage/" + props.location.dataProps.tournamentid
            // );
            history.goBack();
            message.success("Successfully Done :)");
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
    } else {
      message.error("Please Answer all questions");
    }
  };

  const fetchData = () => {
    setloading(true);

    service
      .get(
        ROUND_QUESTIONS +
          props.location.dataProps.rounddetails.id
      )
      .then((response) => {
        setloading(false);
        //   console.log(response);
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
      <Table columns={columns} dataSource={questionList} />

      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        loading={loading}
        onClick={() => {
          endRound();
        }}
      >
        Finish Round
      </Button>
    </div>
  );
};

export default Game;

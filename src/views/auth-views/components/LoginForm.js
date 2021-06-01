import React, { useEffect,useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Button, Form, Input, Divider, Alert, message as msg } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import {
  showLoading,
  showAuthMessage,
  hideAuthMessage,
  authenticated,
} from "redux/actions/Auth";
import JwtAuthService from "services/JwtAuthService";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { AUTHENTICATED, AUTH_TOKEN } from "redux/constants/Auth";
import { API_BASE_URL } from "configs/AppConfig";

export const LoginForm = (props) => {
  let dispatch = useDispatch();
  let history = useHistory();

  const [load, setload] = useState(false);

  const {
    otherSignIn,
    showForgetPassword,
    hideAuthMessage,
    onForgetPasswordClick,
    showLoading,
    extra,
    loading,
    showMessage,
    message,
    authenticated,
    showAuthMessage,
    token,
    redirect,
    allowRedirect,
  } = props;

  const onLogin = (values) => {
    setload(true);
    console.log(values);

    fetch(API_BASE_URL + "signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      res.json().then((data) => {
        if (data.token) {
          setload(false);
          msg.success("Successfully Done :) ");

          localStorage.setItem(AUTH_TOKEN, data.token);
          dispatch({
            type: AUTHENTICATED,
            token: data.token,
          });
          history.push(redirect);
        } else {
          setload(false);
          msg.error("failed to login");
        }
      });
    });
  };

  useEffect(() => {
    if (token !== null && allowRedirect) {
      history.push(redirect);
    }
    if (showMessage) {
      setTimeout(() => {
        hideAuthMessage();
      }, 3000);
    }
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: showMessage ? 1 : 0,
          marginBottom: showMessage ? 20 : 0,
        }}
      >
        <Alert type="error" showIcon message={message}></Alert>
      </motion.div>
      <Form layout="vertical" name="login-form" onFinish={onLogin}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
            {
              type: "email",
              message: "Please enter a validate email!",
            },
          ]}
        >
          <Input prefix={<MailOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="password"
          label={
            <div
              className={`${
                showForgetPassword
                  ? "d-flex justify-content-between w-100 align-items-center"
                  : ""
              }`}
            >
              <span>Password</span>
              {showForgetPassword && (
                <span
                  onClick={() => onForgetPasswordClick}
                  className="cursor-pointer font-size-sm font-weight-normal text-muted"
                >
                  Forget Password?
                </span>
              )}
            </div>
          }
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="text-primary" />} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={load}>
            Log In
          </Button>
        </Form.Item>

      
        {extra}
      </Form>
    </>
  );
};

LoginForm.propTypes = {
  otherSignIn: PropTypes.bool,
  showForgetPassword: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

LoginForm.defaultProps = {
  otherSignIn: true,
  showForgetPassword: false,
};

const mapStateToProps = ({ auth }) => {
  const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect };
};

const mapDispatchToProps = {
  showAuthMessage,
  showLoading,
  hideAuthMessage,
  authenticated,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

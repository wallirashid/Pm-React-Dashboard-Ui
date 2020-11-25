import React from "react";
import { Menu, Row, Col } from "antd";

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
const SideMenu = () => {
  return (
    <div className="dashboard-menu">
      <Row style={{ marginLeft: "15px" }} className="padd-top-btm-15">
        <Col sm={12} md={12} lg={12} xl={12}>
          <div className="dashboard-text">
            <p>
              <strong>50</strong>
            </p>
            <span>Total Employees</span>
          </div>
        </Col>
        <Col sm={12} md={12} lg={12} xl={12}>
          <div className="dashboard-text">
            <p>
              <strong>10</strong>
            </p>
            <span>Total Projects</span>
          </div>
        </Col>
      </Row>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Menu</Menu.Item>
        <Menu.Item key="2">Dashboard</Menu.Item>
        <Menu.Item key="3">Users</Menu.Item>
        <Menu.Item key="4">Projects</Menu.Item>
        <Menu.Item key="5">Invoices</Menu.Item>
        <Menu.Item key="6">Skills</Menu.Item>
        <Menu.Item key="7">Notifications</Menu.Item>
      </Menu>
    </div>
  );
};
export default SideMenu;

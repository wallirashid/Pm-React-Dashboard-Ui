import React from "react";
import { Layout } from "antd";
import { MailOutlined, SearchOutlined, BellOutlined } from "@ant-design/icons";
import { Row, Col, Input } from "antd";
import SideMenu from "./components/SideMenu";
const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <SideMenu />
        </Sider>
        <Layout className="site-layout main-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Row style={{ marginLeft: "30px" }}>
              <Col sm={12} md={12} lg={12} xl={12}>
                <Input placeholder="Search" prefix={<SearchOutlined />} />
              </Col>
              <Col sm={12} md={12} lg={12} xl={12}>
                <div className="header-col-setting">
                  <span className="header-icon">
                    <MailOutlined />
                  </span>
                  <span className="header-icon">
                    <BellOutlined />
                  </span>
                </div>
              </Col>
            </Row>

            {/* {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )} */}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <h2>Dashboard</h2>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;

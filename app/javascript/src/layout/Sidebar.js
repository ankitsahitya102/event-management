import React from 'react';

import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  CalendarOutlined,
  HomeOutlined,
  UserOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

class Sidebar extends React.Component {

  getActivePathname() {
    return window.location.pathname;
  }

  getActiveRoute = () => {
    let activeRoute = this.props.route.split('/')[1];
    if (activeRoute === '/undefined') {
      activeRoute = '';
    }
    return activeRoute;
  }

  render() {
    const { open } = this.props;
    let activeRoute = this.getActiveRoute();
    return (
      <Sider
        theme={'light'}
        breakpoint="md"
        collapsedWidth="0"
        collapsed={!open}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          zIndex: 3,
        }}>
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <p style={{ marginTop: '10px' }}>Event Manager</p>
        </div>
        <Menu theme="light"
          defaultSelectedKeys={[this.getActivePathname()]}
          mode="inline" selectedKeys={[activeRoute]}>
          <Menu.Item key={''}>
            <HomeOutlined />
            <span>Dashboard</span>
            <Link to={'/'} />
          </Menu.Item>
          <Menu.Item key={'events'}>
            <CalendarOutlined />
            <span>Events</span>
            <Link to={'/events'} />
          </Menu.Item>
          <Menu.Item key={'users'}>
            <UserOutlined />
            <span>Users</span>
            <Link to={'/users'} />
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
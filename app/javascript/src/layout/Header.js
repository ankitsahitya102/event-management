import React from "react"
import { Layout } from 'antd';

class Header extends React.Component {
  render() {
    return (
      <Layout.Header style={{ background: '#fff', position: 'fixed', zIndex: 1, width: '100%', paddingRight: '20px' }} >
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
        </div>
      </Layout.Header>
    );
  }
}

export default Header;

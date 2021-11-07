import React from "react"
import { Helmet } from 'react-helmet'

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Helmet><title>Dashboard</title></Helmet>
        <div className="content-holder" style={{ background: '#fff' }}>
          Welcome to Event Manager
        </div>
      </>
    );
  }
}

export default Dashboard;


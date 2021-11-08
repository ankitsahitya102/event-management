import React from "react"
import { Helmet } from 'react-helmet'

const Dashboard = () => (
  <>
    <Helmet><title>Dashboard</title></Helmet>
    <div className="content-holder" style={{ background: '#fff' }}>
      Welcome to Event Manager
    </div>
  </>
);

export default Dashboard;


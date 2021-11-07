import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { Layout } from 'antd';
import { Helmet } from "react-helmet";

import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'

const { Content, Footer } = Layout;

export const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={props => {
      return (
        <>
          <Helmet titleTemplate="%s | Event Manager">
            <title></title>
          </Helmet>
          <Layout style={{ height: '100vh' }}>
            <Sidebar
              route={window.location.pathname.replace("/dashboard", "")}
              open={true}
            />
            <Layout>
              <Header />
              <Content>
                <div style={{ padding: '20px 20px 0px 220px', marginTop: 64 }}>
                  <Component {...props} />
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                <div className="footer-text">Event Manager©2021</div>
              </Footer>
            </Layout>
          </Layout>
        </>
      )
    }} />
  )
}

export default PrivateRoute;
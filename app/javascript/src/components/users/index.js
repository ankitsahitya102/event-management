import React from "react"
import moment from 'moment'
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import { Table, Space } from 'antd'
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/userActions";
import ErrorDisplay from "../../shared/ErrorDisplay";
import { Link } from "react-router-dom"

class Users extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers(moment(), moment()));
  }

  render() {
    const { loading, users, error } = this.props;
    const columns = [
      {
        title: 'Username',
        dataIndex: 'username',
        sorter: true,
        width: '25%',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        sorter: true,
        width: '25%',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        sorter: true,
        width: '25%',
      },
      {
        title: 'Available slots',
        dataIndex: 'id',
        render: (id) => <Link to={`/users/${id}/available_slots`}>View</Link> ,
        sorter: true,
        width: '25%',
      },
    ];

    return (
      <>
        <Helmet><title>Users</title></Helmet>
        <div className="content-holder" style={{ background: '#fff' }}>
          <Space
            direction='vertical'
            style={{ width: '100%' }}
          >
            {error && <ErrorDisplay error={error} />}
            <Table
              style={{ width: '100%' }}
              columns={columns}
              rowKey={record => record.id}
              dataSource={users}
              loading={loading}
              size="middle"
            />
          </Space>
        </div>
      </>
    );
  }
}

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  error: PropTypes.object,
};

const mapStateToProps = state => ({
  users: state.users.items,
  loading: state.users.loading,
  error: state.users.error,
});

export default connect(mapStateToProps)(Users);


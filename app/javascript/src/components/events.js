import React from "react"
import moment from 'moment'
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import { Table, DatePicker, Space } from 'antd'
import { connect } from "react-redux";
import { fetchEvents } from "../actions/eventActions";
import ErrorDisplay from "../shared/ErrorDisplay";

const { RangePicker } = DatePicker;

class Events extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchEvents(moment(), moment()));
  }

  handleDateChange = (moments, dates) => {
    this.props.dispatch(fetchEvents(dates[0], dates[1]));
  }

  render() {
    const { loading, events, error } = this.props;
    const columns = [
      {
        title: 'Title',
        dataIndex: 'title',
        sorter: true,
        width: '20%',
      },
      {
        title: 'Start Time',
        dataIndex: 'start_time',
        render: (datetime) => moment(datetime).format('MM/DD/YYYY hh:mm:ss'),
        sorter: true,
      },
      {
        title: 'End Time',
        dataIndex: 'end_time',
        render: (datetime) => moment(datetime).format('MM/DD/YYYY hh:mm:ss'),
        sorter: true,
      },
      {
        title: 'Description',
        dataIndex: 'description',
      },
      {
        title: 'All Day',
        dataIndex: 'all_day',
        render: (bool) => bool ? 'Yes' : 'No',
        sorter: true,
      },
      {
        title: 'Completed',
        dataIndex: 'completed',
        render: (bool) => bool ? 'Yes' : 'No',
        sorter: true,
      },
    ];

    return (
      <>
        <Helmet><title>Events</title></Helmet>
        <div className="content-holder" style={{ background: '#fff' }}>
          <Space
            direction='vertical'
            style={{ width: '100%' }}
          >
            {error && <ErrorDisplay error={error} />}
            <RangePicker
              style={{ width: '100%' }}
              defaultValue={[moment(), moment()]}
              onChange={this.handleDateChange}
            />
            <Table
              style={{ width: '100%' }}
              columns={columns}
              rowKey={record => record.id}
              dataSource={events}
              loading={loading}
              size="middle"
            />
          </Space>
        </div>
      </>
    );
  }
}

Events.propTypes = {
  loading: PropTypes.bool.isRequired,
  events: PropTypes.array.isRequired,
  error: PropTypes.object,
};

const mapStateToProps = state => ({
  events: state.events.items,
  loading: state.events.loading,
  error: state.events.error,
});

export default connect(mapStateToProps)(Events);


import { List, Space, DatePicker, Spin, Typography } from "antd";
import React from "react"
import moment from "moment"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchUserAvailableSlots } from "../../actions/userActions";
import ErrorDisplay from "../../shared/ErrorDisplay";

const { RangePicker } = DatePicker
const TimeFormat = 'YYYY-MM-DD hh:mm a'

class AvailableSlots extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUserAvailableSlots(this.props.match.params.id, moment(), moment()));
  }

  handleDateChange = (moments, dates) => {
    this.props.dispatch(fetchUserAvailableSlots(this.props.match.params.id, dates[0], dates[1]));
  }

  render() {
    const { slots, loading, error } = this.props
    return (
      <>
        <Helmet><title>Available Slots</title></Helmet>
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
            {loading ?
              <Spin /> :
              <List
                header={<div>Available Slots</div>}
                bordered
                dataSource={slots}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text>{moment(item).format(TimeFormat)}-{moment(item).add(2, 'hours').format(TimeFormat)}</Typography.Text>
                  </List.Item>
                )}
              />
            }
          </Space>
        </div>
      </>
    );
  }
}

AvailableSlots.propTypes = {
  loading: PropTypes.bool.isRequired,
  slots: PropTypes.array.isRequired,
  error: PropTypes.object,
};

const mapStateToProps = state => ({
  slots: state.users.slots,
  loading: state.users.loading,
  error: state.users.error,
});

export default connect(mapStateToProps)(withRouter(AvailableSlots));


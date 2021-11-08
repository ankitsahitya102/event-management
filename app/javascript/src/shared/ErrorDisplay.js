import React from "react";
import { Alert } from 'antd';

class ErrorDisplay extends React.Component {

  formatError = (e) => {
    return (
      e.error
    )
  };

  render() {
    const { error } = this.props;
    if (error == null || error === undefined) {
      return '';
    }
    return (
      <Alert message={this.formatError(error)} type="error" style={{ marginBottom: '2em' }} />
    )
  }
}

export default ErrorDisplay
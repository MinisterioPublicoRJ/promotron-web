import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
  componentDidCatch() {
    const { setError } = this.props;
    setError(true);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ErrorBoundary.propTypes = {
  setError: PropTypes.func.isRequired,
};

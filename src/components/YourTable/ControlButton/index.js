import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { Spinner } from '../../index';

const propTypes = {
  isActive: PropTypes.bool,
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isButton: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  buttonPressed: PropTypes.func,
};

const defaultProps = {
  isActive: false,
  isButton: false,
  buttonPressed: null,
};

function ControlButton({ isActive, number, text, isButton, loading, buttonPressed }) {
  if (isButton) {
    if (isActive) {
      return (
        <button
          type="button"
          className="control-button-outer control-button-active"
          onClick={() => buttonPressed()}
        >
          {loading ? <Spinner size="small" /> : <span className="big-number">{number}</span>}
          {text}
        </button>
      );
    }
    return (
      <button
        type="button"
        className="control-button-outer control-button-inactive"
        onClick={() => buttonPressed()}
      >
        {loading ? <Spinner size="small" /> : <span className="big-number">{number}</span>}
        {text}
      </button>
    );
  }
  return (
    <div className="control-button-outer control-button-inactive not-button">
      {loading ? <Spinner size="small" /> : <span className="big-number">{number}</span>}
      {text}
    </div>
  );
}
ControlButton.propTypes = propTypes;
ControlButton.defaultProps = defaultProps;
export default ControlButton;
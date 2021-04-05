import React from 'react';
import PropTypes from 'prop-types';

// import { useAlertsContext } from '../controler/Alerts.context';

function ErrorScreen({ gridArea }) {
  return <div style={{ gridArea }}>OH NO, IT BROKE!</div>;
}

ErrorScreen.propTypes = { gridArea: PropTypes.string.isRequired };
export default ErrorScreen;

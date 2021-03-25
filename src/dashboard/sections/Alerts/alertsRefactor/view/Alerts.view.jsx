import React from 'react';
// import PropTypes from 'prop-types';

import { useAlertsContext } from '../controler/Alerts.context';

function AlertsView() {
  const { hasFatalError } = useAlertsContext();

  if (hasFatalError) {
    return <div style={{ gridArea: 'alerts' }}>I IS BROKENS :(</div>;
  }

  return <div style={{ gridArea: 'alerts' }}>HELLO I AM ALERTS</div>;
}

export default AlertsView;

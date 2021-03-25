import React from 'react';
// import PropTypes from 'prop-types';

import ErrorBoundary from '../../../../../components/refactor/ErrorBoundary';
// import { useAuth } from '../../../../../app/authContext';
import { AlertsProvider, AlertsStoreInitializer } from './Alerts.context';

function AlertsControler({ AlertsView }) {
  const store = AlertsStoreInitializer();
  const { setHasFatalError } = store;

  return (
    <AlertsProvider store={store}>
      <ErrorBoundary setError={setHasFatalError}>
        <AlertsView />
      </ErrorBoundary>
    </AlertsProvider>
  );
}

// AlertsControler.propTypes = { AlertsView: PropTypes.node.isRequired };

export default AlertsControler;

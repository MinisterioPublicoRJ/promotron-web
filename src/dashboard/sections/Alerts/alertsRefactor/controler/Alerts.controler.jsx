import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../../../../../components/refactor/ErrorBoundary/ErrorBoundary';
import ErrorScreen from '../../../../../components/refactor/ErrorScreen/ErrorScreen.view';
// import { useAuth } from '../../../../../app/authContext';
import { AlertsProvider, AlertsStoreInitializer } from './Alerts.context';

function AlertsControler({ AlertsView }) {
  const store = AlertsStoreInitializer();
  const { hasFatalError, setHasFatalError } = store;

  // will run on mount and every time it goes from an error state back to normal
  // this behaviour forces the page to reload when the error page is clicked
  useEffect(() => {
    if (!hasFatalError) {
      loadComponent();
    }
  }, [hasFatalError]);

  function loadComponent() {
    console.log('i was called!');
    // loadAlertCount();
  }

  // function loadAlertCount() {}

  return (
    <AlertsProvider store={store}>
      <ErrorBoundary
        setError={setHasFatalError}
        hasCrashed={hasFatalError}
        errorScreen={<ErrorScreen gridArea="alerts" />}
      >
        <AlertsView />
      </ErrorBoundary>
    </AlertsProvider>
  );
}

AlertsControler.propTypes = { AlertsView: PropTypes.func.isRequired };

export default AlertsControler;

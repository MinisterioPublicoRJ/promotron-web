import React from 'react';
import PropTypes from 'prop-types';

import '../styles.css';
import './styles.css';

import {
  // Alerts,
  PerformanceRadar,
  Today,
  ProcessingTime,
  YourDesk,
  TablesTutela,
} from '../../sections';

import AlertsControler from '../../sections/Alerts/alertsRefactor/controler/Alerts.controler';
import AlertsView from '../../sections/Alerts/alertsRefactor/view/Alerts.view';

const propTypes = {
  setIsSelectorOpen: PropTypes.func.isRequired,
  setModalType: PropTypes.func.isRequired,
  setIsIntroOpen: PropTypes.func.isRequired,
  setModalData: PropTypes.func.isRequired,
  setInvestigatedProfile: PropTypes.func.isRequired,
};

function Tutela({
  setIsSelectorOpen,
  setModalType,
  setIsIntroOpen,
  setModalData,
  setInvestigatedProfile,
}) {
  return (
    <div className="base-grid tutela-grid">
      <Today
        setIsSelectorOpen={setIsSelectorOpen}
        setModalType={setModalType}
        setIsIntroOpen={setIsIntroOpen}
      />
      <YourDesk />
      <PerformanceRadar setModalType={setModalType} setModalData={setModalData} />
      <AlertsControler AlertsView={AlertsView} />
      <ProcessingTime />
      <TablesTutela setInvestigatedProfile={setInvestigatedProfile} />
    </div>
  );
}

Tutela.propTypes = propTypes;
export default Tutela;

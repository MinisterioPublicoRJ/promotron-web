import React from 'react';
import PropTypes from 'prop-types';

import '../styles.css';
import './styles.css';

import {
  Alerts,
  ProcessList,
  PerformanceRadar,
  Today,
  ProcessingTime,
  YourDesk,
} from '../../sections';

const propTypes = { userName: PropTypes.string.isRequired };

function Tutela({ userName }) {
  return (
    <div className="base-grid tutela-grid">
      <Alerts user={userName} />
      <ProcessList user={userName} />
      <PerformanceRadar.Tutela user={userName} />
      <ProcessingTime user={userName} />
      <Today user={userName} />
      <YourDesk user={userName} />
    </div>
  );
}

Tutela.propTypes = propTypes;
export default Tutela;

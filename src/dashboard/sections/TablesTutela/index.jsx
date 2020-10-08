import React, { useEffect, useState } from 'react';
import ProcessList from './ProcessList';
import OngoingInvestigations from './OngoingInvestigations';
import { SectionTitle } from '../../../components';
import './styles.css';

const TablesTutela = () => {
  // eslint-disable-next-line no-shadow
  const [showTables, setshowTables] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleToggle = () => setshowTables(!showTables);

  return (
    <div className="processList-outer">
      <div className="processList-tableWrapper">
        <button onClick={handleToggle} className="button-tables">
          {showTables && (
            <OngoingInvestigations />
          )}
        </button>
        <button onClick={handleToggle} className="button-tables">
          {!showTables && <ProcessList />}
        </button>
      </div>
    </div>
  );
};

export default TablesTutela;
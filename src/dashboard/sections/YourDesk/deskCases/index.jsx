import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { VictoryPie } from 'victory';
import { leftPad } from '../../../../utils';

import './styles.css';

const propTypes = {
  active: PropTypes.bool.isRequired,
  buttonPressed: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.shape({
    under20: PropTypes.shape({ x: PropTypes.string, y: PropTypes.number, color: PropTypes.string }),
    between20And30: PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.number,
      color: PropTypes.string,
    }),
    over30: PropTypes.shape({ x: PropTypes.string, y: PropTypes.number, color: PropTypes.string }),
  }).isRequired,
  name: PropTypes.string.isRequired,
};

const fillerData = [
  { y: 0, color: 'transparent' },
  { y: 0, color: 'transparent' },
  { y: 100, color: 'transparent' },
];

function DeskCasesChart({ active, buttonPressed, category, color, data, name }) {
  const [buttonChartData, setButtonChartData] = useState(fillerData);
  // anti prop, but it's the only way to force VictoryPie to animate
  useEffect(() => {
    if (buttonChartData === fillerData) {
      setButtonChartData(Object.values(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (active) {
    document.documentElement.style.setProperty('--triangleColor', color);
  }
  const activeclass = active ? 'deskCasesChart-button--active' : 'deskCasesChart-button--inactive';
  return (
    <button
      style={{ borderTopColor: color }}
      className={`deskCasesChart-outer ${activeclass}`}
      type="button"
      onClick={() => buttonPressed(category)}
    >
      <div className="deskCasesChart-graph">
        <VictoryPie
          data={buttonChartData}
          animate={{ duration: 2000 }}
          labels={() => null}
          innerRadius={120}
          origin={{ x: 160, y: 165 }}
          style={{
            data: {
              fill: ({ datum }) => datum.color,
            },
          }}
        />
      </div>
      <div className="deskCasesChart-subs">
        <div className="deskCasesChart-count" style={{ color }}>
          {leftPad(data[category].y, 2, 0)}
        </div>
        <div className="deskCasesChart-days" style={{ color }}>
          {name}
        </div>
      </div>
    </button>
  );
}

DeskCasesChart.propTypes = propTypes;
export default DeskCasesChart;

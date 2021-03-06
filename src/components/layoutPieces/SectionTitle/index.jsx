import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  value: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  glueToTop: PropTypes.bool,
};

const defaultProps = {
  subtitle: null,
  glueToTop: false,
};

const SectionTitle = ({ value, subtitle, glueToTop }) => (
  <>
    <h2
      className={`sectionTitle-text ${glueToTop && 'sectionTitle--glued'} ${subtitle &&
        'sectionTitle--withSubs'}`}
    >
      {value.toLocaleUpperCase()}
    </h2>
    {subtitle && <span className="sectionTitle-subtitle">{subtitle}</span>}
  </>
);
SectionTitle.propTypes = propTypes;
SectionTitle.defaultProps = defaultProps;
export default SectionTitle;

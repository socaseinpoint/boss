import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Cell = ({ children, htmlRole }) => {
  const classList = classNames('boss-table__cell', { [`boss-table__cell_role_${htmlRole}`]: htmlRole });
  return (<div className={classList}>{children}</div>);
};

Cell.propTypes = {
  children: PropTypes.node,
  htmlRole: PropTypes.string,
};

Cell.defaultProps = {
  children: '',
  htmlRole: null,
};

export default Cell;

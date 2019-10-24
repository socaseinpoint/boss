import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Table = ({ customClassName, children }) => {
  const classList = classNames('boss-table', { [customClassName]: customClassName });

  return (
    <div className={classList}>
      {children}
    </div>
  );
};

Table.propTypes = {
  customClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Table.defaultProps = {
  customClassName: null,
};

export default Table;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableInfo = ({
  label,
  text,
  textHtmlRole,
  actions,
}) => {
  const textClassList = classNames('boss-table__text', { [`boss-table__text_role_${textHtmlRole}`]: textHtmlRole });

  return (
    <div className="boss-table__info">
      <p className="boss-table__label">
        {label}
      </p>
      {
        text && (
          <div className={textClassList}>
            {text}
          </div>
        )
      }
      {
        actions && (
          <div className="boss-table__actions">
            {actions}
          </div>
        )
      }
    </div>
  );
};

TableInfo.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.node,
  textHtmlRole: PropTypes.string,
  actions: PropTypes.node,
};

TableInfo.defaultProps = {
  textHtmlRole: null,
  text: null,
  actions: null,
};

export default TableInfo;

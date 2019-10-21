import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
  current,
  total,
  handleAction,
  perPage,
}) => (
  <>
    <div className="boss-page-main__count boss-page-main__count_space_large">
      <span className="boss-page-main__count-text">Showing</span>
      <span className="boss-page-main__count-text boss-page-main__count-text_marked">{perPage}</span>
      <span className="boss-page-main__count-text">of</span>
      <span className="boss-page-main__count-text boss-page-main__count-text_marked">{total}</span>
    </div>

    <div className="boss-paginator boss-paginator_position_last">
      <span
        role="presentation"
        onClick={() => handleAction(current - 1)}
        className="boss-paginator__action boss-paginator__action_role_prev boss-paginator__action_state_disabled"
      >
      Previous
      </span>

      <span
        role="presentation"
        onClick={() => handleAction(current)}
        className="boss-paginator__action boss-paginator__action_role_current boss-paginator__action_state_active"
      >
        {current}
      </span>

      <span
        role="presentation"
        onClick={() => handleAction(current + 1)}
        className="boss-paginator__action"
      >
        {current + 1}
      </span>

      <span
        role="presentation"
        onClick={() => handleAction(current + 2)}
        className="boss-paginator__action"
      >
        {current + 2}
      </span>

      <span
        role="presentation"
        onClick={() => handleAction(current + 3)}
        className="boss-paginator__action"
      >
        {current + 3}
      </span>

      <span
        role="presentation"
        onClick={() => handleAction(current + 4)}
        className="boss-paginator__action"
      >
        {current + 4}
      </span>

      <span
        role="presentation"
        className="boss-paginator__action boss-paginator__action_role_delimiter"
      >
      ...
      </span>

      <span
        role="presentation"
        onClick={() => handleAction(total)}
        className="boss-paginator__action boss-paginator__action_role_total"
      >
        {total}
      </span>
      <span
        role="presentation"
        onClick={() => handleAction(current + 1)}
        className="boss-paginator__action boss-paginator__action_role_next"
      >
      Next
      </span>
    </div>
  </>
);

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default Pagination;

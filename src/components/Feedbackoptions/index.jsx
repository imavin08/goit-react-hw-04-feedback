import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedbackoptions.module.css';

const Feedbackoptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnBox}>
      {options.map(name => (
        <button
          className={css.btn}
          key={name}
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default Feedbackoptions;

Feedbackoptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

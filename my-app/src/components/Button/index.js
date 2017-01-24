import React, { PropTypes } from 'react';
import '../../styles/styles.css';

const Button = ({ label, onClickButton }) => {
    return (
        <div className="my-button">
            <button
                onClick={onClickButton}
                className="buttonStyle">
                {label}
            </button>
        </div>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClickButton: PropTypes.func,
};

export default Button;
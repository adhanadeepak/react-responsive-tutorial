import React from 'react';
import PropTypes from 'prop-types';

import './Style/secondaryButton.scss';

function Secondary(props) {
    return (
        <button className={`secondary-btn`} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

Secondary.propTypes = {};
Secondary.defaultProps = {};

export default Secondary;

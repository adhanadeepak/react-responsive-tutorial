import React from 'react';
import PropTypes from 'prop-types';

import './Style/primaryButton.scss';

function Primary(props) {
    return (
        <button className={`primary-btn`} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

Primary.propTypes = {};
Primary.defaultProps = {};

export default Primary;

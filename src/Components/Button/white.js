import React from 'react';
import PropTypes from 'prop-types';

import './Style/whiteBtn.scss'

function White(props) {
    return (
        <div>
            <button className={`white-btn`} onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    );
}

White.propTypes = {};
White.defaultProps = {};

export default White;

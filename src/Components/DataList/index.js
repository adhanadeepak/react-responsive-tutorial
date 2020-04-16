import React from 'react';
import PropTypes from 'prop-types';

import './dataListStyle.scss'

function Index(props) {


    return (
            <details className={`${props.variant === 'blue' ? 'blue-details' : 'gray-details'}`}>
                <summary className={`details-title`}>
                    {props.Title}
                </summary>
                <div className={`details-para`}>
                    {props.children}
                </div>
            </details>
    );
}

Index.propTypes = {};
Index.defaultProps = {
    Title: 'Title'
};

export default Index;

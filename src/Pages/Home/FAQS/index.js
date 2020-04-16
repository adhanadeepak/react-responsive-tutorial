import React from 'react';
import PropTypes from 'prop-types';

import './faqsStyles.scss'

import Heading from 'Components/Heading';
import DataList from 'Components/DataList';
import Button from 'Components/Button';

const Faqs = [
    { title: 'What are the charges for a basic GoMechanic car service in Delhi?', children: 'GoMechanic car service in Delhi starts at just ₹1,999 only. You can book your car service in Delhi on our website\n' +
            'or using the exclusive GoMechanic android app'},
    { title: 'What are the charges for a basic GoMechanic car service in Delhi?', children: 'GoMechanic car service in Delhi starts at just ₹1,999 only. You can book your car service in Delhi on our website\n' +
            'or using the exclusive GoMechanic android app'},
    { title: 'What are the charges for a basic GoMechanic car service in Delhi?', children: 'GoMechanic car service in Delhi starts at just ₹1,999 only. You can book your car service in Delhi on our website\n' +
            'or using the exclusive GoMechanic android app'},
    { title: 'What are the charges for a basic GoMechanic car service in Delhi?', children: 'GoMechanic car service in Delhi starts at just ₹1,999 only. You can book your car service in Delhi on our website\n' +
            'or using the exclusive GoMechanic android app'},
    { title: 'What are the charges for a basic GoMechanic car service in Delhi?', children: 'GoMechanic car service in Delhi starts at just ₹1,999 only. You can book your car service in Delhi on our website\n' +
            'or using the exclusive GoMechanic android app'},
];

function Index(props) {
    return (
        <div className={`width-desktop padding-lr`}>
            <Heading>
                Frequently Asked Questions (FAQs)
            </Heading>
            <div className={`faqs-list`}>
                { Faqs.map((item) => (
                    <DataList varian={`gray`} Title={item.title}>
                        {item.children}
                    </DataList>
                ))}
                <div className={`see-more-btn`}>
                    <Button variant={`white`}>See More</Button>
                </div>
            </div>
        </div>
    );
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;

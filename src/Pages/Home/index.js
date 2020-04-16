import React from 'react';
import './homeStyle.scss';


import Header from './Header';
import ServicesNav from './ServicesNavigation';
import OurServices from './OurServices';
import HowGoMechanicWorks from './HowGoMechanicWorks'
import Benefits from './Benefits';
import Brands from "./Brands";
import CardRow from './CardRow';
import Faqs from './FAQS';
import Services from './ServiceGuide'
import DownloadApp from './DownloadApp';
import Footer from './Footer';
import StickyForm from './StickyForm';

const Index = (props) => {
    return (
        <div className={`app-container`}>
            <Header/>
            <ServicesNav/>
            <OurServices/>
            <HowGoMechanicWorks/>
            <Benefits/>
            <Brands title={`Our Brands`} subtitle/>
            <Brands title={`Our Partners`} />
            <CardRow title={`Fleet of Cars?`} buttonText={`987654321`}/>
            <CardRow title={`Looking for Custom Repairs for your Car in NCR?`} buttonText={`Give Requirements`}/>
            <Faqs/>
            <Services/>
            <DownloadApp/>
            <Footer/>
            <StickyForm/>

        </div>
    );
};

export default Index;

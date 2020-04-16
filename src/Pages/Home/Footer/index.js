import React from 'react';
import PropTypes from 'prop-types';

import './footerStyle.scss';
import WhiteLogo from '../../../Assets/Images/white-logo.png';
import PlayStore from 'Assets/Images/play.png';
import AppStore from 'Assets/Images/app-store.png';
import Phone from 'Assets/Images/phone.png';
import Mail from 'Assets/Images/envelope.png';
import Calendar from 'Assets/Images/calendar.png';
import Clock from 'Assets/Images/clock.png';
import facebook from 'Assets/Images/facebook.png';
import Insta from 'Assets/Images/instagram.png';
import Twitter from 'Assets/Images/twitter.png';
import WhatsApp from 'Assets/Images/whatsapp.png';
import DataList from "Components/DataList";


const AboutUs = ['company', 'blog', 'Faqs', 'Contact us', 'Terms & Condition', 'Privacy Policy', 'GoMechanic Partners'];
const OurServices = [
    'Car Service',
    'Car Cleaning,',
    'Wheel Alignment & Balancing',
    'Custom Repairs',
    'Denting and Painting',
    'Accessories',
    'Insurance'];
const Luxury = [
    'Mercedes',
    'Bmw',
    'Audi',
    'Volvo',
    'Mitsubishi',
    'Jaguar',
    'Porsche'
];
const PopularBrands = [
    'Maruti Suzuki',
    'Hyundai',
    'Honda',
    'Toyota',
    'Tata',
    'Mahindra',
    'Chevrolet'
];
const PopularLinks = [
    'Garage Near Me in Shubhash Chowk',
    'Garage Near Me in Sohna Road',
    'Garage Near Me in DLF Phase 2',
    'Garage Near Me in Golf Course Road',
    'Garage Near Me in DLF Phase'
];

const List = (props) => {

    return(
        <div className={`list-container`}>
            <DataList variant={`blue`} Title={props.title}>
                <ul className={`list-style-none no-padding`}>
                    {props.list.map(item =>(
                        <li>{item}</li>
                    ))}
                </ul>
            </DataList>
            <div className={`hide-on-mobile`}>
                <h5 className={`list-title`}>{props.title || 'title'}</h5>
                <ul className={`list-style-none no-padding`}>
                    {props.list.map(item =>(
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )

};


function Index(props) {
    return (
        <div  id={`footer`} className={`footer`}>
           <div className={`top-footer flex-col-mobile`}>
               <List title={`about us`} list={AboutUs}/>
               <List title={`Our Services`} list={OurServices}/>
               <List title={`Luxury Brands`} list={Luxury}/>
               <List title={`Popular Brands`} list={PopularBrands}/>
               <List title={`Popular Links`} list={PopularLinks}/>
           </div>
            <div className={`bottom-footer `}>
                <div className={`first-footer flex-col-mobile`}>
                    <div className={`wrapper`}>
                        <div className={`car-img`}>
                            <img src={WhiteLogo} alt=""/>
                        </div>
                        <p className={`text-left`}>3rd Floor,Landmark Tower,Moti Vihar,Ashok Marg,
                            South City 1,Sector 41,Gurugram, Haryana 122001</p>
                    </div>
                    <div className={`flex-on-mobile flex-between-mobile`}>
                        <ul className={`link-list list-style-none no-padding flex flex-col`}>
                            <li>
                                <img src={Mail} alt="" className={`email`}/>
                                Email
                            </li>
                            <li>
                                <img src={Phone} className={`phone`} alt=""/>
                                Phone Number
                            </li>
                            <li>
                                <img src={Calendar} alt="" className={`calendar`}/>
                                Working Days
                            </li>
                            <li>
                                <img src={Clock} alt="" className={`clock`}/>
                                Working Hours
                            </li>
                        </ul>
                        <ul className={`list-style-none text-left no-padding flex flex-col`}>
                            <li>Info@goMechanic.in</li>
                            <li>8398970970</li>
                            <li>Monday - Sunday</li>
                            <li>7:00AM - 9:00PM(IST)</li>
                        </ul>
                    </div>

                    <div className={`last-item flex flex-col`}>
                        <h5>Download The App!</h5>
                        <div className={`flex-on-mobile`}>
                            <img src={PlayStore} className={`play-store`}></img>
                            <img  src={AppStore} className={`app-store`}></img>
                        </div>
                    </div>
                </div>
                <div className={`last-footer flex-col-mobile`}>
                   <h5>2019 Targetone Innovations Pvt. Ltd.</h5>
                   <div className={`social-icons`}>
                       <img src={facebook} alt="" className={`icon`}/>
                       <img src={Insta} alt="" className={`icon`}/>
                       <img src={Twitter} alt="" className={`icon`}/>
                       <img src={WhatsApp} alt="" className={`icon`}/>
                   </div>
                </div>
            </div>
        </div>
    );
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;

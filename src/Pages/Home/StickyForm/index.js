import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import './stickyForm.style.scss'
import Button from 'Components/Button';
import Star from 'Assets/Images/star.svg';

function Index(props) {


    const onScroll = (e) => {
        // console.log(e);
        let sticky = document.getElementById('sticky-form');
        let footer = document.getElementById('footer');

        if(footer.getBoundingClientRect().top > 910){
            sticky.classList.remove('hidden');

        }
        else{
            sticky.classList.add('hidden');
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', onScroll);
        return (()=> {
            window.removeEventListener('scroll', onScroll);
        })
    });

    return (
        <div className={`sticky-form`} id={`sticky-form`}>
            <div className={`form-group text-left`}>
                    <div className={`w-full`}>
                        <h2 className={`title`}>The Best Card Service Awaits You</h2>
                        <h5 className={`sub-title `}>Get instant quotes for your car service
                            in <span className={`color-is-red`}>Gurgaon</span></h5>
                    </div>
                    <div className={`input-wrapper w-full`}>
                        <select name="select-your-car" id="select-car" placeholder={`Select your car`} value={`3`} className={`select`}>
                            <option value="">Select your car</option>
                        </select>
                        <div className={`number-wrapper`}>
                            <input type="number" className={`enter-number-input`} placeholder={`Enter Mobile Number`}/>
                        </div>

                    </div>
                    <div className={`submit-btn-wrapper w-full`}>
                        <Button>CHECK PRICE</Button>
                    </div>
                    <div className={`rating w-full`}>
                        <div className={`wrapper`}>
                            <h5 className={`rating-text star`}>
                        <span id={`star-five`}>
                            <img src={Star} alt=""/>
                            </span>
                                4.7/5
                            </h5>
                            <p>Base on 500+</p>
                            <p>Reviews</p>
                        </div>
                        <div className={`wrapper`}>
                            <h5 className={`rating-text`}>2,50,000+</h5>
                            <p>Car Serviced</p>
                            <p>& Repaired</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;

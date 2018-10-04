import React from 'react';
import './form.css';
const FormLeft=()=>{
    return(
        <div className="left"
                style={{
                    background:`url('/images/backgrounds/form.jpg')`
                }}
            >
                <li>Access Booking Related Information</li>
                <li>Cancel Booking</li>
                <li>Use Hooti Money to get upto 50% off</li>
            </div>
    )
}

export default FormLeft;
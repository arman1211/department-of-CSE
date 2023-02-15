import React from 'react';
import './Student.css'

const Student = (props) => {
    const { name, img, address, email } = props.student;
    return (
        <div className='student-details'>
            <div className="student-img">
                <img src={img} alt="" />

            </div>
            <div className="student-description">
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
                <p><small>Address: {address}</small></p>


            </div>
        </div>
    );
};

export default Student;
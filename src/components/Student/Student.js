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


                <h5> {name}</h5>
                <p className='email'>Email: {email}</p>
                <p><small>Address: {address}</small></p>



                <div className="button-section">
                    <button className='btn btn-success'>View Profile</button>
                </div>


            </div>
        </div>
    );
};

export default Student;
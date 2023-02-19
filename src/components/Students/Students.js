import React, { useEffect, useState } from 'react';
import Student from '../Student/Student';
import './Students.css';

const Students = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("students.json")
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    return (
        <div className='students-container'>
            {

                students.map(student => <Student student={student}></Student>)

            }
        </div>
    );
};

export default Students;
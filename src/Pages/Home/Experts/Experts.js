import React from 'react';
import './Experts.css';
import Expert from '../Expert/Expert';
import experts1 from '../../../images/experts/expert-1.jpg';
import experts2 from '../../../images/experts/expert-2.jpg';
import experts3 from '../../../images/experts/expert-3.jpg';
import experts4 from '../../../images/experts/expert-4.jpg';
import experts5 from '../../../images/experts/expert-5.jpg';
import experts6 from '../../../images/experts/expert-6.png';

const experts = [
    {id: 1, name: 'will smith', img: experts1},
    {id: 2, name: 'rock', img: experts2},
    {id: 3, name: 'chris', img: experts3},
    {id: 4, name: 'merara', img: experts4},
    {id: 5, name: 'jibon', img: experts5},
    {id: 6, name: 'smith', img: experts6}
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h1 className='text-primary text-center mt-5'>Our Experts</h1>
            <div className='row'>
            {
                experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
            }
            </div>
        </div>
    );
};

export default Experts;
import React from 'react';
import './Experts.css';

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
        <div>
            <h1 className='experts-title'>Our Experts</h1>
        </div>
    );
};

export default Experts;
import React from 'react';

import './index.less';

export const ExerciseCell = ({ index, name, count, description }) => {

    return (
        <div className='ExerciseCell'>
            <div className='ExerciseDetail'>
                <div className='title'>
                    <h2>{index}</h2>
                </div>
                <div>
                    <h3>{name}</h3>
                    <h4>{count}</h4>
                    <p>{description}</p>
                </div>
            </div>
            <img alt='shit' src='https://www.bodybuilding.com/exercises/exerciseImages/sequences/3331/Male/m/3331_1.jpg' />
        </div>
    )
}
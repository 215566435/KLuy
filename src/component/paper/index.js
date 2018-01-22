import React from 'react';

import './index.less';
import { ExerciseCell } from '../ExerciseCell/index';

export const Paper = (props) => {

    return (
        <div className='Paper'>
            <h1>什么是掘金小册</h1>
            <ExerciseCell index='1' name='哑铃我腿' description='3组 12下' />
            <ExerciseCell index='2' name='哑铃我腿' description='3组 12下' />
            <ExerciseCell index='3' name='哑铃我腿' description='3组 12下' />
        </div>
    )
}
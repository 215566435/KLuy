import React from 'react';

import './index.less';
import { ExerciseCell } from '../ExerciseCell/index';

export const Paper = (props) => {

    return (
        <div className='Paper'>
            <h1>减脂捷径</h1>
            <ExerciseCell index='1' name='哑铃卧推' count='4组 12下' description='3组 12下' />
            <ExerciseCell index='2' name='哑铃飞鸟' count='3组 12下' description='3组 12下' />
            <ExerciseCell index='3' name='哑铃下斜卧推' count='3组 12下' description='3组 12下' />
            <ExerciseCell index='4' name='绳索下拉' count='3组 12下' description='3组 12下' />
            <ExerciseCell index='5' name='哑铃颈后提拉' count='3组 12下' description='3组 12下' />
            <ExerciseCell index='6' name='卷腹' count='3组 12下' description='3组 12下' />
        </div>
    )
}
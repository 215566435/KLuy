import React from 'react';
import { Steps } from 'antd';
import { DetailLayout } from '../../component/Layout';
import { Paper } from '../../component/paper/index';
const Step = Steps.Step;

export const Plan = () => {
    return <DetailLayout
        Head='header'
        Side={
            <Steps direction="vertical" current={3}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        }
        Contents={<Paper />}
    />
}


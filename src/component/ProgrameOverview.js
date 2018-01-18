import React from 'react';

import './ProgramOverview.less'

export class ProgrameOverview extends React.Component {

    render() {

        return (
            <div className='ProgrameOverview'>
                <div className="img">
                    <img alt='123' src='https://www.bodybuilding.com/images/2017/november/shortcut-to-shred-overview-header-box1-830x467.jpg' />
                </div>
                <div className='text-content'>
                    <h2>6 Weeks of Workouts</h2>
                    <p>6 WORKOUTS PER WEEK / 45-60 MIN. WORKOUT</p>
                    <br />
                    <p>From the labs of Yale University to the most hardcore gyms in America,
                    Jim Stoppani has devoted his entire career to the science of building muscle and burning
                    fat. He's helped millions transform their lives, and now it's your turn!
                    </p>
                </div>
            </div>
        )
    }
}
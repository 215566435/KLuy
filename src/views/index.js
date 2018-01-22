
import React from 'react';
import { Layout } from 'antd';


import './index.css';
import { ProgrameOverview } from '../component/ProgrameOverview';
import { Grid } from '../component/Grid';




const { Header, Footer, Content } = Layout;


const props = {
    title: '持续6周的训练计划',
    subTitle: '每周训练6天/每天45-60分钟的快速减脂计划',
    description: "经过作者（方正）本人亲身实验长达2年的减脂训练计划。采用有氧+无氧相互结合的训练方式，具有，高效、快速、省时等优点，极其适合没有什么时间的上班族/IT人士（比如我） "
}
const props2 = {
    title: '最有效的减脂方式与实践结合',
    subTitle: '燃脂、省时、但是宛如身处地狱',
    description: "有得必有失，既然是省时，高效、快速的训练，那必然是因为这份计划并不容易。不容易代表的就是会比以往的计划更加辛苦一些。不过别担心，最困难的将会是第一第二周而已！"
}
const props3 = {
    title: '饮食指导',
    subTitle: '作者（方正）个人饮食表/制作健身饮食的原则',
    description: "饮食永远是减肥的关键的关键，大部分人高强度运动没减肥下来的原因就是因为他们没有做好饮食。诚然，做好饮食不代表着饿肚子、不能吃好吃的，当我们了解到基本的饮食计划制作原则以后，剩下来的可以自由发挥"
}

const props4 = {
    title: '补剂/心态指导',
    subTitle: '补剂作用只占据5%，但是心态往往比饮食还重要',
    description: "补剂主要以蛋白粉、维生素、咖啡因为主。减脂的时候，蛋白质需要摄入相对高一些，但是以中国人的饮食习惯和肉类的价格，真不如一桶蛋白粉来得实惠。咖啡因主要是能提高你在减脂期间的运动能力，以达到“少吃了也能动起来”的目的。心态非常重要，如何调整心态成为了减脂期最大的困难"
}


export const TrainNote = () => (
    <Layout>
        <Header>Header</Header>
        <Content>

            <div className='banner' >
                <img alt='shit' src='https://www.bodybuilding.com/images/2017/november/shortcut-to-shred-1920x600-desktop.jpg' />
            </div>
            <div style={{ background: '#fff', minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='content-container'>
                <Grid
                    dataSet={
                        [<ProgrameOverview {...props} />, <ProgrameOverview {...props2} />, <ProgrameOverview {...props3} />, <ProgrameOverview {...props4} />]
                    }
                />
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>转载署名出处：方正，知乎</Footer>
    </Layout>
)


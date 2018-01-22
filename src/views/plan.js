import React from 'react';
import { Steps } from 'antd';
import { Layout } from 'antd';

const { Header, Footer, Content, Sider } = Layout;
const Step = Steps.Step;

export const Plan = () => {
    return (
        <Layout style={{ height: '100%' }}>
            <Header>Header</Header>
            <Layout style={{ height: '100%' }}>
                <Sider width={320} style={{ background: '#fff' }}>
                    <div style={{ padding: 24 }}>
                        <Steps direction="vertical" current={3}>
                            <Step title="Finished" description="This is a description." />
                            <Step title="In Progress" description="This is a description." />
                            <Step title="Waiting" description="This is a description." />
                        </Steps>
                    </div>
                </Sider>
                <Layout style={{ padding: '24px 24px 24px' }}>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px' }}>
                        <h1>什么是掘金小册</h1>
                        <p>
                            开发者会消费各种各样的内容，例如资讯、问答讨论、经验文章、最佳实践、开源库、文档等等，每一种内容都有自己的消费场景和它背后的真实需求，掘金作为一个帮助开发者成长的社区一直专注于如何更好地满足开发者这些内容消费需求。

但是只有碎片化的内容是不足以完成读者系统性学习的需求的，尤其是无法帮助那些有明确需求并渴望尽快知道完整答案的读者。以“如何准备 BAT 校招面试？”这是一个可以找到成千上万文章的问题，作为一个即将毕业的软件学院的学生，也是一个明确的需求。可是，网络中无穷无尽的博客文章、知乎万赞回答、微信爆款头条是无法系统性地帮助一个年轻学生清清楚楚地找到这个问题答案的。

需要一本厚重大部头的书吗？似乎成本太高；一些散乱的文章呢？肯定不够；那怎样的内容才是我们想要的，才是可以帮助到读者的呢？而另外一端，是否有作者有能力写出这样的文章？他们是否得到了应有的财务回报呢？如果出版一本书籍是否时间成本过高？

基于这样的思考，我们想要通过一个产品去解决这个问题，而它就是：掘金小册

技术内容的载体
我们把开发者需要的内容如下排列：...

https://juejin.im
掘金 — 一个帮助开发者成长的社区

                        </p>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

/**
 * @file Example / Tabs
 * @author cxtom<cxtom2010@gmail.com>
 */

import React from 'react';
import Tabs from 'melon/Tabs';
import Title from 'melon/Title';

require('../code/Tabs.txt');

const TabsExample = React.createClass({

    render() {

        return (
            <Tabs selectedIndex={1}>
                <Tabs.Tab label="Tab A" id="Tab1">
                    <Title level={1}>Tab A</Title>
                    <p>This is Tab A</p>
                </Tabs.Tab>
                <Tabs.Tab label="Tab B">
                    <Title level={1}>Tab B</Title>
                    <p>
                        百度（Nasdaq：BIDU）是全球最大的中文搜索引擎、最大的中文网站。
                        2000年1月由李彦宏创立于北京中关村，致力于向人们提供“简单，可依赖”的信息获取方式。
                        “百度”二字源于中国宋朝词人辛弃疾的《青玉案·元夕》词句“众里寻他千百度”，
                        象征着百度对中文信息检索技术的执著追求。
                    </p>
                    <p>
                        2015年1月24日，百度创始人、董事长兼CEO李彦宏在百度2014年会暨十五周年庆典上发表的主题演讲中表示，
                        十五年来，百度坚持相信技术的力量，始终把简单可依赖的文化和人才成长机制当成最宝贵的财富，
                        他号召百度全体员工，向连接人与服务的战略目标发起进攻。2015年11月18日，百度与中信银行发起设立百信银行。
                    </p>
                </Tabs.Tab>
                <Tabs.Tab label="Tab C">This is Tab C</Tabs.Tab>
                <Tabs.Tab label="被禁用的Tab" disabled />
            </Tabs>
        );
    }

});

export default TabsExample;
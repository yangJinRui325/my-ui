<template>
    <el-container class="index-wrapper">
        <el-header class="index-header">自己玩</el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    :default-active="curMenu"
                    active-text-color="#ffd04b">
                    <el-submenu index="display">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>展示组件</span>
                        </template>
                        <el-menu-item index="marquee">marquee</el-menu-item>
                        <el-menu-item index="tree">tree</el-menu-item>
                        <el-menu-item index="element-tree">element-tree</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main class="main-wrapper">
                <div class="mw__so-marquee" v-if="curMenu === 'marquee'">
                    <so-marquee
                        :data="marqueeData"
                        :height="200"
                        :showNumber="5"
                        :speed="500"
                        class="my-ui-marquee"
                        @handleClick="handleMarqueeClick"
                    >
                        <template v-slot:itemCon="{item}">
                            <div>{{ item.id }}</div>
                            <div>{{ item.name }}</div>
                            <div>{{ item.date }}</div>
                        </template>
                    </so-marquee>

                    <so-marquee
                        :data="marqueeData"
                        :height="200"
                        :showNumber="4"
                        :speed="500"
                        class="my-ui-marquee"
                        @handleClick="handleMarqueeClick"
                    >
                        <template v-slot:itemCon="{item}">
                            <div>{{ item.id }}</div>
                            <div>{{ item.name }}</div>
                            <div>{{ item.date }}</div>
                        </template>
                    </so-marquee>
                </div>
                <div class="mw__sw-tree" v-if="curMenu === 'tree'">
                    <sw-tree1 class="mw__sw-tree-wrapper"></sw-tree1>
                </div>
                <div class="mw__sw-tree" v-if="curMenu === 'element-tree'">
                    <sw-tree
                        ref="swTree"
                        :data="treeData1"
                        :show-line="true"
                        :show-checkbox="false"
                        :show-select-icon="true"
                        :expand-on-click-node="false"
                        :highlight-current="true"
                        draggable
                    >
                        <span slot-scope="{ node }">
                            <span>自定义-{{ node.label }}</span>
                        </span>
                    </sw-tree>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import soMarquee from '@/components/display/so-marquee'
import swTree from '@/components/display/tree/sw-tree'
import swTree1 from '@/components/display/tree/sw-tree1'

export default {
    name: 'index',
    components: {
        soMarquee,
        swTree,
        swTree1
    },
    props: {},
    data() {
        return {
            curMenu: 'tree',

            marqueeData: [
                {
                    id: 1,
                    name: "开会通知",
                    date: "2020-02-01"
                },
                {
                    id: 2,
                    name: "放假通知",
                    date: "2020-02-02"
                },
                {
                    id: 3,
                    name: "停水通知",
                    date: "2020-02-03"
                },
                {
                    id: 4,
                    name: "停电通知",
                    date: "2020-02-04"
                },
                {
                    id: 5,
                    name: "停车通知",
                    date: "2020-02-05"
                },
                {
                    id: 6,
                    name: "奖励通知",
                    date: "2020-02-06"
                },
                {
                    id: 7,
                    name: "处分通知",
                    date: "2020-02-07"
                },
                {
                    id: 8,
                    name: "处分8通知",
                    date: "2020-02-08"
                },
                {
                    id: 9,
                    name: "处分9通知",
                    date: "2020-02-09"
                },
                {
                    id: 10,
                    name: "处分10通知",
                    date: "2020-02-10"
                },
            ],

            treeData: [
                {
                    label: '一级 1',
                    children: [
                        {
                            label: '二级 1-1',
                            children: [
                                {
                                    label: '三级 1-1-1',
                                    children: []
                                },
                                {
                                    label: '三级 1-1-2',
                                    children: []
                                },
                                {
                                    label: '三级 1-1-3',
                                    children: []
                                }
                            ]
                        },
                        {
                            label: '二级 1-2',
                            children: [
                                {
                                    label: '三级 1-2-1',
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '一级 2',
                    children: [
                        {
                            label: '二级 2-1',
                            children: [
                                {
                                    label: '三级 2-1-1',
                                    children: []
                                },
                                {
                                    label: '三级 2-1-2',
                                    children: [
                                        {
                                            label: '四级 2-1-2-1',
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: '二级 2-2',
                            children: [
                                {
                                    label: '三级 2-2-1',
                                    children: []
                                },
                                {
                                    label: '三级 2-2-2',
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '一级 3',
                }
            ],
            treeData1: [
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "id": "12",
                                    "label": "aa",
                                    "open": "false"
                                },
                                {
                                    "id": "14d32f323c3f393e7e7dc11c5c76ea36",
                                    "label": "王企鹅",
                                    "open": "false"
                                },
                                {
                                    "id": "1670bff29aa91b9a8d0aa86c9b6b195b",
                                    "label": "测试3",
                                    "open": "false"
                                },
                                {
                                    "id": "4673c6eee0c6300e2aca1294c4543c23",
                                    "label": "我是",
                                    "open": "false"
                                },
                                {
                                    "id": "743bb731f861436c001997a2cdf2c97c",
                                    "label": "熊",
                                    "open": "false"
                                }
                            ],
                            "label": "基础信息",
                            "id": 201001,
                            "open": "false"
                        },
                        {
                            "children": [
                                {
                                    "id": "177f8165d40f50a4cc2b19c43c2f5f21",
                                    "label": "noise",
                                    "open": "false"
                                },
                                {
                                    "id": "2df071bd6941adf7f58da29edba25fdb",
                                    "label": "适宜2",
                                    "open": "false"
                                },
                                {
                                    "id": "3e7171061352e04ae4b01375d10008fd",
                                    "label": "dsadasd",
                                    "open": "false"
                                }
                            ],
                            "label": "用能信息",
                            "id": 201002,
                            "open": "false"
                        },
                        {
                            "children": [
                                {
                                    "id": "87caeabe45543f72f2498da8a2fa2fa5",
                                    "label": "就没那么",
                                    "open": "false"
                                },
                                {
                                    "id": "8f40843bdb7239c31577154826b25a23",
                                    "label": "新增1",
                                    "open": "false"
                                },
                                {
                                    "id": "aaf3f961834fd4e5b3ffef4caaa82a4d",
                                    "label": "看看",
                                    "open": "false"
                                }
                            ],
                            "label": "能源控制系统",
                            "id": 201003,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "用户需求",
                            "id": 201004,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "我的",
                            "id": 201006,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "试试",
                            "id": 201007,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "最后",
                            "id": 201007,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "饿",
                            "id": 201009,
                            "open": "false"
                        }
                    ],
                    "label": "用户级调研",
                    "id": 2010,
                    "open": "false"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "label": "采集系统",
                            "id": 202001,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "配电系统",
                            "id": 202002,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "暖通",
                            "id": 202003,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "照明",
                            "id": 202004,
                            "open": "false"
                        },
                        {
                            "children": [
                                {
                                    "id": "3b929734984d6bff30c71519c729a1ef",
                                    "label": "光伏电站发电补贴电价",
                                    "open": "false"
                                },
                                {
                                    "id": "50a91e08943a670abece489dd2ac1090",
                                    "label": "光伏电站面积",
                                    "open": "false"
                                },
                                {
                                    "id": "597ad106e5c0f7cf24363d0815eeaffc",
                                    "label": "光伏电站投资预估单价",
                                    "open": "false"
                                },
                                {
                                    "id": "90524c84cc965d37923f221218caca8f",
                                    "label": "光伏电站发电工商电价",
                                    "open": "false"
                                },
                                {
                                    "id": "e86e751fcad8568e3b6dc769312b80f3",
                                    "label": "光伏电站所在地级市",
                                    "open": "false"
                                },
                                {
                                    "id": "e86e751fcad8568e3b6dc769312b80f4",
                                    "label": "光伏电站所在地级市类别",
                                    "open": "false"
                                }
                            ],
                            "label": "光储充",
                            "id": 202005,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "分布式能源",
                            "id": 202006,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "给排水",
                            "id": 202007,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "电梯",
                            "id": 202008,
                            "open": "false"
                        }
                    ],
                    "label": "系统级调研",
                    "id": 2020,
                    "open": "false"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "label": "采集系统",
                            "id": 203001,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "配电系统",
                            "id": 203002,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "暖通",
                            "id": 203003,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "照明",
                            "id": 203004,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "光储充",
                            "id": 203005,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "分布式能源",
                            "id": 203006,
                            "open": "false"
                        },
                        {
                            "children": [],
                            "label": "给排水",
                            "id": 203007,
                            "open": "false"
                        },
                        {
                            "children": [
                                {
                                    "label": "电梯1",
                                    "id": 2030081,
                                    "open": "false"
                                }
                            ],
                            "label": "电梯",
                            "id": 203008,
                            "open": "false"
                        }
                    ],
                    "label": "设备级调研",
                    "id": 2030,
                    "open": "false"
                }
            ]
        }
    },
    computed: {},
    watch: {},
    mounted: function () {

    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(key) {
            this.curMenu = key
            this.$nextTick(() => {
                console.log(this.$refs.swTree)
            })
        },


        handleMarqueeClick(row) {
            alert(`当前点击的第${ row.id }行`)
        },
    }
}
</script>

<style scoped lang="scss">
    .index-wrapper {
        width: 100%;
        height: 100%;
    }

    .index-header {
        line-height: 60px;
        text-align: center;
        background: rgb(94, 102, 112);
        color: #fff;
    }

    .main-wrapper {

    }

    .my-ui-marquee {
        margin-bottom: 20px;
    }

    .mw__sw-tree-wrapper {
        width: 300px;
    }


</style>

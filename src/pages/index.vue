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
                    <sw-tree class="mw__sw-tree-wrapper"></sw-tree>
                </div>
                <div class="mw__sw-tree" v-if="curMenu === 'element-tree'">
                    <el-tree
                        class="tree-line"
                        icon-class="el-icon-circle-plus-outline"
                        :indent="0"
                        :data="data"
                    ></el-tree>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import soMarquee from '@/components/display/so-marquee'
import swTree from '@/components/display/tree/sw-tree'

export default {
    name: 'index',
    components: {
        soMarquee,
        swTree
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

            data: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1'
                    }]
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
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
        },

        handleNodeClick(data) {
            console.log(data);
        },


        handleMarqueeClick(row) {
            alert(`当前点击的第${ row.id }行`)
        }
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
// 以下为scss，记得去掉scoped，或者使用/deep/
<style lang="scss">
    .tree-line {
        .el-tree-node {
            position: relative;
            padding-left: 16px; // 缩进量
        }

        .el-tree-node__children {
            padding-left: 16px; // 缩进量
        }

        // 竖线
        .el-tree-node::before {
            content: "";
            height: 100%;
            width: 1px;
            position: absolute;
            left: -3px;
            top: -26px;
            border-width: 1px;
            border-left: 1px dashed #52627C;
        }

        // 当前层最后一个节点的竖线高度固定
        .el-tree-node:last-child::before {
            height: 38px; // 可以自己调节到合适数值
        }

        // 横线
        .el-tree-node::after {
            content: "";
            width: 24px;
            height: 20px;
            position: absolute;
            left: -3px;
            top: 12px;
            border-width: 1px;
            border-top: 1px dashed #52627C;
        }

        // 去掉最顶层的虚线，放最下面样式才不会被上面的覆盖了
        & > .el-tree-node::after {
            border-top: none;
        }

        & > .el-tree-node::before {
            border-left: none;
        }

        // 展开关闭的icon
        .el-tree-node__expand-icon {
            font-size: 16px;
            // 叶子节点（无子节点）
            &.is-leaf {
                color: transparent;
                // display: none; // 也可以去掉
            }
        }
    }
</style>

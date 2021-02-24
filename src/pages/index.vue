<template>
    <el-container class="index-wrapper">
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-submenu index="display">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>展示组件</span>
                        </template>
                        <el-menu-item index="marquee">marquee</el-menu-item>
                        <el-menu-item index="marquee22">marquee22</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main class="main-wrapper">
                <div class="mw__so-marquee" v-if="curMenu === 'marquee'">
                    <so-marquee
                        :data="jsonData"
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
                        :data="jsonData"
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
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import soMarquee from '@/components/display/so-marquee'

export default {
    name: 'index',
    components: {
        soMarquee
    },
    props: {},
    data() {
        return {
            curMenu: '',

            jsonData: [
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
            jsonData2: [
                {
                    id: 11,
                    name: "开会通知",
                    date: "2020-02-01"
                },
                {
                    id: 21,
                    name: "放假通知",
                    date: "2020-02-02"
                },
                {
                    id: 31,
                    name: "停水通知",
                    date: "2020-02-03"
                },
                {
                    id: 41,
                    name: "停电通知",
                    date: "2020-02-04"
                },
                {
                    id: 51,
                    name: "停车通知",
                    date: "2020-02-05"
                },
                {
                    id: 61,
                    name: "奖励通知",
                    date: "2020-02-06"
                },
            ],

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

    .main-wrapper {

    }

    .my-ui-marquee {
        margin-bottom: 20px;
    }
</style>

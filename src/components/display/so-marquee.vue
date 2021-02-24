<template>
    <div
        class="marquee-wrapper"
        :style="{ width: realWidth + 'px' }"
    >
        <div
            class="marquee-container"
            :style="{ height: realHeight + 'px' }"
            :class="className"
        >
            <ul
                ref="marqueeCon"
                :id="tooltipId"
                class="marquee-content"
                :class="{ anim: animate === true}"
                @mouseenter="handleStop()"
                @mouseleave="handleUp()"
            >
                <li
                    v-for="(item,index) in realData"
                    :key="`${tooltipId}-${item.id}-${index}`"
                    class="marquee-item"
                    :style="{ height: itemHeigth + 'px' }"
                    @click="handleClick(item)"
                >
                    <slot name="itemCon" :item="item"></slot>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { parseToNum, generateId } from '@/utils/util'

export default {
    name: "so-marquee",
    props: {
        /*
        * 可接受传参
        * data          列表数据
        * className     自定义类名
        * width         列表宽度，默认值：400
        * height        列表高度,默认值：200
        * showNumber    可视的条目数，默认值：5
        * speed         轮播速度，默认值：1000
        * */
        //列表数据
        data: {
            type: Array,
            default: () => [],
        },
        //自定义类名
        className: String,
        //列表宽度，默认值：400
        width: {
            type: [Number, String],
            default: 400
        },
        //列表高度,默认值：200
        height: {
            type: [Number, String],
            default: 200
        },
        //可视的条目数，默认值：5
        showNumber: {
            type: [Number, String],
            default: 5
        },
        //轮播速度，默认值：1000
        speed: {
            type: [Number, String],
            default: 1000
        }
    },
    data() {
        return {
            intnum: undefined,
            animate: false
        };
    },
    computed: {
        tooltipId() {
            return `marquee-con-${ generateId() }`;
        },
        realWidth() {
            return parseToNum(this.width)
        },
        realHeight() {
            return parseToNum(this.height)
        },
        realShowNumber() {
            return parseToNum(this.showNumber)
        },
        realSpeed() {
            return parseToNum(this.speed) < 1000 ? 1000 : parseToNum(this.speed)
        },
        itemHeigth() {
            return this.realHeight / this.realShowNumber
        },
        realData() {
            return JSON.parse(JSON.stringify(this.data))
        }
    },
    mounted() {
        if (this.realData.length > this.realShowNumber) {
            this.scrollUp();
        }
    },
    methods: {
        scrollUp() {
            // eslint-disable-next-line no-unused-vars
            this.intnum = setInterval(_ => {
                this.animate = true;
                setTimeout(() => {
                    this.realData.push(this.realData[0]);   // 将数组的第一个元素添加到数组的
                    this.realData.shift();               //删除数组的第一个元素
                    this.animate = false;           // margin-top 为0 的时候取消过渡动画，实现无缝滚动
                }, this.realSpeed / 2)
                this.$once('hook:beforeDestroy', () => {
                    this.cleanup()
                })
            }, this.realSpeed);
        },
        handleStop() {
            this.cleanup()
        },
        handleUp() {
            this.scrollUp();
        },
        handleClick(row) {
            this.$emit('handleClick', row)
        },
        cleanup() {
            if (this.intnum) {
                clearInterval(this.intnum);
                this.intnum = null;
            }
        }
    },
    beforeDestroy() {
        this.cleanup();
    },
    deactivated() {
        this.cleanup();
    },
    watch: {
        animate(flag) {
            this.marqueeCon = this.$refs.marqueeCon
            if (flag) {
                this.marqueeCon.style.marginTop = `-${ this.itemHeigth }px`
            } else {
                this.marqueeCon.style.marginTop = 0
            }
        },
    }
};
</script>
<style scoped lang="scss">
    .marquee-container {
        overflow: hidden;
    }

    .marquee-content {
        position: relative;
    }

    .anim {
        transition: all 0.5s;
    }

    .marquee-item {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>

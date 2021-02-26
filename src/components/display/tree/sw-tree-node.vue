<template>
    <li
        class="sw-tree-node"
        :class="{
            'is-top': nodeData.isTop,
            'is-bot': nodeData.isBot,
        }"
    >
        <div class="sw-tree-node__content">
            <span
                class="sw-tree-node__expand-icon"
                :class="{
                    'is-top-icon': nodeData.isTop,
                    'is-bot-icon': nodeData.isBot,
                }"
                @click="handleIconClick"
            >
                <template v-if="nodeData.children.length !== 0">
                    <i class="el-icon-folder-opened" v-if="expanded"></i>
                    <i class="el-icon-folder" v-else></i>
                </template>
                <i class="el-icon-user-solid" v-else></i>
            </span>
            <span
                class="sw-tree-node__label"
                :class="{'is-current': nodeData.isCurrent}"
                @click="handleSelect"
            >{{nodeData.label}}</span>
        </div>
        <el-collapse-transition>
            <ul
                v-if="nodeData.children && expanded"
                class="sw-tree-node__children"
                :class="{
                    'is-top-icon': nodeData.isTop,
                    'is-bot-icon': nodeData.isBot,
                    'is-expanded': expanded
                }"
            >
                <sw-tree-node
                    v-for="tree in nodeData.children"
                    :key="tree.clue"
                    :nodeData="tree"
                ></sw-tree-node>
            </ul>
        </el-collapse-transition>
    </li>
</template>

<script>
export default {
    name: 'SwTreeNode',
    components: {},
    props: {
        nodeData: {
            type: Object,
            default: () => {
            }
        }
    },
    data() {
        return {
            tree: null,
            expanded: false,
        }
    },
    computed: {},
    watch: {},
    created() {
        const parent = this.$parent;
        this.tree = parent;
        // if (parent.isTree) {
        //     this.tree = parent;
        // } else {
        //     this.tree = parent.tree;
        // }

        if (this.nodeData.expanded) {
            this.expanded = true;
        }
    },
    mounted: function () {
        console.log(this.nodeData)
    },
    methods: {
        handleIconClick() {
            // console.log(this.$parent)
            if (this.nodeData.isLeaf) return;
            if (this.expanded) {
                this.expanded = false
                this.tree.$emit('node-collapse', this.nodeData.data, this.nodeData, this);
            } else {
                this.expanded = true
                this.$emit('node-expand', this.nodeData.data, this.nodeData, this);
            }
        },
        handleSelect() {
            if (this.nodeData.isCurrent) {
                this.nodeData.isCurrent = false
                this.tree.$emit('node-select', this.nodeData.data, this.nodeData, this);
            } else {
                this.nodeData.isCurrent = true
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .sw-tree-node {
        position: relative;
        width: 100%;
        height: auto;
        background: #fff;

        &.is-bot {

        }

        &__content {
            width: 100%;
            height: 40px;
            line-height: 40px;
            position: relative;
        }

        &__label {
            padding-left: 10px;
            cursor: pointer;

            &.is-current {
                background-color: #d2eafb;
                color: #2C90F3;
            }
        }

        &__expand-icon {
            position: relative;
            display: inline-block;
            width: 20px;
            cursor: pointer;
            background: #fff;
            text-align: center;

            &::after {
                content: "";
                position: absolute;
                left: -50%;
                top: 50%;
                width: 50%;
                height: 1px;
                border-top: 1px dashed #dddddd;
            }
        }

        &__children {
            padding-left: 20px;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                left: 10px;
                top: 0;
                width: 1px;
                height: 100%;
                border-left: 1px dashed #dddddd;
            }
        }
    }
</style>

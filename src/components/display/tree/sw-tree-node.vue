<template>
    <li class="sw-tree-node">
        <div class="sw-tree-node__content">
            <span
                class="sw-tree-node__expand-icon"
                :class="{
                    'is-top-icon': nodeData.isTop,
                    'is-bot-icon': nodeData.isBot,
                }"
                @click="handleIconClick"
            >
                <i class="el-icon-folder-add"></i>
            </span>
            <span class="sw-tree-node__label">{{nodeData.label}}</span>
        </div>
        <el-collapse-transition>
            <ul class="sw-tree-node__children" v-if="nodeData.children && expanded">
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
            expanded: false
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

        &__content {
            width: 100%;
            height: 40px;
            line-height: 40px;
            position: relative;
        }

        &__label {
            padding-left: 10px;
        }

        &__expand-icon {
            position: relative;
            display: inline-block;
            width: 20px;
            cursor: pointer;
            background: #fff;
            text-align: center;

            &::before {
                content: "";
                position: absolute;
                left: -10px;
                top: 20px;
                z-index: 2;
                width: 100%;
                height: 1px;
                border-top: 1px dashed #bbbbbb;
            }

            &.is-top-icon::after {
                content: "";
                position: absolute;
                left: 10px;
                top: 20px;
                z-index: 2;
                width: 1px;
                height: 50%;
                border-left: 1px dashed #bbbbbb;
            }

            &::after {
                content: "";
                position: absolute;
                left: 10px;
                top: 0;
                z-index: 2;
                width: 1px;
                height: 100%;
                border-left: 1px dashed #bbbbbb;
            }

            &.is-bot-icon::after {
                content: "";
                position: absolute;
                left: 10px;
                top: 0;
                z-index: 2;
                width: 1px;
                height: 50%;
                border-left: 1px dashed #bbbbbb;
            }
        }

        &__children {
            padding-left: 20px;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                left: 10px;
                top: 0;
                z-index: 1;
                width: 1px;
                height: 100%;
                border-left: 1px dashed #bbbbbb;
            }
        }
    }
</style>

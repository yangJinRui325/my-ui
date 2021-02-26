<template>
    <el-tree
        ref="elTree"
        :class="{
            'tree-line': showLine,
            'high-light-icon': showSelectIcon
        }"
        :style="{fontSize: realFontSize +'px'}"
        :data="data"
        :emptyText="emptyText"
        :renderAfterExpand="renderAfterExpand"
        :nodeKey="nodeKey"
        :checkStrictly="checkStrictly"
        :defaultExpandAll="defaultExpandAll"
        :expandOnClickNode="expandOnClickNode"
        :checkOnClickNode="checkOnClickNode"
        :checkDescendants="checkDescendants"
        :autoExpandParent="autoExpandParent"
        :defaultCheckedKeys="defaultCheckedKeys"
        :currentNodeKey="currentNodeKey"
        :renderContent="renderContent"
        :showCheckbox="showCheckbox"
        :draggable="draggable"
        :allowDrag="allowDrag"
        :allowDrop="allowDrop"
        :props="props"
        :lazy="lazy"
        :highlightCurrent="highlightCurrent"
        :load="load"
        :filterNodeMethod="filterNodeMethod"
        :accordion="accordion"
        :indent="realIndent"
        :iconClass="iconClass"
        @node-click="nodeClick"
        @node-contextmenu="nodeContextmenu"
        @check-change="checkChange"
        @check="check"
        @current-change="currentChange"
        @node-expand="nodeExpand"
        @node-collapse="nodeCollapse"
        @node-drag-start="nodeDragStart"
        @node-drag-enter="nodeDragEnter"
        @node-drag-leave="nodeDragLeave"
        @node-drag-over="nodeDragOver"
        @node-drag-end="nodeDragEnd"
        @node-drop="nodeDrop"
    >
        <span class="custom-tree-node" slot-scope="{ node,data }">
            <slot :node="node" :data="data">
                <span>{{ node.label }}</span>
            </slot>
        </span>
    </el-tree>
</template>

<script>
import { t } from "element-ui/src/locale";
import { parseToNum } from "./model/util"

export default {
    name: 'SwTree',
    components: {},
    props: {
        /*是否展示线型树*/
        showLine: {
            type: Boolean,
            default: true
        },
        /*是否展示选中的图标*/
        showSelectIcon: {
            type: Boolean,
            default: true
        },
        fontSize: {
            type: [String, Number],
            default: 16
        },
        hight: {
            type: [String, Number],
            default: 26
        },
        data: {
            type: Array
        },
        emptyText: {
            type: String,
            default() {
                return t('el.tree.emptyText');
            }
        },
        renderAfterExpand: {
            type: Boolean,
            default: true
        },
        nodeKey: String,
        checkStrictly: Boolean,
        defaultExpandAll: Boolean,
        expandOnClickNode: {
            type: Boolean,
            default: true
        },
        checkOnClickNode: Boolean,
        checkDescendants: {
            type: Boolean,
            default: false
        },
        autoExpandParent: {
            type: Boolean,
            default: true
        },
        defaultCheckedKeys: Array,
        defaultExpandedKeys: Array,
        currentNodeKey: [String, Number],
        renderContent: Function,
        showCheckbox: {
            type: Boolean,
            default: false
        },
        draggable: {
            type: Boolean,
            default: false
        },
        allowDrag: Function,
        allowDrop: Function,
        props: {
            default() {
                return {
                    children: 'children',
                    label: 'label',
                    disabled: 'disabled'
                };
            }
        },
        lazy: {
            type: Boolean,
            default: false
        },
        highlightCurrent: Boolean,
        load: Function,
        filterNodeMethod: Function,
        accordion: Boolean,
        indent: {
            type: Number,
            default: 18
        },
        iconClass: String
    },
    data() {
        return {}
    },
    computed: {
        realIndent() {
            return this.showLine ? 30 : this.indent
        },
        realHeight() {
            return parseToNum(this.height)
        },
        realFontSize() {
            return parseToNum(this.fontSize)
        }
    },
    watch: {},
    created() {

    },
    mounted: function () {

    },
    methods: {
        /*
        * */
        nodeClick(data, node, vnode) {
            this.$emit('node-click', data, node, vnode)
        },
        nodeContextmenu(event, data, node, vnode) {
            this.$emit('node-contextmenu', event, data, node, vnode)
        },
        checkChange(data, checked, indeterminate) {
            this.$emit('check-change', data, checked, indeterminate)
        },
        check(data, checked) {
            this.$emit('check', data, checked)
        },
        currentChange(data, node) {
            this.$emit('current-change', data, node)
        },
        nodeExpand(data, node, vnode) {
            this.$emit('node-expand', data, node, vnode)
        },
        nodeCollapse(data, node, vnode) {
            this.$emit('node-collapse', data, node, vnode)
        },
        nodeDragStart(node, event) {
            this.$emit('node-drag-start', node, event)
        },
        nodeDragEnter(dragNode, enterNode, event) {
            this.$emit('node-drag-enter', dragNode, enterNode, event)
        },
        nodeDragLeave(dragNode, leaveNode, event) {
            this.$emit('node-drag-leave', dragNode, leaveNode, event)
        },
        nodeDragOver(dragNode, overNode, event) {
            this.$emit('node-drag-over', dragNode, overNode, event)
        },
        nodeDragEnd(dragNode, endNode, dragPos, event) {
            this.$emit('node-drag-end', dragNode, endNode, dragPos, event)
        },
        nodeDrop(dragNode, endNode, dragPos, event) {
            this.$emit('node-drop', dragNode, endNode, dragPos, event)
        }

    }
}
</script>

<style scoped lang="scss">
    .high-light-icon {
        &.el-tree--highlight-current {
            ::v-deep .el-tree-node.is-current > .el-tree-node__content {
                .custom-tree-node {
                    position: relative;

                    &::after {
                        content: '';
                        display: block;
                        width: 16px;
                        height: 14px;
                        position: absolute;
                        right: -30px;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                        background: url('./image/duihao.png') center center no-repeat;
                        background-size: 100%;
                    }
                }
            }
        }
    }

    .tree-line {
        width: 100%;
        height: auto;
        overflow: hidden;

        &.el-tree--highlight-current {
            ::v-deep .el-tree-node.is-current > .el-tree-node__content {
                background-color: #F0F7FF;
                color: #2C90F3;
            }
        }

        ::v-deep .el-tree-node {

            .el-tree-node__children {
                position: relative;

                &::before {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    left: 10px;
                    z-index: 1;
                    width: 1px;
                    height: 100%;
                    border-left: 1px dashed #cdcdcd;
                }
            }

            .el-tree-node__content {
                height: 30px;

                .el-tree-node__expand-icon {
                    margin-right: 10px;
                    padding: 0;
                    display: inline-block;
                    width: 20px;
                    height: 100%;
                    position: relative;

                    &::after {
                        content: "";
                        display: inline-block;
                        position: absolute;
                        top: -50%;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        border-bottom: 1px dashed #cdcdcd;
                        border-left: 1px dashed #cdcdcd;
                    }

                    &::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background: url("./image/add.png") center center no-repeat;
                        /*background-position: -126px 0px;*/
                    }

                    &.el-icon-caret-right.expanded {
                        transform: rotate(0);

                        &::before {
                            background: url("./image/jian.png") center center no-repeat;
                        }
                    }

                    &.is-leaf::before {
                        background: url(./image/is_leaf.png) center center no-repeat;
                        background-size: 16px;
                    }
                }
            }


        }
    }
</style>

<template>
    <el-tree
        ref="elTree"
        :class="{'tree-line':showLine}"
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
            return this.showLine ? 0 : this.indent
        },
        realHeight() {
            return parseToNum(this.height)
        }
    },
    watch: {},
    created() {

    },
    mounted: function () {
        console.log(document.getElementsByClassName('el-tree-node__content'))
        console.log(this.$refs.elTree.$el.children[0].children)
        // let children = this.$refs.elTree.$el.children
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
        },
    }
}
</script>

<style scoped lang="scss">
    .tree-line {
        width: 100%;
        height: auto;
        overflow: hidden;

        &.el-tree--highlight-current {
            ::v-deep .el-tree-node.is-current > .el-tree-node__content {
                background-color: #F0F7FF;
                color: #2C90F3;
                position: relative;

                &::after {
                    content: '';
                    display: block;
                    width: 16px;
                    height: 14px;
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    background: url('./image/duihao.png') center center no-repeat;
                    background-size: 100%;
                }
            }
        }

        ::v-deep .el-tree-node {

            .el-tree-node__children {
                position: relative;
                padding-left: 20px;

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
                position: relative;

                &::before {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    left: -10px;
                    top: 0;
                    z-index: 1;
                    width: 1px;
                    height: 100%;
                    border-left: 1px dashed #cdcdcd;
                }

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
                        top: 50%;
                        left: -52%;
                        width: 50%;
                        height: 1px;
                        border-top: 1px dashed #cdcdcd;;
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
                        background-image: url(./image/metro.png);
                        background-position: -126px 0px;
                    }

                    &.el-icon-caret-right.expanded {
                        transform: rotate(0);

                        &::before {
                            background-position: -105px 0;
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

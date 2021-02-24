<template>
    <ul class="sw-tree" role="tree">
        <sw-tree-node
            v-for="tree in realTreeData"
            :key="tree.clue"
            :nodeData="tree"
        ></sw-tree-node>
    </ul>
</template>

<script>
import swTreeNode from './sw-tree-node'
import { changeTreeData } from './model/util'

export default {
    name: 'SwTree',
    components: {
        swTreeNode
    },
    props: {},
    data() {
        return {
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
                                }
                            ]
                        },
                        {
                            label: '二级 1-2',
                            children: [
                                {
                                    label: '三级 1-2-1',
                                    children: []
                                },
                                {
                                    label: '三级 1-2-2',
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
                                    children: []
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
                }
            ]
        }
    },
    computed: {
        realTreeData() {
            return changeTreeData(this.treeData)
        },
    },
    watch: {},
    mounted: function () {
        console.log(this.realTreeData)
    },
    methods: {}
}
</script>

<style scoped lang="scss">
    .sw-tree {
        width: 100%;
        height: auto;
        overflow: hidden;
    }
</style>

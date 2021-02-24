export function changeTreeData(arr, idx) {
    idx = idx || 0
    if (arr) {
        arr.forEach((item, index) => {
            // item.children.length ? 说明有子元素 : 反之没有
            item.clue = `${ idx }-${ index }`
            item.expanded = false
            item.isTop = index === 0 ? true : false
            item.isBot = arr.length - 1 === index ? true : false
            if (item.children) {
                changeTreeData(item.children, item.clue)
            }
        })
    }
    return arr
}

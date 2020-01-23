
/* list */

const lists = ['list1', 'list2', 'list3']

let n = []
lists.map((item, index) => {
    console.log("%s:%d", item, index)
    n.push(item)
})

const n1 = lists.map((item, index) => {
    console.log("%s:%d", item, index)
    return item
})

for (let i=0; i <n.length; i++) {
    console.log("n: %s:%d", n[i], i)
}

n1.map((item, index) => {
    console.log("n1: %s:%d", item, index)
})


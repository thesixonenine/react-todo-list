import Item from './structs/Item'

interface TodoItemProps {
    // 父组件传递的对象
    item: Item,
    // 子组件调父组件的方法
    click: (it: Item) => void
}

export default function TodoItem({item, click}: TodoItemProps) {

    return <>
        <li style={{color: item.color}} onClick={() => click(item)}>{item.content}</li>
    </>
}

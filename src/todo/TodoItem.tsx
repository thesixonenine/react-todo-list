import Item from './structs/Item.ts'

interface TodoItemProps {
    // 父组件传递的对象
    item: Item,
    // 子组件调父组件的方法
    click: (it: Item) => void
}

export default function TodoItem({item, click}: TodoItemProps) {

    return <>
        <li className="list-none mt-4" style={{color: item.color}} onClick={() => click(item)}>{item.content}</li>
    </>
}

import TodoItem from "./TodoItem.tsx";
import Item from './structs/Item.ts'
import {ChangeEvent, useState} from "react";


function Todo() {
    const [todoList, setTodoList] = useState([
        {id: 1, content: "React", color: 'green'},
        {id: 2, content: "Vue", color: 'blue'},
    ]);
    const [value, setValue] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const itemClick = (it: Item) => {
        console.log(it.content)
    }

    const appendItem = () => {
        if (value !== '') {
            setTodoList([
                ...todoList,
                {
                    id: todoList.map(t => t.id)
                        .reduce((prev, cur) => Math.max(prev, cur)) + 1,
                    content: value,
                    color: 'green',
                }
            ]);
            setValue("");
            console.log(todoList)
        }
    }

    return (
        <div className="max-w-7xl mx-0 my-auto p-8 text-center">
            <header className="mb-12">
                <h1 style={{fontSize: 32,fontWeight: "bold"}}>My Lists</h1>
            </header>
            <div className="flex justify-center">
                <ul className="mb-12">
                    {
                        todoList.map(
                            (item) =>
                                <TodoItem key={item.id} item={item} click={itemClick}/>
                        )
                    }
                </ul>
            </div>
            <div>

                <input className="bg-sky-200" type='text' value={value} onChange={handleInputChange} placeholder='添加todo'/>
                <button className="ml-2" onClick={appendItem}>确定</button>
            </div>
        </div>
    )
}

export default Todo

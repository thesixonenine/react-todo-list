import './App.css'
import TodoItem from "./TodoItem.tsx";
import Item from './structs/Item'
import {ChangeEvent, useState} from "react";


function App() {
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
            ])
            console.log(todoList)
        }
    }

    return (
        <>
            <header>
                <h1>Simple Todo List</h1>
            </header>
            <div className='list'>
                <ul>
                    {
                        todoList.map(
                            (item) =>
                                <TodoItem key={item.id} item={item} click={itemClick}/>
                        )
                    }
                </ul>
            </div>
            <div>

                <input type='text' value={value} onChange={handleInputChange} placeholder='添加todo'/>
                <button onClick={appendItem}>确定</button>
            </div>
        </>
    )
}

export default App

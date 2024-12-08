import './App.css'
import TodoItem from "./TodoItem.tsx";
import Item from './structs/Item'

const todoList = [
    {content: "React", color: 'green'},
    {content: "Vue", color: 'blue'},
]

function App() {

    const itemClick = (it: Item) => {
        console.log(it.content)
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
                            (item, index) =>
                                <TodoItem key={index} item={item} click={itemClick}/>
                        )
                    }
                </ul>
            </div>
            <div>

            </div>
        </>
    )
}

export default App

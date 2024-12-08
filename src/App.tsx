import {useState} from 'react'
import reactLogo from '/react.svg'
import './App.css'

const list = [
    {id: 1, name: "Vue"},
    {id: 2, name: "React"},
]

function App() {
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({
        name: "Simple",
    });

    const handleNameChange = (n: string) => {
        setPerson({
            ...person,
            name: 'Hi, ' + n
        })
    }

    return (
        <>
            <div>
                <ul>
                    {list.map((item, index) => (<li key={index}>{item.name}</li>))}
                </ul>
            </div>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={() => handleNameChange(person.name)}>
                    {person.name}
                </button>
            </div>
        </>
    )
}

export default App

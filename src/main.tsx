import {createRoot} from 'react-dom/client'
import "./main.css"
import Todo from './todo/Todo.tsx'
import {StrictMode} from "react";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <Todo/>
        </StrictMode>
)

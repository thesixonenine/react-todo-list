import {createRoot} from 'react-dom/client'
import "./main.css"
import {StrictMode} from "react";
import Login from "./login/Login.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Login />
    </StrictMode>
)

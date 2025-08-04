import React from 'react'
import { useTheme } from './store/store'

const App2 = () => {
    const { theme, toggleTheme } = useTheme()
    console.log("first")
    console.log("first")
    return (
        <div>
            <div>{theme?"light":"dark"}</div>
            <button onClick={()=>toggleTheme()}>click</button>
        </div>
    )
}

export default App2
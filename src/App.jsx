import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Cite, citeLength } from './components/Cite.jsx'


const  userAlert = (element) => {
    return Math.floor(Math.random() * element);
}

function App() {
    
    let [count, setCount] = useState(userAlert(citeLength));
    const changeBody = () => {
        let color = `rgb(${userAlert(255)},${userAlert(255)},${userAlert(255)})`;
        document.body.style.backgroundColor = color;
        document.body.style.color = color;
    }
    const changeCite = () => {
        changeBody();
        setCount(userAlert(citeLength));
    }
    
    return (
        <div className="App" onLoad={changeBody()}>
            <Cite number={count}/>
            <button onClick={changeCite}>change user</button>
        </div>
    );
}



export default App;

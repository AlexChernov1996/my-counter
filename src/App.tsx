import React, {useEffect, useState} from 'react';
import Counter from './components/Counter/Counter';
import './App.css';
import Settings from "./components/Settings/Settings";

export type CountType = {
    value: number
    min: number
    max: number
}

function App() {

    const [count, setCount] = useState<CountType>({value: 0, min: 0, max: 5})
    const [settingMode, setSettingMode] = useState(true)
    useEffect(()=>{
        setCount(JSON.parse(localStorage.getItem("counter settings")!))
    },[])

    const addCount = () => {
        setCount({value: count.value + 1, min: count.min, max: count.max})
    }
    const setSettingMinValue = (min: number) => {
        setCount({...count, min: min})
    }
    const setSettingMaxValue = (max: number) => {
        setCount({...count, max: max})
    }
    const changeSettingMode =(newValue:boolean) =>{
        setSettingMode(newValue)
    }
    const resetCount = () => {
        setCount({value: count.min, min: count.min, max: count.max})
    }
    return (
        <div className="App">
            <Settings  count={count}
                       setSettingMax={setSettingMaxValue}
                       setSettingMin={setSettingMinValue}
                       setMode ={changeSettingMode}
                       resetCount={resetCount}
                       settingMode={settingMode}
            />
            <Counter settingMode={settingMode}
                     addCount={addCount}
                     count={count}
                     resetCount={resetCount}/>
        </div>
    );
}

export default App;

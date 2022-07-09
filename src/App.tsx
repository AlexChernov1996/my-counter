import React from 'react';
import Counter from './components/Counter/Counter';
import './App.css';
import Settings from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {
    AddCount,
    ChangeSettingMode,
    reducerStateType,
    ResetCount,
    SetSettingMaxValue,
    SetSettingMinValue
} from "./store/reducer";
import {rootStateType} from "./store/store";

export type CountType = {
    value: number
    min: number
    max: number
}

function App() {

   const dispatch = useDispatch()
    const count = useSelector<rootStateType,reducerStateType>((state)=>state.counter)
    // useEffect(()=>{
    //     setCount(JSON.parse(localStorage.getItem("counter settings")!))
    // },[])

    const addCount = () => {
       dispatch(AddCount())
    }
    const setSettingMinValue = (min: number) => {
        dispatch(SetSettingMinValue(min))
    }
    const setSettingMaxValue = (max: number) => {
       dispatch(SetSettingMaxValue(max))
    }
    const changeSettingMode =(newValue:boolean) =>{
        dispatch(ChangeSettingMode(newValue))
    }
    const resetCount = () => {
        dispatch(ResetCount())
    }
    return (
        <div className="App">
            <Settings  count={count}
                       setSettingMax={setSettingMaxValue}
                       setSettingMin={setSettingMinValue}
                       setMode ={changeSettingMode}
                       resetCount={resetCount}
            />
            <Counter
                     addCount={addCount}
                     count={count}
                     resetCount={resetCount}/>
        </div>
    );
}

export default App;

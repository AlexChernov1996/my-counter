import React from 'react';
import './counter.css'
import Btn from "../Button/Btn";
import {reducerStateType} from "../../store/reducer";

type CountProps = {
    addCount: () => void
    count: reducerStateType
    resetCount: () => void
}
const Counter = (props: CountProps) => {
    const addCount = () => {
        props.addCount()
    }
    const resetCount = () => {
        props.resetCount()
    }
    const disabledAddBtn = props.count.value === props.count.max || props.count.settingMode
    const disabledResetBtn = props.count.value === props.count.min || props.count.settingMode
    const unCorrectedValue =  props.count.min >= props.count.max || props.count.min < 0
    return (
        <div className={'counter'}>
            <div className={'display'}>
                {props.count.settingMode
                    ? (unCorrectedValue
                        ?<span style={{color:'red'}}>Settings is not correct</span>
                            :<span>Press set to save settings </span>)
                    : <span className={props.count.value === props.count.max
                        ? 'red'
                        : ''
                    }>{props.count.value}</span>
                }

            </div>
            <div className={'buttons'}>
                <Btn disabled={disabledAddBtn} name={'add'} callBack={addCount}/>
                <Btn disabled={disabledResetBtn} name={'reset'} callBack={resetCount}/>

            </div>
        </div>
    );
};

export default Counter;

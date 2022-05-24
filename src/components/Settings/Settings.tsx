import React, {ChangeEvent, useState} from 'react';
import Btn from "../Button/Btn";
import s from "./settings.module.css"
import SettingInput from "../Button/SettingInput/SettingInput";
import {CountType} from "../../App";

type SettingsPropsType = {
    count: CountType
    setSettingMax: (max: number) => void
    setSettingMin: (min: number) => void
    setMode: (newValue: boolean) => void
    resetCount: (count: CountType) => void
    settingMode: boolean
}
const Settings = (props: SettingsPropsType) => {

    const setSettingMaxOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSettingMax(Number(e.currentTarget.value))
        props.setMode(true)
    }
    const setSettingMinOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSettingMin(Number(e.currentTarget.value))
        props.setMode(true)
    }
    const setCountCallback = () => {
        props.setMode(false)
        props.resetCount(props.count)
        localStorage.setItem('counter settings',JSON.stringify(props.count))
    }
    const disableSetBtn = !props.settingMode || props.count.min >= props.count.max || props.count.min < 0
    return (
        <div className={s.settings}>
            <div className={s.display}>
                <div className={s.valueInput}>
                    <span>max value : </span>
                    <input type="number"
                           onChange={setSettingMaxOnChange}
                           value={props.count.max}
                    />
                </div>
                <div className={s.valueInput}>
                    <span>min value : </span>
                    <input type="number"
                           onChange={setSettingMinOnChange}
                           value={props.count.min}
                    />
                </div>
            </div>
            <div className={s.buttons}>
                <Btn name={'set'}
                     callBack={setCountCallback}
                     disabled={disableSetBtn}/>

            </div>
        </div>
    )
        ;
};

export default Settings;

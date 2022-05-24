import React, {useState} from 'react';
import s from "../../Settings/settings.module.css";

type InputPropsType = {}
const SettingInput = (props: InputPropsType) => {
    const [value, setValue] = useState<number>()
    return (
        <div className={s.valueInput}>
            <span>max value : </span>
            <input type="number"
                   value={value}
                   onChange={(e) => setValue(Number(e.currentTarget.value))}
            />
        </div>
    );
};

export default SettingInput;

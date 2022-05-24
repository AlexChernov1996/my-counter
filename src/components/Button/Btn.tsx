import React from 'react';
type ButtonPropsType ={
    name:string
    callBack:()=>void
    disabled?:boolean
}
const Btn = (props:ButtonPropsType) => {
    return (
        <>
            <button disabled={props.disabled} onClick={props.callBack}>{props.name}</button>
        </>
    );
};

export default Btn;

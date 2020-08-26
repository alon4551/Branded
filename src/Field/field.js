import React from 'react';
import './field.css';
const field=({name,type,id,action,value})=>{
    return(
    <div className="mt3">
        <label className="db fw6 fl lh-copy f6" 
        htmlFor={id}>{name}</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black-20 hover-white w-100" 
        type={type}
        name={id}  
        id={id}
        value={value}
        onChange={action}
        />
    </div>
    );    
}
export default field;
import React from 'react';

const Nav=({link,name,action})=>{
    return(
    <label className="link dim black dib mr3 pa2" 
    href={link} 
    title={name}
    onClick={()=>action(link)}
    >{name}</label>)
}
export default Nav;
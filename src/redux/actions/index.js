export const SignIn=(payload)=>{
    return {
        type:'signin',
        payload
        
    };
}
export const SignOut=(payload)=>{
    return {
        type:'signout',
        payload
    };
}
export const Fill=(field,value)=>{
    return {
        type:field,
        payload:value
    }
}
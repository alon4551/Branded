import targets from '../../targets.json';
const logReducer = (state = false,action) => {
    switch(action.type){
        case 'signin':
            return  fetch(targets.signin,{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(action.payload)
            })
            .then(response=>{
                if(response.status===200)
                state= true;
                else
                state= false;
                    
            })
            .catch(err=>{
                console.log(err);
                state= false;
                
            })
        case "signout":
               return  fetch(targets.signout,{
                    method:'POST',
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(action.payload)
                })
                .then(response=>{
                    if(response.status===200)
                    state= false;
                    else
                    state= true;
                })
                .catch(err=>{
                    console.log(err);
                    state= true;
                })
                default:
                    return state;
    }
}
export default logReducer;
import React,{Component} from 'react';
import targets from '../targets.json';
import Field from '../Field';
class Remove extends Component{
    constructor(props){
        super(props);
        this.state={
            user:{
                email:props.email,
                password:''
            }
        }
    }
    updateUser=(field,value)=>{
        let user=this.state.user;
        switch(field){
                case 'email':
                    user.email=value;
                break;
                case 'password':
                    user.password=value;
                break;
        }
        this.setState({user:user});
    } 
    onChange=(input)=>{
        this.updateUser(input.target.id,input.target.value);
    }
    
    onSubmit=()=>{
        fetch(targets.delete,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(this.state.user)
        })
        .then(response=>{
            if(response.status===200){
                this.props.action();
                alert('Account Deleted');
            }
            else
                alert('Failed');
        })
        .catch(err=>console.log(err));
    }
    render(){
        const {onChange,onSubmit}=this;
      
        return(
        <form method="POST" className="center measure ">
        <legend className="f4 fw6 ph0 mh0">To Delete Accout please enter email and password</legend>
        <Field action={onChange} type="password"  id="password" name="Password"/>
        <div className="mt3">
            <input className="b ph3 pv2 input-reset ba b--red bg-transparent grow pointer f6 dib" 
            type="reset"
            onClick={onSubmit}
            value="Delete Account"
            />
        </div>
        </form>
        );
    }
}
export default Remove;
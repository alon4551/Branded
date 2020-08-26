import React,{Component} from 'react';
import Field from '../Field';
import targets from '../targets.json';
class Password extends Component{
    constructor(props){
        super(props);
        this.state={
            user:{
                email:props.email,
                old_password:'',
                new_password:''
            }
        }
    }
    updateUser=(field,value)=>{
        let user=this.state.user;
        switch(field){
                case 'old_password':
                    user.old_password=value;
                break;
                case 'new_password':
                    user.new_password=value;
                break;
        }
        this.setState({user:user});
    } 
    onChange=(input)=>{
        this.updateUser(input.target.id,input.target.value);
    }
    onSubmit=()=>{
        if(document.getElementById('repeat').value===this.state.user.old_password)
        fetch(targets.password,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(this.state.user)
        })
        .then(response=>{
            if(response.status===200)
                alert('Password changed');
            else
                alert('Password incorrect');
        })
        .catch(err=>console.log(err));
        else
        alert('password must be identical');
    }
    render(){
        const {onChange,onSubmit}=this;
        return(
            <form method="POST" action={targets.signin} href="#" target="/" className="center measure ">
        <legend className="f4 fw6 ph0 mh0">Change Passwords</legend>
        <Field action={onChange} type="password" id="old_password" name="Old password"/>
        <Field action={onChange} type="password" id="repeat" name="repeat password"/>
        <Field action={onChange} type="password" id="new_password" name="New password"/>
        <div className="mt3">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="reset"
            onClick={onSubmit}
            value="Update"
            />
        </div>
        
        </form>
        );
    }
}
export default Password;
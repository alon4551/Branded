import React,{Component} from 'react';
import Field from '../Field';
import targets from '../targets.json';
import './login.css';

class Login extends Component{
   constructor(props){
        super(props);  
    }
    render(){
         const {onChange,onSubmit}=this.props;
        return(<form method="POST" action={targets.signin} href="#" target="/" className="center measure ">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <Field action={onChange} type="email" id="email" name="Email"/>
            <Field action={onChange} type="password" id="password" name="Password"/>
            <div className="mt3">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="reset"
                onClick={onSubmit}
                value="Sign in"
                />
            </div>
            <div className="lh-copy mt3">
            
                <a href="/signup" className="f6 link dim black db">
                    Sign up
                    </a>
            </div>
        </form>);
    }
}
export default Login;

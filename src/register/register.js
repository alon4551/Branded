import React,{Component} from 'react';
import Field from '../Field';
import targets from '../targets.json';
class Register extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {onChange,onSubmit,genders}=this.props;
        const list=genders.map((item)=> 
        <option label={item.gender} value={item.gender}>
            {item.gender}
        </option>)
        return(
        <form method="POST" action={targets.signin} href="#" target="/" className="center measure ">
            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
            <Field action={onChange} type="email" id="email" name="Email"/>
            <Field action={onChange} type="firstname" id="firstName" name="First Name"/>
            <Field action={onChange} type="lastname" id="lastName" name="Last Name"/>
            <Field action={onChange} type="date" id="birthday" name="Birthday"/>
            <select id="gender"
             className="w-100  mt3 db h2 f6 bg-near-white ba b--sliver gray" 
             onClick={onChange}
             >
            {list}
            </select>
            <Field action={onChange} type="password" id="password" name="Password"/>
            <div className="mt3">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="reset"
                onClick={onSubmit}
                value="Sign up"
                />
            </div>
            <div className="lh-copy mt3">
                <a href="/signin" className="f6 link dim black db">Sign in</a>
            </div>
    </form>);
    }
}
export default Register;
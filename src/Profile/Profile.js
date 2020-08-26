import React,{Component} from 'react';
import Field from '../Field';
import targets from '../targets.json';
class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            user:{
                firstName:'',
                lastName:'',
                email:props.email,
                birthday:Date.now(),
                gender:''
               
            },
            password:''
        }
        fetch(targets.genders)
        .then(response=>response.json())
        .then(data=>{
            this.setState({genders:data})
        });
        fetch('http://localhost:3000/user')
        .then(response=>response.json())
        .then(data=>{
            this.setState({user:data})
            console.log(data);
        });
    }
    updateUser=(field,value)=>{
        let user=this.state.user;
        switch(field){
            case 'firstName':
                user.firstName=value;
                break;
                case 'lastName':
                    user.lastName=value;
                break;
                case 'email':
                    user.email=value;
                break;
                case 'birthday':
                    user.birthday=value;
                break;
                case 'gender':
                    user.gender=value;
                break;
                case 'password':
                    this.setState({password:value})
                break;
        }
        this.setState({user:user});
    } 
    onChange=(input)=>{
        this.updateUser(input.target.id,input.target.value);
    }
    
    onSubmit=()=>{
        const {password,user}=this.state;
        fetch(targets.update,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                birthday:user.birthday,
                gender:user.gender,
                password:password
            })
        })
        .then(response=>{
            if(response.status===200)
                alert('Updated');
            else
                alert('Failed');
        })
        .catch(err=>console.log(err));
    }
    render(){
        const {onChange,onSubmit} =this;
        const {genders}=this.props;
        const {user}=this.state;
        console.log(user);
        const list=genders.map((item)=> 
        <option label={item.gender} value={item.gender}>
            {item.gender}
        </option>)
        return( 
        <form method="POST" action={targets.signin} href="#" target="/" className="center measure ">
        <legend className="f4 fw6 ph0 mh0">Profile</legend>
        <Field action={onChange} type="email" value={user.email} id="email" name="Email" />
        <Field action={onChange} type="firstname" value={user.firstName} id="firstName" name="First Name"/>
        <Field action={onChange} type="lastname" value={user.lastName} id="lastName" name="Last Name"/>
        <Field action={onChange} type="date" value={user.birthday} id="birthday" name="Birthday"/>
        <select id="gender" value={user.gender}
         className="w-100  mt3 db h2 f6 bg-near-white ba b--sliver gray" 
         onClick={onChange}
         >
        {list}
        </select>
        <hr/>
        <legend className="f4 fw6 ph0 mh0">Please enter password to apply changes</legend>
        <Field action={onChange} type="password" id="password" name="Password"/>
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
export default Profile;
import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import targets from './targets.json';
import Login from './login';
import Register from './register';
import Accounts from './Accounts';
import Profile from './Profile';
import Nav from './Nav';
import Password from './Password';
import Remove from './Remove';
import './App.css';
import 'tachyons';
const initState={
  firstName: '',
  lastName: '',
  email: '',
  birthday: '',
  gender: '',
  password: ''
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      user: initState,
      retrive:{},
      login: false,
      genders: [],
      route: ''

    }
  }
  componentDidMount(){
    fetch(targets.genders)
    .then(response=>response.json())
    .then(data=>this.setState({genders:data}))
  }
  updateUser = (field, value) => {
    let user = this.state.user;
    switch (field) {
      case 'firstName':
        user.firstName = value;
        break;
      case 'lastName':
        user.lastName = value;
        break;
      case 'email':
        user.email = value;
        break;
      case 'birthday':
        user.birthday = value;
        break;
      case 'gender':
        user.gender = value;
        break;
      case 'password':
        user.password = value;
        break;
    }
    this.setState({ user: user });
  }
  onChange = (input) => {
    this.updateUser(input.target.id, input.target.value);
  }
  onLogOut=()=>{
    fetch(targets.signout, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.user)
    })
      .then(response => {
        if (response.status === 200) {
          alert('Sign Out');
          this.setState({ login: false ,user:initState,retrive:initState});
          this.onRouteChange('signin')
          return response.json();
        }
        else
          alert('Failed');
      })
      .then(data=>this.setState({retrive:data}))
      .catch(err => {
        console.log(err)
        this.setState({ login: false ,user:initState,retrive:initState});
      });
  }
  onLogIn = () => {
    fetch(targets.signin, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.user)
    })
      .then(response => {
        if (response.status === 200) {
          alert('Sign In');
          this.setState({ login: true });
          this.onRouteChange('users')
          return response.json();
        }
        else
          alert('Failed');
      })
      .then(data=>this.setState({retrive:data}))
      .catch(err => {
        console.log(err)
        this.setState({ login: false });
      });
  }
  onRegister=()=>{
    fetch(targets.signup,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(this.state.user)
  })
  .then(response=>{
      if(response.status===200)
          alert('Sign up');
      else
          alert('Failed');
  })
  .catch(err=>console.log(err));
  }
  getRoute = () => {
    const { onChange, onLogIn ,onRegister,onLogOut} = this;
    const {genders,user,retrive}=this.state;
    switch (this.state.route) {
      case 'signin':
        return <Login onChange={onChange} onSubmit={onLogIn} />
      case 'signup':
        return <Register onChange={onChange} onSubmit={onRegister} genders={genders}/>;
        case 'users':
          return <Accounts />
          case 'profile':
          return <div>
             <Profile email={user.email} genders={genders}/>
                <br />
                <Password email={user.email} />
                <br />
                <Remove email={user.email} action={onLogOut}/>
                <br />
          </div>
      default:
        return <Login onChange={onChange} onSubmit={onLogIn} />
    }
  }
  onRouteChange=(route)=>{
    this.setState({route});
  }
  render() {
    const { onRouteChange,getRoute,onLogOut} = this;
    const view=getRoute();
    const { login } = this.state;
    return (
      <div className="App">
        <nav class="ph3 ph5-ns pv4 w-100">
          <div class="nowrap overflow-x-auto">
            {login ?
              <div>
                <Nav action={onRouteChange} link="users" name="Active Users" />
                <Nav action={onRouteChange} link="profile" name="Profile" />
                <Nav action={onLogOut} link="signin" name="Sign Out" />
              </div>
              :
              <div>
                <Nav action={onRouteChange} link="signin" name="Sign In" />
                <Nav action={onRouteChange} link="signup" name="Sign Up" />
              </div>
            }


          </div>
        </nav>
        {view}
      </div>
    );
  }
}

export default App;

import React ,{Component}from 'react';
import targets from '../targets.json';
import Account from '../Account';
class Accounts extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        fetch(targets.active)
        .then(response=>response.json())
        .then(data=>this.setState({users:data}))
    }
    render(){
        const {users}=this.state;
        const list=users.map(item=>{
            return <Account user={item}/>
        })
        return (<div className="mw6 center">
            {list}
        </div>);
    }
}
export default Accounts;
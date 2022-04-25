import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import User from './User';
import StateDemo from './StateDemo';
import StateClassDemo from './StateClassDemo';
import PropsWithFun from './PropsWithFun';
import PropsWithClass from './PropWithClass';
import GetValue from './GetValue';
import HideShowElement from './HideShowElement';
import FormDemo from './FormDemo';
import Profile from './Profile'
function App() {
  let data='Akhil';
  function apple(){
    data='Jain'
    alert(data)
  }
const [name,setName]=useState("Akhil")
  return (
    <div className="App">
      {/* <h1>{data}</h1>
      <Users />
      <User /> */}
      {/* wrong method to call */}
      {/* <button onClick={apple()}>Click Me</button>  */}
      {/* <button onClick={apple}>Click Me</button>
      <button onClick={()=>apple()}>Click Me</button> */}
      {/* <hr/>
      <StateDemo />
      <hr/>
      <StateClassDemo/>
      <hr/> */}
      {/* <h1>Props with Functional Component</h1>
      <PropsWithFun name={name} email="Akhil@gmail.com" address={{city:"Banglore", pin:"560068"}}/>
      <PropsWithFun name={"Jain"} email={"jain@gmail.com"} address={{city:"Banglore", pin:"560001"}}/>
      <PropsWithFun name={"Rini"} email={"Rini@gmail.com"} address={{city:"Banglore", pin:"560002"}}/>
      <button onClick={()=>{setName("Rohit")}}>Update name</button> */}

{/* <h1>Props with Class Component</h1>
<PropsWithClass name={name} email="Akhil@gmail.com"/>
<button onClick={()=>{setName("Rohit")}}>Update name</button> */}

{/* <GetValue/> */}
{/* <HideShowElement /> */}
      {/* <FormDemo /> */}
      <Profile />
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import UserDetails from "./components/userDetails";

export default function App(){


 //adding users start
const [username,setUsername]=useState("")
const [email,setEmail]=useState("")
const [counter,setCounter]=useState(4)
//adding users end



  const [users,setUsers]=useState([
    {
      id:1,
      username:"Ahmed",
      email :"ahmed@gmail.com"
    },
    {
      id:2,
      username:"Ahad",
      email :"ahad@gmail.com"
    },
    {
      id:3,
      username:"Shafay",
      email :"shafay@gmail.com"
    }
  ]);
  return <div>
<form onSubmit={(event)=>{
  event.preventDefault();
  const newUser={
    id:counter,
    username,
    email,
  };
  setCounter((setCounter)=> setCounter+1)
  setUsers ((currentUserState)=>[...currentUserState, newUser]);
}}>
  <div>
 <label  htmlFor="username"  > Username </label> <br/>
<input id="username" name="username" value={username} onChange={(event)=>{setUsername(event.target.value);}} required  /><br/>

 <label  htmlFor="email"  > Email </label><br/>
 <input id="email" name="email" value={email} onChange={(event)=>{setEmail(event.target.value);}} required />
 </div>
 <br/>
 <button>Add Users</button>
 
 </form>
 <br/><br/>
    {users.map((user)=>(
      <UserDetails key={user} user={user} setUsers={setUsers} />
    ))}
  </div>
}
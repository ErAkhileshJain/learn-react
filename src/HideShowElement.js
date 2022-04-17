import {useState} from 'react'
export default function HideShowElement(){
const [status,setStatus]=useState(true)
return (
<div>
    {
        status?<p>Hello</p>:null
    }
    {/* <button onClick={()=>setStatus(true)}>Show</button>
    <button onClick={()=>setStatus(false)}>Hide</button> */}

    <button onClick={()=>setStatus(!status)}>Toggle</button>
</div>
)    
}
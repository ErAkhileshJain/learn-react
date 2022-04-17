import { useState } from 'react'

export default function FormDemo() {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [tnc,setTNC]=useState(false)
const [option,setOptions]=useState("")
    function getFormDate(e) {
        console.log(name,email,option,tnc)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={getFormDate}>
                <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} /><br/>
                <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/><br/>
                <select onChange={(e)=>setOptions(e.target.value)}>
                    <option>-Select-</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select><br/>
                <input type="checkbox" onChange={(e)=>setTNC(e.target.checked)}/><span>Please Accept Tarms and conditions</span><br/><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
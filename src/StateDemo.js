//state Demo with functional component 

import {useState} from 'react'
export default function StateDemo(){
const [data,setData]=useState('Akhil')
    function updateData(){
    setData('Jain')
    }
    return(
    <div>
        <h1>State Demo</h1>
        <h3>{data}</h3>
        <button onClick={updateData}>Update</button>
    </div>
)
}
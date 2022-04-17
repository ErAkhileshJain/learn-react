import React, { useState } from "react";
export default function GetValue() {
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)

    function getValue(val) {
        setData(val.target.value)
        setPrint(false)
    }
    return (
        <div>
            <input type="text" onChange={getValue} />
            <h3>{data}</h3>
            {
                print?<h2>{data}</h2>:null
            }
            <button onClick={() => setPrint(true)}>Print</button>
        </div>
    )
}
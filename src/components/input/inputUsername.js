import React from 'react'

const Pantip = () =>{

    const [name,setName] = useState('hnuy')
    const handleClick =()=>{
        setName('nnnn')
    }

    return(
        <div>
        {name}
        <button onClick={handleClick}>Click</button>
        </div>
    )
}
import React, { useState } from 'react'
import Listitem from '../components/listitem'

const Pantip = () => {


    const [name, setName] = useState('')
    const [title, setTitle] = useState('')

    const [api, setapi] = useState([
        {
            title: 'title1',
            name: 'name1',
        },
        {
            title: 'title2',
            name: 'name1'
        },
        {
            title: 'title2',
            name: 'name1'
        }
    ])


    const addMore = () => {
        const data = {
            title: title,
            name: name
        }
        setapi([...api, data])
        console.log(api)
        
        setName('')
        setTitle('')
    }

    const addTitle = (e)=>{
        setTitle([e.target.value])
    }

    const addName = (e)=>{
        setName([e.target.value])
    }




    return (
        <div style={{ color: 'red' }}>
            <Listitem
                data={api}
            />
            <input type="text" name="name" value={title} onChange={addTitle} />
            <input type="text" name="title" value={name} onChange={addName} />
            <button onClick={addMore}>Add more</button>
        </div>
    )
}

Pantip.getInitialProps = ({ query }) => {
    console.log(query)
}


export default Pantip
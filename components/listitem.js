import React from 'react'

const Listitem = (props) => {
    const loopShow = (data) => {
        return data.map((item, key) => {
            return (
                <div key={key}>
                    {item.title} - {item.name}  {item.ads}
                </div>
            )
        })
    }
    const { data } = props

    return (
        <div>
            {loopShow(data)}
        </div>
    )
}



export default Listitem
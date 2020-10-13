import React from 'react'
export default function CardMaker(props){
    const {teammate} = props
    return(
        <div className='container'>
            <div className='cardDiv'>
                <h1 type='text' name='name'>{teammate.name}</h1>
                <h3 type='email' name='email'>{teammate.email}</h3>
                <h3 name='age'>{teammate.age}</h3>
            </div>
        </div>
    )
}
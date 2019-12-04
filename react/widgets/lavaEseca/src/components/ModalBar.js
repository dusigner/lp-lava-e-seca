import React, { Component } from 'react'

export default props => {

    const foo = elementList => elementList.map(el => <li>{el}</li>) 
   
    return (
        <div className="modal-bar">
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <ul>{foo(props.collection)}</ul>
            </div>
        </div>
    )
}
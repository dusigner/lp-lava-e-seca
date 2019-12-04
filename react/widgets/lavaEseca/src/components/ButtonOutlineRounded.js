import React from 'react'

export default props => {

    const callToAction = event => {
        const target = event.currentTarget
        const overlayContainerElement = document.querySelector('.container-overlay')
        overlayContainerElement.classList.add('invisible')
        // const contextParentNode = props.context
        // contextParentNode.classList.add('invisible')
    }

    return (
        <div className="btn-outline" onClick={callToAction}>
            <div className="btn-outline__icon">
                <i className="btn-outline__icon_type">X</i>
            </div>
            <span className="btn-outline__label">{props.label}</span>
        </div>
    )
}
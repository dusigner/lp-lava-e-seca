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
                <i className="btn-outline__icon_type">
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.679153" y="0.210449" width="16.0101" height="0.960606" rx="0.480303" transform="rotate(45 0.679153 0.210449)" fill="#F08B1D"/>
                        <rect x="-0.00012207" y="11.5312" width="16.0101" height="0.960606" rx="0.480303" transform="rotate(-45 -0.00012207 11.5312)" fill="#F08B1D"/>
                    </svg>
                </i>
            </div>
            <span className="btn-outline__label">{props.label}</span>
        </div>
    )
}
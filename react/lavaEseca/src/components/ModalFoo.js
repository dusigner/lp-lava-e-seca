import React from 'react'

export default class ModalFoo extends React.Component {

    constructor(props) {
        super(props)
        this.beforeAfter = this.beforeAfter.bind(this)
    }

    beforeAfter() {
        const sliderInstance = document.querySelector('#slider')
        const containerElementToImagesCompare = document.querySelector('#compare')

        containerElementToImagesCompare.style.width = sliderInstance.value + '%'
    }

    render() {
        return (
            <div className="modal-foo" onClick={this.test}>
                <figure>
                    <div id="compare"></div>
                </figure>
                <input id="slider" onInput={this.beforeAfter} onChange={this.beforeAfter} type="range" min="0" max="100" value="50" />
            </div>
        )
    }
}
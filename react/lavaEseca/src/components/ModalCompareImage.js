import React from 'react'

import Headline from './Headline'

export default class ModalCompare extends React.Component {

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
            <React.Fragment>
                <header className="modal__header  header-compare-image">
                    <h2 className="modal__title">Máximo Cuidado.</h2>
                </header>
                <div className="modal-compare-image" onClick={this.test}>
                    <figure>
                        <div id="compare"></div>
                    </figure>
                    <input id="slider" onInput={this.beforeAfter} onChange={this.beforeAfter} type="range" min="0" max="100" value="50" />
                </div>
                <div className="modal__heading_before">
                    <Headline 
                        title="Sem Woolmark"
                        subtitle="Apparel Care*"						
                    >
                    </Headline>	
                </div>
                <div className="modal__heading_after">
                    <Headline 
                        title="Com Woolmark"
                        subtitle="Apparel Care*"						
                    >
                    </Headline>
                </div>
                <footer className="modal__footer  footer-compare-image">
                    <p className="modal__paragraph">
                        **As imagens representam uma simulação gráfica e comparativa entre o ciclo de lavagem certificado pelo Woolmark Company, baseada em seus requisitos técnicos, e o ciclo comum de lavagem.
                    </p>
                </footer>
            </React.Fragment>
        )
    }
}
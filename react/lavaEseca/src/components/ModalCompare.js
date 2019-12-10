import React, { Component } from 'react'

// Libs
import BeforeAfterSlider from 'react-before-after-slider'
import ReactCompareImage from 'react-compare-image';

// Components
import Headline from './Headline'

export default class ModalCompare extends Component {
    render() {
        const compareImageBefore= "https://res.cloudinary.com/dins1gjdy/image/upload/v1575303726/whirlpool/diferenciais__modalCompare_before_j1y3wg.png"
        const compareImageAfter = "https://res.cloudinary.com/dins1gjdy/image/upload/v1575296345/whirlpool/diferenciais__modalCompare_after_pgtto4.png"

        return (
            <div className="modal__compare">
                <ReactCompareImage leftImage={compareImageBefore} rightImage={compareImageAfter} />;
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
            </div>
        )
    }
}
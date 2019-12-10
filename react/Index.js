import React, {Component} from 'react'
import { Header, SEO, Footer } from 'brastemp.components';
import LavaESeca from "./lavaEseca/src/lavaESeca";

class lavaESeca extends Component {

    constructor(props) {
        super(props);
    }
   
    render () { 
        return(
            <React.Fragment>
                <SEO title={"Brastemp Masterchef | Geladeira, Forno e Fogão Masterchef"} description={"A Brastemp no Masterchef vai ajudar você a também ser um dos melhores chefes do Brasil. Encontre seu fogão Masterchef, geladeira, forno, adega e mais."} />
                <main id="main" className="main">
                <Header id="header" hideSupportMenu={true} headerType="lavaeseca" />
                <LavaESeca />
                <Footer />
                </main>
            </React.Fragment>
        )
    }

}

export default lavaESeca;
import React, {Component} from 'react'
import { Header, SEO, Footer } from 'brastemp.components';
import LavaESeca from "./lavaEseca/src/lavaESeca";
import tagPlan from './lavaEseca/utils/tagPlan';

class lavaESeca extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new tagPlan();
      }
   
    render () { 
        return(
            <React.Fragment>
                <SEO title={"Lava e Seca | Encontre sua Máquina Lava e Seca | Brastemp"} description={"A lava e seca Brastemp é o modelo ideal para sua casa ou negócio. Confira as vantagens da melhor máquina lava e seca do mercado e compre online agora!"} />
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
import React, {Component} from 'react'
import { Header, Footer } from 'brastemp.components';
import LavaESeca from "./lavaEseca/src/lavaESeca";

class lavaESeca extends Component {

    constructor(props) {
        super(props);
    }
   
    render () { 
        return(
            <section>
                <Header id="header" hideSupportMenu={true} headerType="lavaeseca" />
                <LavaESeca />
                <Footer />
            </section>
        )
    }

}

export default lavaESeca;
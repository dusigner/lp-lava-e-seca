import React, {Component} from 'react'
import { Header, Footer } from 'brastemp.components';
import LavaESeca from "./lavaEseca/src/lavaESeca";

class lavaESeca extends Component {

    constructor(props) {
        super(props);
    }

    replaceImageURI() {
        document.querySelectorAll('img')
            .forEach(img => {
                let src = img.getAttribute('src')
                .replace('/_v/public/', '/_v/private/')
                .replace('published', 'linked');
                img.setAttribute('src', src);
            });
    }
    
    componentDidMount() {
        this.replaceImageURI();
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
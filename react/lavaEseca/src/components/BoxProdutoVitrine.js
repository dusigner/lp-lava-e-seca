import React, { Component } from 'react'

class BoxProdutoVitrine extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href="#" class="card card-product card-default has-border-on-hover">
                <div class="card-product__img">
                    <img 
                        alt="" 
                        src="" 
                        class="card-product__img-static" 
                        crossorigin="anonymous" />
                            <div class="FlagsHightLight js-item-flagshightlight">
                                <p class="flag btp-buscape">$btp-buscape</p>
                                <p class="flag btp-colecao-9">$btp-colecao-9</p>
                                <p class="flag [brastemp][categoria]-lavadora">$[brastemp][categoria]-lavadora</p>
                                <p class="flag [b8one]-colecao-edge">$[b8one]-colecao-edge</p>
                                <p class="flag lançamento-lavadoras">$lançamento-lavadoras</p>
                                <p class="flag [brastemp][desconto]-fim-de-semana">$[brastemp][desconto]-fim-de-semana</p>
                                <p class="flag lavadora-de-roupas">$lavadora-de-roupas</p>
                                <p class="flag [brastemp][black-friday]-frete-grátis">$[brastemp][black-friday]-frete-grátis</p>
                                <p class="flag [brastemp][black-friday]-antecipadas">$[brastemp][black-friday]-antecipadas</p>
                                <p class="flag [brastemp][black-friday]-até-40%-off">$[brastemp][black-friday]-até-40%-off</p>
                            </div>
                </div>
                <p class="card-product__sku">{this.props.sku}</p>
                <h4 class="card-product__title">{this.props.title}</h4>
                <div className="card-product__price">
                    <p className="card-product__price-before">
                        <span className="de">De: </span>
                        <s>R$ 1.500,00</s>
                    </p>
                    <p className="card-product__price-after">
                        <span className="de">Por:</span> R$ 1.000,00
                    </p>
                    <p className="card-product__price-divide">
                        {numberOfInstallments}x de{" "}
                        {valueInstallments} sem juros<br />
                        à vista no {promoBoleto ? 'boleto bancário: ' : 'cartão de crédito: 1x de '}{offerPriceFormated} 								
                    </p>
                    <StampPercentage
                        slug={modelo[0].slug}
                        installment={installment}
                        listPrice={listPrice}
                    />
                </div>
            </a>
        )
    }
}
export default Video;




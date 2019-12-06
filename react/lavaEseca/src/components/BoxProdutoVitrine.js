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
                        alt="{this.props.slug}"
                        src="{this.props.imgUrl}"
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
                <p class="card-product__sku">
                    BNQ10AS
                </p>
                <h4 class="card-product__title">
                    10kg/6kg prata Água Quente com Ciclo Tira Manchas Pro e Ciclo 1h Pronto para Vestir -BNQ10AS 110V
                </h4>
                <div className="card-product__price">
                    <p className="card-product__price-before">
                        <span className="de">De: </span>
                        <s>R$ 1.500,00</s>
                    </p>
                    <p className="card-product__price-after">
                        <span className="de">Por:</span> R$ 1.000,00
                    </p>
                    <p className="card-product__price-divide">
                        12x de{" "}
                        R$ 160,75 sem juros<br />
                        à vista no cartão de crédito: 1x de R$ 1.929,00	
                    </p>
                    <div className="card-product__badge card-product__badge-square card-product__badge-percentage">
						<div className="l-flex">
							<span className="card-product__badge-value">
								34
							</span>
						</div>
						<div className="l-flex">
							<span className="card-product__badge-percent">%</span>
							<span className="card-product__badge-off">OFF</span>
						</div>
					</div>
                </div>
            </a>
        )
    }
}
export default BoxProdutoVitrine;




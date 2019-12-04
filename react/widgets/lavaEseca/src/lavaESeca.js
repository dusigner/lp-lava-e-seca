import React, {Component} from 'react';
import { CardProdutoVitrine } from "brastemp.components";

// Libs
import Slider from "react-slick";
import StickyBox from "react-sticky-box";

// Components
import properties from '../public/props.json'
import Headline from './components/Headline' 
import Sections from './components/Section'
import Menu from './components/Menu'
import Button from './components/Button'
import SeeMore from './components/SeeMore'
import Modal from './components/Modal'
import ModalCompareImage from './components/ModalCompareImage'
import ModalTypeStainList from './components/ModalTypeStainList'
import Video from './components/Video'

// Modal
import ButtonOutline from './components/ButtonOutlineRounded'

// Assets
import './lava-e-seca.global.css';

const introBannerSmall = 'https://dusigner.com.br/intro-banner-360.png'; //360
const introBannerMedium = 'https://dusigner.com.br/intro-banner-720.png'; //720
const introBannerLarge = 'https://dusigner.com.br/intro-banner-1060.png'; //1060

const diferenciaisImageCoverMid = 'https://dusigner.com.br/diferenciais__cover_mid.png'; // 744
const diferenciaisImageCoverLarge = 'https://dusigner.com.br/diferenciais__cover_large.png'; // 1178

const detalhesPainelTouchSmall = 'https://dusigner.com.br/detalhes-painel_touch-360.png'; //360
const detalhesPainelTouchMedium = 'https://dusigner.com.br/detalhes-painel_touch-720.png'; //720

const detalhesLindoDesignGraySmall = 'https://dusigner.com.br/detalhes-lindo_design_gray-307.png'; //307
const detalhesLindoDesignGrayMedium = 'https://dusigner.com.br/detalhes-lindo_design_gray-614.png'; //614
const detalhesLindoDesignGrayLarge = 'https://dusigner.com.br/detalhes-lindo_design_gray-852.png'; //307
const detalhesLindoDesignGrayXlarge = 'https://dusigner.com.br/detalhes-lindo_design_gray-1704.png'; //614

const detalhesLindoDesignWhiteSmall = 'https://dusigner.com.br/detalhes-lindo_design_white-307.png'; //307
const detalhesLindoDesignWhiteMedium = 'https://dusigner.com.br/detalhes-lindo_design_white-614.png'; //614
const detalhesLindoDesignWhiteLarge = 'https://dusigner.com.br/detalhes-lindo_design_white-852.png'; //307
const detalhesLindoDesignWhiteXlarge = 'https://dusigner.com.br/detalhes-lindo_design_white-1704.png'; //614

const detalhesCestoInoxSmall = 'https://dusigner.com.br/detalhes-cesto_inox-333.png'; //333
const detalhesCestoInoxMedium = 'https://dusigner.com.br/detalhes-cesto_inox-666.png'; //666
const detalhesCestoInoxLarge = 'https://dusigner.com.br/detalhes-cesto_inox-931.png'; //333
const detalhesCestoInoxXlarge = 'https://dusigner.com.br/detalhes-cesto_inox-1862.png'; //666

const funcaVoltoLogoSmall = 'https://dusigner.com.br/funca-volto-logo-322.png';
const funcaVoltoLogoMedium = 'https://dusigner.com.br/funca-volto-logo-644.png';

const cicloEdredomSmall = 'https://dusigner.com.br/ciclo-edredon-322.png';
const cicloEdredomMedium = 'https://dusigner.com.br/ciclo-edredon-644.png';
const cicloEdredomLarge = 'https:///ciclo-edredon-1178.png';

const cicloTiraManchasCoverMid = "https://res.cloudinary.com/dins1gjdy/image/upload/v1575296961/whirlpool/ciclo-tira-manchas__cover_mid_rtkb1e.png"
const cicloTiraManchasFeaturedImageCanetinha = "https://res.cloudinary.com/dins1gjdy/image/upload/v1575242021/whirlpool/tira-manchas__featured-canetinha_mid_jfe42z.png"
const cicloTiraManchasFeaturedImageGordura = "https://res.cloudinary.com/dins1gjdy/image/upload/v1575242031/whirlpool/tira-manchas__featured-gordura_mid_rrzeah.png"

const cicloUmaHoraFeaturedImageCoverMid = "https://res.cloudinary.com/dins1gjdy/image/upload/v1575241822/whirlpool/ciclo-uma-hora__cover_mid_ax5rwo.png"

class lavaESeca extends React.Component {

	state = { currentSrc: '' };

	onLoad = (event) => {
		this.setState({
		currentSrc: event.target.currentSrc
		});
	}

	constructor() {
		super();
		this.state = {
		   menuStiky: 'show'
		}
	}

	componentDidMount() {
		window.onscroll = () => this.handleScroll();
	}

	handleScroll() {
		const altura = document.getElementById('intro').clientHeight;

	   if (document.documentElement.scrollTop > altura) {
		  this.setState({
			menuStiky: 'hidden',
		  })
		} 
		else{
			this.setState({
				menuStiky: 'show'
			})
		  } 
	  }
		  
	render() { 

		const settings = {
			dots: false,
			arrow: true,
			infinite: false,
			slidesToShow: 1,
			afterChange: function(index) {
				document.getElementById("sliderNumber").innerHTML = index + 1;
				if(index == 0)
					console.log("Painel Full Touch");
				if(index == 1)
					console.log("Sofisticado Design");
				if(index == 2)
					console.log("Cesto Inox");
			  }
		};
		const settingsTwo = {
			dots: false,
			arrow: true,
			fade: true,
			infinite: false,
			slidesToShow: 1,
			afterChange: function(index) {
				document.getElementById("sliderNumber").innerHTML = index + 1;
				if(index == 0)
				console.log("Cor Prata");
				if(index == 1)
				console.log("Cor Branca");
			  }
		};

		return (

			<div className="lava-e-seca">
				
				<Sections id="intro"  setClass="intro animation"> 
					<div className="container">
						<div className="page-title">
							<h2 className="subtitle-h2">{properties.sections.intro.subtitle}</h2>
							<h1 className="title-h1">{properties.sections.intro.title}</h1>
							<p className="description">{properties.sections.intro.description}</p>
							<SeeMore link="#detalhes" label="Saiba mais"/>
						</div>
					</div>
						<picture>
							<img 
								alt={properties.sections.intro.title}  
								src={introBannerSmall} 
								srcSet={`
									${introBannerSmall} 360w, 
									${introBannerMedium} 720w, 
									${introBannerLarge} 1060w
								`} 
								onLoad={this.onLoad} />
						</picture>
				</Sections>
				<StickyBox className={`menu-sticky ${this.state.menuStiky}`}>
					<Menu  />
				</StickyBox>
				<Sections id="detalhes" setClass="section">
					<div className="detalhes">
						<div className="container">
							<h3 className="title-h3">{properties.sections.detalhes.title}</h3>
							<div className="slider-counter"><span id="sliderNumber">1</span> / 3</div>
						</div>
						<Slider className="slider-detalhes " {...settings}>
							<div>
								<div className="slider-detalhes__slide">
									<Headline 
										title={properties.sections.detalhes.headline[0].title}
										subtitle={properties.sections.detalhes.headline[0].subtitle}
									></Headline>
									<div>
										<img 
										alt={properties.intro_full_touch}  
										src={detalhesPainelTouchSmall} 
										srcSet={`
											${detalhesPainelTouchSmall} 360w, 
											${detalhesPainelTouchMedium} 720w
										`} 
										onLoad={this.onLoad} />
									</div>
								</div>
							</div>
							<div>
								<div className="slider-detalhes__slide">
									<Headline 
										title={properties.sections.detalhes.headline[1].title}
										subtitle={properties.sections.detalhes.headline[1].subtitle}
									></Headline>
									<div>
										<Slider className="slider-lindo" {...settingsTwo}>
											<div>
												<div className="slider-lindo__slide">
													<img 
													alt={properties.intro_full_touch}  
													src={detalhesLindoDesignGraySmall} 
													srcSet={`
														${detalhesLindoDesignGraySmall} 306w, 
														${detalhesLindoDesignGrayMedium} 614w,
														${detalhesLindoDesignGrayLarge} 852w, 
														${detalhesLindoDesignGrayXlarge} 1704w
													`} 
													onLoad={this.onLoad} />
												</div>
											</div>
											<div>
												<div className="slider-lindo__slide">
													<img 
													alt={properties.intro_full_touch}  
													src={detalhesLindoDesignWhiteSmall} 
													srcSet={`
														${detalhesLindoDesignWhiteSmall} 306w, 
														${detalhesLindoDesignWhiteMedium} 614w,
														${detalhesLindoDesignWhiteLarge} 852w, 
														${detalhesLindoDesignWhiteXlarge} 1704w
													`} 
													onLoad={this.onLoad} />
												</div>
											</div>
										</Slider>
									</div>
								</div>
							</div>
							<div>
								<div className="slider-detalhes__slide">
									<Headline 
										title={properties.sections.detalhes.headline[2].title}
										subtitle={properties.sections.detalhes.headline[2].subtitle}
									></Headline>
									<div>
										<img 
											className="detalhes-cesto_inox"
											alt={properties.intro_full_touch}  
											src={detalhesCestoInoxSmall} 
											srcSet={`
												${detalhesCestoInoxSmall} 333w, 
												${detalhesCestoInoxMedium} 666w,
												${detalhesCestoInoxLarge} 931w,
												${detalhesCestoInoxXlarge} 1862w
											`} 
											onLoad={this.onLoad} />
									</div>
								</div>
							</div>
						</Slider>
						</div>
				</Sections>

				<Sections id="diferenciais" setClass="diferencias  section">

					<div className="diferencias__frame-bg"></div>
					<div className="diferencias__still-bg"></div>

					<div className="container">

						<hgroup className="section-page__heading  centered">
							<h3 className="title-h3">{properties.sections.diferenciais.title}</h3> 
						</hgroup>

						<article className="section-page__featured">
							<div className="section-page__featured_cover"></div>
							<div className="section-page__featured_content">

								<div className="featured__heading  my-default">
									<Headline 
										title={properties.sections.diferenciais.headline.title}
										subtitle={properties.sections.diferenciais.headline.subtitle}
										paragraphDefault={properties.sections.diferenciais.headline.paragraph.default}						
									>
									</Headline>			
								</div>

								<div className="featured__call-to-action  my-default">
									<Button link="#" label="Compare"></Button>
								</div>
							</div>
						</article>

					</div>
				</Sections>

				<Sections id="ciclo-tira-manchas" setClass="ciclo-tira-manchas  section">

					<div className="container">

						<hgroup className="section-page__heading  centered  invisible">
							<h3 className="title-h3">{properties.sections.ciclo_tira_mancha.title}</h3> 
						</hgroup>

						<article className="section-page__featured">
							<div className="section-page__featured_cover"></div>
							<div className="section-page__featured_content">

								<div className="featured__heading">
									<Headline 
										title={properties.sections.ciclo_tira_mancha.headline.title}
										subtitle={properties.sections.ciclo_tira_mancha.headline.subtitle}
										paragraphDefault={properties.sections.ciclo_tira_mancha.headline.paragraph.default}
										notice={properties.sections.ciclo_tira_mancha.headline.notice.default.paragraph[0]}
																
									>
									</Headline>			
								</div>

								<div className="featured_cover  my-default">
									<picture className="featured_cover__image-container  border">
										<img src={cicloTiraManchasCoverMid} srcSet="" title=""/>
									</picture>
								</div>

								<div className="featured__call-to-action  my-default">
									<Button link="#" label="Saiba mais"></Button>
								</div>

								<aside className="featured__thumbnail  my-default">

									<h4 className="title-h4  centered">Inclusive aquelas manchas mais dificeis...</h4>

									<figure className="featured__image-figure">
										<picture className="featured__image-container  border">
											<img className="featured__image" src={cicloTiraManchasFeaturedImageCanetinha} srcSet="" title="imagem mancha de canetinha"/> 
											<source srcSet="" media="" type="image/jpeg"></source>
										</picture>
										<figcaption className="featured__image-caption">Canetinha</figcaption>
									</figure>

									<figure className="featured__image-figure">
										<picture className="featured__image-container  border">
											<img className="featured__image" src={cicloTiraManchasFeaturedImageGordura} srcSet="" title="imagem mancha de gordura"/> 
											<source srcSet="" media="" type="image/jpeg"></source>
										</picture>
										<figcaption className="featured__image-caption">Gordura</figcaption>
									</figure>
								</aside>

								<Slider className="slider  my-default">

									<picture className="featured__image-container  px-default  border">
										<img src={cicloTiraManchasFeaturedImageCanetinha} srcSet="" title="imagem mancha de canetinha"/> 
										<source srcSet="" media="" type="image/jpeg"></source>
									</picture>

									<picture className="featured__image-container  border">
										<img src={cicloTiraManchasFeaturedImageGordura} srcSet="" title="imagem mancha de gordura"/> 
										<source srcSet="" media="" type="image/jpeg"></source>
									</picture>

								</Slider>
							</div>
						</article>

					</div>
				</Sections>
				
				<Sections id="ciclo-uma-hora" setClass="ciclo-uma-hora  section">

					<div className="container">

						<hgroup className="section-page__heading  centered  invisible">
							<h3 className="title-h3">{properties.sections.ciclo_tira_mancha.title}</h3> 
						</hgroup>

						<article className="section-page__featured">
							<div className="section-page__featured_cover">
								<picture className="featured_cover__image-container">
									<img src={cicloUmaHoraFeaturedImageCoverMid} srcSet="" title=""/>
								</picture>
							</div>
							<div className="section-page__featured_content">

								<div className="featured__heading">
									<Headline
										// mobile={ window.innerWidth <= 679 } 
										title={properties.sections.ciclo_uma_hora.headline.title}
										subtitle={properties.sections.ciclo_uma_hora.headline.subtitle}
										paragraphDefault={properties.sections.ciclo_uma_hora.headline.paragraph.default}
										paragraphMobile={properties.sections.ciclo_uma_hora.headline.paragraph.mobile}
										notice={properties.sections.ciclo_uma_hora.headline.notice.default.paragraph[0]}																
									>
									</Headline>			
								</div>

								<div className="featured_cover  my-default">
									<picture className="featured_cover__image-container">
										<img src={cicloUmaHoraFeaturedImageCoverMid} srcSet="" title=""/>
									</picture>
								</div>
								
								<p className="section-page__paragraph  paragraph-notice">{properties.sections.ciclo_uma_hora.headline.notice.default.paragraph[0]}</p>
								
								<div className="featured__call-to-action">
									<SeeMore link="#funcao-volto-logo" label="Veja mais" />
								</div>

							</div>
						</article>

					</div>
				</Sections>								

				<Sections id="funcao-volto-logo" setClass="funcao-volto-logo section" ref={this.myRef}>
					<div className="container">
						<Headline 
							title={properties.sections.funcao_volto_logo.headline.title}
							subtitle={properties.sections.funcao_volto_logo.headline.subtitle}
							paragraphDefault={properties.sections.funcao_volto_logo.headline.paragraph.default}
						></Headline>
						<picture className="border">
							<img 
								alt={properties.sections.funcao_volto_logo.headline.title}  
								src={funcaVoltoLogoSmall} 
								srcSet={`.section-page__featured {
									grid-row: 3;
								}
									${funcaVoltoLogoSmall} 322w, 
									${funcaVoltoLogoMedium} 644w
								`} 
								onLoad={this.onLoad} />
						</picture>
						<p className="small">
							{properties.sections.funcao_volto_logo.asterisk[0]} <br />
							{properties.sections.funcao_volto_logo.asterisk[1]}
						</p>
						<SeeMore link="#ciclo-edredom" label="Veja mais" />
					</div>
				</Sections>

				<Sections id="ciclo-edredom" setClass="ciclo-edredom section">
					<div className="container">
						<Headline 
							title={properties.sections.ciclo_edredom.headline.title}
							subtitle={properties.sections.ciclo_edredom.headline.subtitle}
							paragraphDefault={properties.sections.ciclo_edredom.headline.paragraph.default}
						></Headline>
					
						<picture className="border">
							<img 
							alt={properties.sections.funcao_volto_logo.headline.title}  
							src={cicloEdredomSmall} 
							srcSet={`
								${cicloEdredomSmall} 322w, 
								${cicloEdredomMedium} 644w
							`} 
							onLoad={this.onLoad} />
						</picture>
						<p className="small">
							{properties.sections.ciclo_edredom.asterisk}
						</p>
						<SeeMore link="#play-video" label="Veja mais" />
					</div>
				</Sections>

				<Sections id="play-video" setClass="play-video">
					<Video setSrc="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
				</Sections>

				{/* <CardProdutoVitrine
                    key={index}
                    brand={"Brastemp"}
                    position={index + 1}
                    produto={item}
                    categoria={item.categoriaNome}
                    page={page}
                    list={list}
                    price={price}
                    installment={installment}
                    comparar={comparar}
                    handleCompareProducts={this.handleCompareProducts}
                    products={products[index].linkText}
                    pageDepartment={pageDepartment}
                    disableCompareBtn={disableCompareBtn}
                    listPrice={listPrice}
                    buttonTitle={buttonTitle}
                    cardHibrid={cardHibrid}
                    external={external}
                /> */}

				<aside className="container-overlay  invisible">
					<ButtonOutline label="Fechar" /> 
					<ModalCompareImage />
					<ModalTypeStainList
						title={properties.sections.ciclo_tira_mancha.modal.stain.title}
						columOne={properties.sections.ciclo_tira_mancha.modal.stain.type_stain.one}
						columTwo={properties.sections.ciclo_tira_mancha.modal.stain.type_stain.two}
						columThree={properties.sections.ciclo_tira_mancha.modal.stain.type_stain.three}
						columFour={properties.sections.ciclo_tira_mancha.modal.stain.type_stain.four}
						columFive={properties.sections.ciclo_tira_mancha.modal.stain.type_stain.five}
					></ModalTypeStainList>		
				</aside>

			</div>
			
		) }
	}
export default lavaESeca;

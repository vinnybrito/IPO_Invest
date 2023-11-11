import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cabecalho from "./Cabecalho";
import IpoInvest from '../Img/IPO/ipoinvest01.png'
import Personagem from '../Img/IPO/personagempng.png'
import itensGame from '../Img/IPO/itensgames.png'
import Footer from "./Footer";

export default function Ipo() {

    useEffect(() => {
        AOS.init({
          duration: 1000 // define a duração da animação em milissegundos
        });
      }, []);

    return (
        <div id="ipo">
            <Cabecalho />
            <main id="conteudo-ipo">

                <article id="article-img">
                    <div id="img-ipo"></div>
                </article>

                <article id="whats-ipo" className="artigos-ipo">

                    <section>

                        <h1 className="titulos-conteudo-ipo">O que é IPO?</h1>

                        <p className='espacamento-texto'>
                            O IPO significa <i>“Initial Public Offering”</i>, uma sigla em inglês que significa “Oferta Pública Inicial”. Essa oferta se refere a um evento realizado na Bolsa de Valores, na qual uma empresa, pela primeira vez, oferece a oportunidade de investidores, como você, a se tornararem sócios dela por meio da compra de ações.
                        </p>

                        <p>
                            Por esse motivo nós buscamos ajudar todas as pessoas que estão interessadas e dar a confiança necessária para que elas possam investir na bolsa. Venha conhecer o nosso projeto e como ele pode te ajudar!
                        </p>
                    </section>

                </article>

                <article className="artigos-ipo" data-aos="fade-up">

                    <section className="conteudo-section">
                        <div className="texto-img-section">
                            <h1 className="titulos-conteudo-ipo">
                                O que é o IPO Invest?
                            </h1>
                            <p className='espacamento-texto'>
                                IPO Invest é uma plataforma desenvolvida para te ajudar a conhecer e entender como funciona os investimentos feitos em IPO. <br /> <br />

                                Por meio de simulações, você vai aprender, como realizar o seu primeiro investimento, a como escolher a empresa certa, e vai poder também a usufruir os beneficos de seus investimentos.
                                
                            </p>
                        </div>

                        <div>
                            <figure>
                                <img src={IpoInvest} alt={'logo do celular ipo invest'} id="img-abrircapital" />
                            </figure>
                        </div>


                    </section>

                </article>

                <article className="artigos-ipo" data-aos="fade-up">

                    <section  className="conteudo-section">

                        <div>
                            <figure className="texto-img-section">
                                <img src={Personagem} alt={'Nosso personagem'} id="img-prospecto" />
                            </figure>
                        </div>

                        <div>
                            <h1 className="titulos-conteudo-ipo">Como o IPO Invest funciona</h1>
                            <p className='espacamento-texto'>
                                Após se cadastrar em nosso site, Você poderá inciar sua jornada no mundo de investimento. na plataforma, você terá acesso ao seu avatar e o seu quarto, na qual poderá realizar os seus investimentos. Lá, você poderá comprar o seu primeiro IPO, vender suas ações e também comprar itens para o seu quarto.
                            </p>
                        </div>
                        
                    </section>

                </article>

                <article className="artigos-ipo" data-aos="fade-up">
                    <section  className="conteudo-section">

                        <div>
                            <figure className="texto-img-section">
                                <img src={itensGame} alt={'Itens game'} id="img-prospecto" />
                            </figure>
                        </div>

                        <div>
                            <h1 className="titulos-conteudo-ipo">Itens e conquistas para decorar o seu quarto</h1>
                            <p className='espacamento-texto'>
                                Após se cadastrar em nosso site, Você poderá inciar sua jornada no mundo de investimento. na plataforma, você terá acesso ao seu avatar e o seu quarto, na qual poderá realizar os seus investimentos. Lá, você poderá comprar o seu primeiro IPO, vender suas ações e também comprar itens para o seu quarto.
                            </p>
                        </div>
                        
                    </section>
                </article>
            </main>
            <Footer />

        </div>
    )
}


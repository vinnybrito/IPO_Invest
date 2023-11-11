import React from "react";
import Homem from "../Img/Home/homem.png"
import Homem2 from "../Img/Home/Homem2.png"
import Mulher from "../Img/Home/mulher.png"
import Cabecalho from "./Cabecalho";
import Footer from "./Footer";

import {Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import 'animate.css/animate.min.css';

export default function Home() {

    return (

        <body>
          <Cabecalho />
          <main id="conteudo-principal">

            <article>

              <Carousel interval={4000}>
                <Carousel.Item>
                  <article className="second-article">
  
                    <section className="img-2">
                      <figure className="img-2-2">
                        <img src={Homem2} alt={'Imagem de um homem feliz investindo'} id="aprenda-investir-img"/>
                      </figure>   
                    </section>
  
                    <section className="frase-2">
                      <aside>
                        <h2 id="palavra-chave" className="frases-efeito animate__animated animate__bounceInRight">Aprenda a investir</h2>
                        <h2 className="frases-efeito animate__animated animate__bounceInRight"> E deixe o medo e a incerteza para trás</h2>
                        <h3>Cadastre-se e venha aprender na prática como <br/>
                          você pode investir na bolsa de valores por meio do IPO </h3>
                        <button className="cadastre-se">
                          <Link to="/cadastro">Cadastre-se</Link>
                        </button>
                      </aside>
                    </section>
                  </article>
                </Carousel.Item>
                
                <Carousel.Item>
                  <article className="second-article">

                  <section className="img-2">
                    <figure className="img-2-2">
                      <img src={Mulher} alt={'Imagem de um homem feliz investindo'} id="aprenda-investir-img"/>
                    </figure>   
                  </section>

                  <section className="frase-2">
                    <aside>
                      <h2 id="palavra-chave" className="frases-efeito animate__animated animate__bounceInRight">Seja dono do seu futuro financeiro</h2>

                      <h2 className="frases-efeito animate__animated animate__bounceInRight">E cresça cada vez mais</h2>

                      <h3>  
                        Aprenda o que é IPO e crie coragem <br/>
                        para realizar o seu primeiro investimento 
                      </h3>
                        <button className="cadastre-se">
                          <Link to="/ipo">Saiba mais</Link>
                        </button>

                    </aside>
                  </section>
                </article>
                </Carousel.Item>

                <Carousel.Item>
                <article className="second-article">

                  <section className="img-2">
                    <figure className="img-2-2">
                      <img src={Homem} alt={'Imagem de um homem feliz investindo'} id="aprenda-investir-img"/>
                    </figure>   
                  </section>

                  <section className="frase-2">
                    <aside>
                      <h2 id="palavra-chave" className="frases-efeito animate__animated animate__bounceInRight"> Aprenda a investir</h2>

                      <h2 className="frases-efeito animate__animated animate__bounceInRight">enquanto você se diverte</h2>

                      <h3>  
                        Aprender enquanto joga é a melhor forma de aprender.<br/>
                        Venha e participe do IPO invest
                      </h3>

                      <button className="cadastre-se">
                          <Link to="/simulacoes">IPO invest</Link>
                        </button>
                    </aside>
                  </section>
                </article>
                </Carousel.Item>
              </Carousel>

            </article>

            <article className="art-box">

              <section className="titulo-box">
                <h2>Venha aprender</h2>
              </section>

              <section id="links-to-IPO">

                <Link to="/ipo">
                    <article className="box" id="cstyle">
                        <p className="link-box-ipo">
                            O que e IPO?
                        </p>
                    </article>
                </Link>

                <Link to="/ipo">
                    <article className="box" id="cstylec">
                        <p className="link-box-ipo">
                          Por que investir?
                        </p>
                    </article>
                </Link>

                <Link to="/ipo">
                <article className="box" id="astyle">
                        <p className="link-box-ipo">
                          Aprenda na prática
                        </p>
                    </article>
                </Link>

              </section>
            </article>
          </main>
          <Footer />
        </body>
      )
}
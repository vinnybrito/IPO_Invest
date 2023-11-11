import React from 'react';

import Cabecalho from "./Cabecalho";
import Footer from "./Footer";
import fotoPerfil from "../Img/Perfil/imgperfil.jpg"


export default function Perfil() {
    return (
        <div>
            <Cabecalho />
            <main>
                <article className="perfil-img">

                    <section className="fundo">
                        <img src={fotoPerfil} alt="foto de perfil" className='figure-perfil' />
                    </section>

                    <section>
                        <h1>Seja bem vindo <br /> Lucas Rodrigues</h1>
                    </section>
                </article>

                
                
            </main>

            
            <Footer />
        </div>
    );
}
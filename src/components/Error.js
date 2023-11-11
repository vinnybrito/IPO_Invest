import Cabecalho from "./Cabecalho";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ImgErro from "../Img/Erro/crying.png"

export default function Error() {

    return (
        <div id="erro">
            <Cabecalho />
            <main id="main-erro">
                <img src={ImgErro} alt="Boneco triste"/>
                <h1>OOPS...</h1>
                <p>A página que você estava buscando não foi encontrada.</p>
                <button id="voltar">
                    <Link to="/">Voltar a página inicial</Link>
                </button>
            </main>
            <Footer />
        </div>
    )
}
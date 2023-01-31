import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target="_blank">
                            <img src="imagens/fb.png" alt='Logo facebook'></img>
                        </a>
                    </li>

                    <li>
                        <a href='twitter.com' target="_blank">
                            <img src='imagens/tw.png' alt='Logo twitter'></img>
                        </a>
                    </li>

                    <li>
                        <a href='instagram.com' target="_blank">
                            <img src='imagens/ig.png' alt='Logo instagram'></img>
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <img src='imagens/logo.png' alt='Logo organo'></img>
            </section>

            <section>
                <p>
                    Desenvolvido por Vinicius Vaz
                </p>
            </section>


        </footer>
    )
}

export default Rodape
import livro1 from '../../assets/livro1.png'
import s from './LivrosDoados.module.scss'

export default function LivrosDoados() {
  return (
    <main>
        <section className={s.LivrosDoacao}>
            <h2>Livros Doados</h2>
            <div className={s.LivrosDoados}>
            <section>
                <img src={livro1} alt="Imagem livro doado" />
                <p>O protagonista</p>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
            </section>
            </div>
        </section>
    </main>
    );
  }
  
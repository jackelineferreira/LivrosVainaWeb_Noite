import livro1 from '../../assets/livro1.png'
import s from './LivrosDoados.module.scss'

export default function LivrosDoados() {
  return (
    <section className={s.livrosDoados}>
      <h2>Livros Doados</h2>
      <section>
        <img src={livro1} alt="Capa do livro o protagonista" />
        <div className={s.livro}>
          <h3>O Protagonista</h3>
          <p>Susane Andrade</p>
          <p>Ficção</p>
        </div>
      </section>

    </section>

  );
}
  
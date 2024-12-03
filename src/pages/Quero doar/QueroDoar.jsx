import IconeLivro from '../../assets/iconelivro.png'
import s from './QueroDoar.module.scss'

export default function QueroDoar() {
    return (
      <section className={s.QueroDoarsection}>
        <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
        <form action="">
          <div>
            <img src={IconeLivro} alt="Imagem com icone do livro com bordar azuis" />
            <h2>Informações do Livro</h2>
          </div>
          <input type="text" name="" placeholder='Título' />
          <input type="text" name="" placeholder='Categoria' />
          <input type="text" name="" placeholder='Autor' />
          <input type="text" name="" placeholder='Link da Imagem' />
          <input type="submit" value="Doar" className={s.buttonDoar}/>
        </form>
      </section>
    );
}
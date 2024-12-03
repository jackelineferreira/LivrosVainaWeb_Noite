import s from './footer.module.scss'
import logoface from '../../assets/logoface.png'
import logoinsta from '../../assets/logoinsta.png'
import logoTwiter from '../../assets/LogoTwiter.png'
import logoYoutube from '../../assets/LogoYoutube.png'
import logoLinkedin from '../../assets/logoLinkedin.png'


export default function Footer() {
    return (
      <footer className={s.footer}>
        <section className={s.contatosFooter}>
          <p>4002 - 8922</p>
          <nav>
            <a href=""><img src={logoface} alt="Imagem branca da logo do FaceBook" /></a>
            <a href=""><img src={logoinsta} alt="Imagem branca da logo do Instagram" /></a>
            <a href=""><img src={logoTwiter} alt="Imagem branca da logo do Twiter" /></a>
            <a href=""><img src={logoYoutube} alt="Imagem branca da logo do Youtube" /></a>
            <a href=""><img src={logoLinkedin} alt="Imagem branca da logo do Linkedin" /></a>
          </nav>
        </section>
        <section className={s.copyright}>
          <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
        </section>
      </footer>
    );
  }
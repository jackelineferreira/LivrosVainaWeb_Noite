import logolivro from '../../assets/logolivro.png'
import lupa from '../../assets/lupa.png'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/Inicio/Inicio'
import LivrosDoados from '../../pages/Livros doados/LivrosDoados'
import QueroDoar from '../../pages/Quero doar/QueroDoar'
import s from './header.module.scss'


export default function Header(){
    return(
        <BrowserRouter>
        <header className={s.header}>
           <section className={s.logoHeader}>
            <img src={logolivro} alt="Imagem de ilustração de livro com capa azul aberto" />
            <h1>Livros Vai na Web</h1>
           </section>
           <nav className={s.navHeader}>
            <ul>
                <li><Link className={s.link} to='/'>Início</Link></li>
                <li><Link className={s.link} to='/LivrosDoados'>Livro Doados</Link></li>
                <li><Link className={s.link} to='/QueroDoar'>Quero Doar</Link></li>
            </ul>
           </nav>
           <section className={s.barraDeBusca}>
            <input type="search" name="" id="" placeholder='O que você procura?'/>
            <button><img src={lupa} alt="Imagem de lupa branca" /></button>
           </section>
        </header>
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/LivrosDoados' element={<LivrosDoados/>}/>
            <Route path='/QueroDoar' element={< QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
    );
}
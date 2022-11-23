import { useEffect, useState } from 'react'
import Arrow from '../icons/navbar/Arrow'
import Burguer from '../icons/navbar/Burguer'
import Start from '../icons/navbar/Start'

const Navbar = () => {

    const [navMenu, setNavMenu] = useState(false)

    const navbarBackground = () => {
        const $navbar = document.querySelector('.navbar')
        if (window.scrollY > 0) {
            $navbar.classList.add('navbar-scroll')
        } else {
            $navbar.classList.remove('navbar-scroll')
        }
    }


    useEffect(() => {
        navbarBackground()
    }, [])

    window.addEventListener('scroll', () => {
        navbarBackground()
    })

    return (
        <nav className='navbar'>
            <div className='logo'>
                <Start />
                <span>Sites</span>
            </div>
            <div className='burguer'>
                <button onClick={() => { setNavMenu(true) }} className='cursor-pointer'>
                    <Burguer />
                </button>
            </div>
            <div className={'nav-menu ' + (navMenu ? 'nav-menu-visible' : null)}>
                <div className='arrow'>
                    <button onClick={() => { setNavMenu(false) }} className='cursor-pointer'>
                        <Arrow />
                    </button>
                </div>
                <ul className='nav-links'>
                    <li className='link'>
                        <button onClick={() => { setNavMenu(false) }} className='btn'>Inicio</button>
                    </li>
                    <li className='link'>
                        <button onClick={() => { setNavMenu(false) }} className='btn'>Servicios</button>
                    </li>
                    <li className='link'>
                        <button onClick={() => { setNavMenu(false) }} className='btn'>Contacto</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
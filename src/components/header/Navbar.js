import { useEffect, useState } from 'react'
import Arrow from '../icons/Arrow'
import Burguer from '../icons/Burguer'
import Start from '../icons/Start'

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

    const handleNavMenu = () => {
        const $navMenu = document.querySelector('.nav-menu'),
            $arrow = document.querySelector('.arrow svg')

        if (navMenu) {
            $navMenu.classList.add('nav-menu-visible')
            $arrow.style.transform = 'rotate(180deg)'
        } else {
            $navMenu.classList.remove('nav-menu-visible')
            $arrow.style.transform = 'rotate(0deg)'
        }
    }

    useEffect(() => {
        handleNavMenu()
        navbarBackground()
        // eslint-disable-next-line
    }, [navMenu])

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
            <div className='nav-menu'>
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
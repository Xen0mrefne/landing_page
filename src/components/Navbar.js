import { useEffect, useState } from 'react'
import Arrow from './icons/Arrow'
import Burguer from './icons/Burguer'
import Start from './icons/Start'

const Navbar = () => {

    const [navMenu, setNavMenu] = useState(false)

    useEffect(() => {
        const $navMenu = document.querySelector('.nav-menu'),
              $arrow = document.querySelector('.arrow svg')

        if (navMenu) {
            $navMenu.classList.add('nav-menu-visible')
            $arrow.style.transform = 'rotate(180deg)'
        } else {
            $navMenu.classList.remove('nav-menu-visible')
            $arrow.style.transform = 'rotate(0deg)'
        }
    }, [navMenu])

  return (
    <nav className="navbar">
        <div className="logo">
            <Start />
            <span>Sites</span>
        </div>
        <div className="burguer">
            <button onClick={() => {setNavMenu(true)}} className='cursor-pointer'>
                <Burguer />
            </button>
        </div>
        <div className="nav-menu">
            <div className="arrow">
                <button onClick={() => {setNavMenu(false)}} className='cursor-pointer'>
                    <Arrow />
                </button>
            </div>
            <ul className="nav-links">
                <li className="link">
                    <button className="btn">link</button>
                </li>
                <li className="link">
                    <button className="btn">link</button>
                </li>
                <li className="link">
                    <button className="btn">link</button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
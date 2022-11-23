import { useState } from 'react'
import Hammer from '../icons/services/Hammer'
import Pencil from '../icons/services/Pencil'
import Modal from '../modal/Modal'

const Services = () => {

    const services = {
        createWebSite: {
            title: "Diseño de Sitio Web",
            features: [
                "Pagina de tipo Landing Page u One page",
                "Diseño responsive (compatible con PC, Tablet, Smartphones)",
                "Iconos personalizados",
                ""
            ]
        },
        editWebSite: {
            title: "Modificacion de Sitio Web",
            features: [
                ""
            ]
        }
    }

    const [modal, setModal] = useState({show: false, info: {title: "", features: []}})

  return (
    <section className='services'>
        <h2 className='title'>Servicios</h2>
        <ul className='service-list'>
            <li onClick={() => {setModal({show: true, info: services.createWebSite})}} className='service'>
                <div className='art'>
                    <Hammer />
                </div>
                <div className='name'>{services.createWebSite.title}</div>
            </li>
            <li onClick={() => {setModal({show: true, info: services.editWebSite})}} className='service'>
                <div className='art'>
                    <Pencil />
                </div>
                <div className='name'>{services.editWebSite.title}</div>
            </li>
        </ul>
        <Modal data={modal} setModal={setModal} />
    </section>
  )
}

export default Services
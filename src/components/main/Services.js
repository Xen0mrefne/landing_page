import { useState } from 'react'
import Modal from '../modal/Modal'

const Services = () => {

    const services = {
        createWebSite: {
            title: "Diseño de Sitio Web",
            features: [
                "Pagina de tipo Landing Page u One page",
                "Diseño responsive",
                "Iconos personalizados"
            ]
        },
        editWebSite: {
            title: "Modificacion de Sitio Web",
            features: [
                ""
            ]
        }
    }

    const [modal, setModal] = useState({show: false, info: {}})

  return (
    <section className='services'>
        <h2 className='title'>Servicios</h2>
        <ul className='service-list'>
            <li onClick={() => {setModal({show: true, info: services.createWebSite})}} className='service'>
            </li>
            <li onClick={() => {setModal({show: true, info: services.editWebSite})}} className='service'>
            </li>
        </ul>
        <Modal data={modal} setModal={setModal} />
    </section>
  )
}

export default Services
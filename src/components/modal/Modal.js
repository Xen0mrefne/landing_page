import React, { useEffect } from 'react'

const Modal = ({data, setModal}) => {
    
    const {show, info} = data

    useEffect(() => {
        const $modal = document.querySelector('.modal')
        
        if (show) {
            $modal.style.bottom = (window.innerHeight / 2 - $modal.clientHeight / 2) + 'px'
            document.body.style.overflowY = 'hidden'
        } else {
            $modal.style.bottom = '100vh'
            document.body.style.overflowY = 'scroll'
        }

    }, [info, show])

    const hideModal = () => {
        setModal({show: false, info: info})
    }


  return (
    <div onClick={hideModal} className={'modal-bg ' + (show ? 'modal-bg-visible' : null)}>
        <div onClick={(e) => {e.stopPropagation()}} className={'modal ' + (show ? 'modal-visible' : null)}>
            <h2 className='title'>{info.title}</h2>
            <ul className='features'>
                {info.features.map((feature, index) => <li key={index}>{feature}</li>)}
            </ul>
            <button onClick={hideModal} className='btn'>cerrar</button>
        </div>
    </div>
  )
}

export default Modal
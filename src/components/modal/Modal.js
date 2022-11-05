import React, { useEffect } from 'react'

const Modal = ({data, setModal}) => {
    
    const {show, info} = data

    useEffect(() => {
        const $modalBg = document.querySelector('.modal-bg')
        const $modal = document.querySelector('.modal')
        
        if (show) {
            $modalBg.classList.add('modal-bg-visible')
            $modal.style.top = (window.innerHeight / 2 - $modal.clientHeight / 2) + 'px'
        } else {
            $modal.style.top = (-$modal.clientHeight) + 'px'
            $modalBg.classList.remove('modal-bg-visible')
        }

    }, [info, show])

    const hideModal = () => {
        setModal({show: false, info: info})
    }


  return (
    <div onClick={hideModal} className='modal-bg'>
        <div onClick={(e) => {e.stopPropagation()}} className='modal'>
            <h2 className='title'>{info.title ? info.title : null}</h2>
            <ul className='features'>
                {info.features ? info.features.map((feature, index) => <li key={index}>{feature}</li>) : null}
            </ul>
            <button onClick={hideModal} className='btn'>cerrar</button>
        </div>
    </div>
  )
}

export default Modal
import { useHref, useLinkClickHandler, useLocation } from "react-router-dom";
import { NavInformer } from "../../components/NavInformer";
import { Sidebar } from "../../components/Sidebar";
import style from './styles.module.scss';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from "react";
import logo from '../../assets/logo.png'

export function About() {

    let subtitle;
    const breadCrumb = [
        { title: 'Início', url: '/' },
        { title: 'Sobre', url: '/about' }
    ]

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [modalIsOpen, setIsOpen] = useState(true);
    function afterOpenModal() {
        subtitle.style.color = '#f00';
      }

    return (
        <div className={style.container}>
            <Sidebar />
            <NavInformer path={breadCrumb} />

            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={()=> setIsOpen(false)}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div>
                        <img src={logo} alt="Logo Docspider" />
                        <p>Versão 1.1.1.1</p>
                    </div>
                </Modal>
            </div>
        </div>
    )
}
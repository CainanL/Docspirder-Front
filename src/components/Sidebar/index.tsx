import style from './styles.module.scss';
import { SidebarCard } from './SidebarCard';
import { AiFillHome } from 'react-icons/ai';
import { FaRegCopy } from 'react-icons/fa';
import { GiInfo } from 'react-icons/gi';
import { useEffect, useRef, useState } from 'react';
import { useSidebarToggle } from '../../hooks/SidebarContext';
import { useDetectClickOutside } from 'react-detect-click-outside';

export function Sidebar() {

    const { isOpen } = useSidebarToggle();

    return (
        <div>
            <div className={isOpen ? style.sidebarContainer : style.sidebarContainerCollapsed}>
                <SidebarCard
                    title='Inicio'
                    icon={AiFillHome}
                    isActive={isOpen}
                    link="/"
                />
                <SidebarCard
                    title='Meus Documentos'
                    icon={FaRegCopy}
                    isActive={isOpen}
                    link="/myDocuments"
                />
                <SidebarCard
                    title='Sobre'
                    icon={GiInfo}
                    isActive={isOpen}
                    link="/about"
                />
            </div>
        </div >
    )
}
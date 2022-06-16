import style from './styles.module.scss';
import { SidebarCard } from './SidebarCard';
import { AiFillHome } from 'react-icons/ai';
import { FaRegCopy } from 'react-icons/fa';
import { GiInfo } from 'react-icons/gi';
import { useState } from 'react';

interface SidebarProps {
    active: (isActive: boolean) => void
    isActive?: boolean;
}

export function Sidebar({ active, isActive }: SidebarProps) {

    function onClose() {
        active(false);
    };

    return (
        <div>
            <div className={isActive ? style.sidebarContainerCollapsed : style.sidebarContainer }>
                <SidebarCard
                    title='Inicio'
                    icon={AiFillHome}
                    isActive={isActive}
                />
                <SidebarCard
                    title='Meus Documentos'
                    icon={FaRegCopy}
                    isActive={isActive}
                />
                <SidebarCard
                    title='Sobre'
                    icon={GiInfo}
                    isActive={isActive}
                />
            </div>
        </div>
    )
}
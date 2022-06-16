import style from './styles.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { Sidebar } from '../Sidebar';

export function Header() {

    const [sidebar, setSidebar] = useState(false);
    function toggleSidebar() {
        setSidebar(previous => !previous);
    };

    return (
        <>
            <div className={style.header}>
                <button onClick={toggleSidebar}>
                    <GiHamburgerMenu
                        color="white"
                        size={30}
                    />
                </button>
                <img
                    height={40}
                    src={logo}
                />
            </div>
            <Sidebar
                active={setSidebar}
                isActive={sidebar}
            />
        </>
    )
}
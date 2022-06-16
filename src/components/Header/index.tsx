import style from './styles.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/logo.png'
import { useSidebarToggle } from '../../hooks/SidebarContext';

export function Header() {
    const { isOpen, setIsOpen } = useSidebarToggle();


    function toggleSidebar() {
        setIsOpen(!isOpen);
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
        </>
    )
}
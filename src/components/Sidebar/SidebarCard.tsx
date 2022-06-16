import style from './styles.module.scss';
import { IconType } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';

interface SidebarCardProps {
    title: string;
    icon: IconType;
    isActive?: boolean;
    link: string;
};

export function SidebarCard({
    title,
    icon: Icon,
    isActive,
    link
}: SidebarCardProps) {

    const { pathname } = useLocation();

    let isInFocus = pathname.startsWith(String(link));
    if(link == '/' && pathname.length > 1) isInFocus = false;

    return (
        <Link
            to={link}
            className={style.sidebarCard}
        >
            <Icon size={25} color={isInFocus ? '#468bcb':''}/>
            {
                isActive &&
                <p style={isInFocus ? {fontWeight: 'bold', color: '#468bcb' } :{}}>{title}</p>
            }
        </Link >
    )
}
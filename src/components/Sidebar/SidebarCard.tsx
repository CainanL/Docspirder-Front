import style from './styles.module.scss';
import { IconType } from 'react-icons';

interface SidebarCardProps {
    title: string;
    icon: IconType;
    isActive?: boolean;
};

export function SidebarCard({
    title,
    icon: Icon,
    isActive
}: SidebarCardProps) {
    return (
        <div className={style.sidebarCard}>
            <Icon size={25} />
            {
                !isActive &&
                <p>{title}</p>
            }
        </div>
    )
}
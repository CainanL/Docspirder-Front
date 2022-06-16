import { useHref, useLinkClickHandler, useLocation } from "react-router-dom";
import { NavInformer } from "../../components/NavInformer";
import { Sidebar } from "../../components/Sidebar";
import style from './styles.module.scss';

export function About(){
    

    const breadCrumb = [
        {title: 'Início', url: '/'},
        {title: 'Sobre', url: '/about'}
    ]

    return (
        <div className={style.container}>
            <Sidebar />
            <NavInformer path={breadCrumb}/>
        </div>
    )
}
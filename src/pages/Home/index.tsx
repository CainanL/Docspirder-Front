import { Link, Pathname, useHref } from 'react-router-dom';
import { Header } from '../../components/Header';
import { NavInformer } from '../../components/NavInformer';
import { Sidebar } from '../../components/Sidebar';
import style from './styles.module.scss';

export function Home() {

    const breadCrumb = [
        {title: 'Início', url: '/'},
    ]

    return (
        <div className={style.container}>
            <Sidebar />
            <NavInformer path={breadCrumb}/>
        </div>
    )
}
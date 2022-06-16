import { NavInformer } from "../../components/NavInformer";
import { Sidebar } from "../../components/Sidebar";
import style from './styles.module.scss';
export function MyDocuments() {

    const breadCrumb = [
        {title: 'Início', url: '/'},
        {title: 'Meus Documentos', url: '/myDocuments'}
    ]

    return (
        <div className={style.container}>
            <Sidebar />
            <div>
                <NavInformer path={breadCrumb}/>

                <h1>Meus Documentos</h1>
            </div>
        </div>
    )
}
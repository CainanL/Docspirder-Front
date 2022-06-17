import { Input } from "../../components/Form/Input";
import { NavInformer } from "../../components/NavInformer";
import { Sidebar } from "../../components/Sidebar";
import style from './styles.module.scss';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { DocumentsRepository, DocumentTypes } from "../../Modules/Documents/Repository";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams, useRoutes } from 'react-router-dom';

interface UploadDocData {
    title: string;
    description: string;
    fileName: string;
}

const uploadDocFormSchema = yup.object().shape({
    title: yup.string().trim().required('Título é obrigatório').min(3, 'Minimo 3 caractéres').max(100, 'Máximo 100 caractéres'),
    description: yup.string().trim().required('Descrição é obrigatória').min(3, 'Minimo 3 caractéres').max(2000, 'Máximo 2000 caractéres'),
    fileName: yup.string().trim().required('Nome do arquivo é obrigatório').min(3, 'Minimo 3 caractéres')
});


export function LuckAt() {

    const filesElements = useRef(null);

    const breadCrumb = [
        { title: 'Início', url: '/' },
        { title: 'Meus Documentos', url: '/myDocuments' },
        { title: 'Sobre', url: '/myDocuments/lockAt' }
    ];

    const [file, setFile] = useState<any>();
    const [data, setData] = useState<DocumentTypes>();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(uploadDocFormSchema)
    });

    async function handleDelete(id: number) {
        const status = await DocumentsRepository.deleteDocuments(id);
        if (status == 200) navigate('/myDocuments')
    }

    const { id } = useParams()

    useEffect(() => {
        async function loadData() {
            const res = await DocumentsRepository.getDocuments(Number(id));
            setData(res);
            setLoading(false);
        };
        loadData();
    }, [])
    console.log(data)

    const handleUploadDoc: SubmitHandler<UploadDocData> = async ({
        description,
        fileName,
        title
    }) => {
        console.log(file)
        if (
            String(file.name).includes('.exe') ||
            String(file.name).includes('.bat') ||
            String(file.name).includes('.zip')
        ) {
            toast.error('Formato do arquivo é inválido, não é possivel carregar arquivos ".exe", ".zip" e ".bat"');
            return;
        }
        const formData = new FormData();
        formData.append(fileName, file, file.name);

        const status = await DocumentsRepository.updateDocuments(Number(id), {
            file,
            description,
            fileName,
            title,
            formData
        });
        if (status == 200) navigate('/myDocuments')
    };

    return (
        <div className={style.container}>
            <Sidebar />
            <div>
                <NavInformer path={breadCrumb} />
                {
                    !loading &&
                    <form onSubmit={handleSubmit(handleUploadDoc)}>
                       <div>
                            <button
                                
                            >
                                 <Link to={`/${data.fileName}`} download target="_blank">Download</Link>
                            </button>
                            <button
                                className={style.deleteButton}
                                style={{ backgroundColor: "rgb(210, 62, 62)", marginLeft: 5 }}
                                onClick={() => handleDelete(Number(id))}
                            >
                                Deletar
                            </button>
                        </div>

                    </form>
                }
                {
                    !loading &&
                    <div style={{padding: 20}}>
                        <h2>
                            Títilo: {data.title}
                        </h2>
                        <h2>
                            Descrição: {data.description}
                        </h2>
                        <h2>
                            Nome do documento: {String(data.fileName)}
                        </h2>
                        <h2>
                            Criado: {new Date(data.created_at).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </h2>
                    </div>
                }


            </div>
        </div>
    )
}
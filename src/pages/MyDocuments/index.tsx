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
import { Link } from "react-router-dom";

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


export function MyDocuments() {

    const filesElements = useRef(null);

    const breadCrumb = [
        { title: 'Início', url: '/' },
        { title: 'Meus Documentos', url: '/myDocuments' }
    ];

    const [file, setFile] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<DocumentTypes[]>([]);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(uploadDocFormSchema)
    });

    async function loadDocuments() {
        const res = await DocumentsRepository.listDocuments();
        setList(res);
    };

    useEffect(() => {
        loadDocuments();
    }, [])


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

        await DocumentsRepository.create({
            file,
            description,
            fileName,
            title,
            formData,
            created_at: new Date()
        });

        loadDocuments()
    };

    return (
        <div className={style.container}>
            <Sidebar />
            <div>
                <NavInformer path={breadCrumb} />

                <form onSubmit={handleSubmit(handleUploadDoc)}>
                    <Input
                        name="title"
                        label="Título"
                        {...register('title')}
                        error={errors.title}
                    />
                    <Input
                        name="description"
                        label="Descrição"
                        {...register('description')}
                        error={errors.description}
                    />
                    <Input
                        name="fileName"
                        label="Nome do documento"
                        {...register('fileName')}
                        error={errors.fileName}
                    />

                    <div className={style.inputContainer}>
                        <p>
                            <label htmlFor="file">Documento</label>
                        </p>
                        <input
                            name='file'
                            type="file"
                            onChange={e => setFile(e.target.files[0])}
                        />
                    </div>

                    <button
                        type="submit"
                    >
                        Enviar
                    </button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descrição</th>
                            <th>Nome do Arquivo</th>
                            <th>Data</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map(item => (
                                <tr>
                                    <td><Link to={`/lockAt/${item.id}`}>{item.title}</Link></td>
                                    <td>{item.description}</td>
                                    <td>{item.fileName}</td>
                                    <td>{new Date(item.created_at).toLocaleDateString('pt-BR', {
                                        day: '2-digit',
                                        month: 'long',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}</td>
                                    <td>
                                        <Link to={`/myDocuments/update/${item.id}`}><button>Editar</button></Link>
                                        <Link to={`/${item.fileName}`} download target="_blank"><button>Download</button></Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
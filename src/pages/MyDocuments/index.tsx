import { Input } from "../../components/Form/Input";
import { NavInformer } from "../../components/NavInformer";
import { Sidebar } from "../../components/Sidebar";
import style from './styles.module.scss';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

interface UploadDocData{
    title: string;
    description: string;
    fileName: string;
}

const uploadDocFormSchema = yup.object().shape({
    title: yup.string().trim().required('Título é obrigatório').min(3, 'Minimo 3 caractéres'),
    description: yup.string().trim().required('Descrição é obrigatória').min(3, 'Minimo 3 caractéres'),
    fileName: yup.string().trim().required('Nome do arquivo é obrigatório').min(3, 'Minimo 3 caractéres'),
});


export function MyDocuments() {

    const breadCrumb = [
        { title: 'Início', url: '/' },
        { title: 'Meus Documentos', url: '/myDocuments' }
    ];

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(uploadDocFormSchema)
    });

    const handleUploadDoc: SubmitHandler<UploadDocData> = async({
        description,
        fileName,
        title
    }) => {
        console.log({description, fileName, title})
    }

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

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}
import { toast } from "react-toastify";
import { api } from "../../services/api";

interface DocumentCreateDTO {
    file: string;
    description: string;
    fileName: string;
    title: string;
    formData: any;
    created_at: Date;
};
export interface DocumentTypes {
    id: number;
    file: string;
    description: string;
    fileName: string;
    title: string;
    formData: any;
    created_at: Date;
};
interface DocumentUpdateDTO {
    file: string;
    description: string;
    fileName: string;
    title: string;
    formData: any;
}

export const DocumentsRepository = {
    async create(data: DocumentCreateDTO): Promise<void> {
        try {
            const alreadyExists = await this.getDocumentsByName(data.title);
            console.log(alreadyExists)
            if (!!alreadyExists) {
                console.log(alreadyExists)
                toast.error('Já existe um documento com esse nome')
                return;
            };

            const res = await api.post('/documents', data);
            if (res.status == 200 || res.status == 201) toast.success('Documento salvo')
        } catch (error) {
            console.log(error.message);
            toast.error('Falha ao salvar documento')
        };
    },
    async listDocuments() {
        try {
            const res = await api.get('/documents');
            return res.data;
        } catch (error) {
            toast.error('Falha ao buscar documentos')
        }
    },
    async getDocuments(id: number) {
        try {
            const res = await api.get(`/documents/${id}`);
            return res.data;
        } catch (error) {
            toast.error('Falha ao buscar documento')
        }
    },
    async deleteDocuments(id: number) {
        try {
            const res = await api.delete(`/documents/${id}`);
            toast.success('Documento deletado');
            return res.status;
        } catch (error) {
            toast.error('Falha ao deletar documento')
        }
    },
    async getDocumentsByName(title: string) {
        try {
            const res = await api.get(`/documents?title=${title}`);
            return res.data;
        } catch (error) {
            toast.error('Falha ao buscar documento')
        }
    },
    async updateDocuments(id: number, data: DocumentUpdateDTO) {
        try {
            const res = await api.put(`/documents/${id}`, data);
            if (res.status == 200) toast.success('Documento atualizado')
            return res.status
        } catch (error) {
            toast.error('Falha ao editar documento')
        };
    }
}
import { toast } from "react-toastify"
import { api } from "../../services/api"

export interface HomeInfoData {
    id: number;
    image: string;
    title: string;
    emphasis: string;
}

export const HomeRepository = {
    async getHomeData() {
        try {
            const res = await api.get('/home/1');
            console.log(res.data)
            return res.data
        } catch (error) {
           toast.error('Falha ao carregar informações');
        }
    }
};
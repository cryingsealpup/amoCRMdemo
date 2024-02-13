import { defineStore } from 'pinia';
import config from '../utils/config';
import axios from 'axios';

const httpClient = axios.create({
    baseURL: config.nestApiPath
});

export const useEntitiesStore = defineStore('main', {
    state: () => ({ 
        result: null,
        loading: false, 
        entity: null,
        name: null
     }),

    actions: {
        async createEntity(): Promise<any> {
            this.loading = true;
            try {
                const res = await httpClient.get(`/create?type=${this.entity}&name=${this.name}`);
                this.loading = false;
                this.result = res.data;
                this.name = null;
                console.log(res.data)
                return res.data;
            } catch (error) {
                this.loading = false;
                this.result = 'При загрузке данных случилась непредвиденная ошибка'
                throw new Error("Something went wrong");
            }
        }
    }
})
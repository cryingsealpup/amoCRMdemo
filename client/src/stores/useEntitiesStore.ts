import { defineStore } from 'pinia';
import config from '../utils/config';
import axios from 'axios';

const httpClient = axios.create({
    baseURL: config.nestApiPath
});

export const useEntitiesStore = defineStore('main', {
    state: () => ({ 
        result: [],
        loading: false, 
        entity: null,
        name: null
     }),

    actions: {
        async createEntity(): Promise<any> {
            this.loading = true;
            this.result.push([{ id: null, name: null }]);
            try {
                const res = await httpClient.get(`/create?type=${this.entity}&name=${this.name}`);
                this.loading = false;
                this.result[this.result.length - 1] = { id: res.data[this.entity][0].id, name: this.name };
                this.name = null;
                return res.data;
            } catch (error) {
                this.loading = false;
                this.result = 'При загрузке данных случилась непредвиденная ошибка'
                throw new Error("Something went wrong");
            }
        }
    },
    persist: true
})
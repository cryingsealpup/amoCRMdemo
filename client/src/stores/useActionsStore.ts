import { defineStore } from 'pinia';
import config from '../utils/config';
import axios from 'axios';

const httpClient = axios.create({
    baseURL: config.nestApiPath
});

export const useActionsStore = defineStore('main', {
    state: () => ({ eventMessage: "" as string, isError: false as boolean, errors: [] as Array<string> }),

    actions: {
        async postLead(): Promise<any> {
            try {
                const res = await httpClient.get('/createLead');
                console.log(res.data);
                return res.data;
            } catch (error) {
                throw new Error("Something went wrong");
            }
        }
    }
})
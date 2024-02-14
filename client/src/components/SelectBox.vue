<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia';
import { useEntitiesStore } from '../stores/useEntitiesStore';

const entities = ref([
    {
        title: 'Сделка',
        value: 'leads'
    },
    {
        title: 'Контакт',
        value: 'contacts'
    },
    {
        title: 'Компания',
        value: 'companies'
    }
]);


const actions = useEntitiesStore();


</script>

<template>
    <v-select class="cursor-pointer" v-model="actions.$state.entity" label="Выберите сущность" :items="entities"
        :item-value="path" :disabled="actions.loading" clearable></v-select>
</template>
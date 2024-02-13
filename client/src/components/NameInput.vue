<script setup>
import { ref } from 'vue'
import { useEntitiesStore } from '../stores/useEntitiesStore';

const actions = useEntitiesStore();


const rules = ref([
    value => !!value || 'Заполните поле',
    value => (value && value.length >= 3) || 'Имя должно содержать не менее 3 символов',
])

</script>

<template>
    <div class="ma-4 w-75">
        <v-text-field label="Введите имя" :rules="rules" hide-details="auto" v-model="actions.name"
            v-if="actions.entity !== null"></v-text-field>
    </div>
</template>
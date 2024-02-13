<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia';
import { useEntitiesStore } from '../stores/useEntitiesStore';

const actions = useEntitiesStore();


</script>

<template>
    <v-container>
        <v-skeleton-loader :loading="actions.loading && actions.entity !== null" type="list-item-two-line">
            <v-list-item title="" subtitle="" lines="two" rounded></v-list-item>
        </v-skeleton-loader>
    </v-container>
</template>
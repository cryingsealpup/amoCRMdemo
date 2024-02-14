<script setup>
import { useEntitiesStore } from '../stores/useEntitiesStore';
const actions = useEntitiesStore();
</script>

<template>
    <v-card rounded="lg">
        <v-list-item width="400" v-for="res in actions.result.slice(0, actions.result.length - 1)" :title="res.name"
            :subtitle="'ID: ' + res.id">
        </v-list-item>
        <v-skeleton-loader :loading="actions.loading" type="list-item-two-line">
            <v-list-item v-if="actions.result.length" width="400" :title="actions.result[actions.result.length - 1].name"
            :subtitle="'ID: ' + actions.result[actions.result.length - 1].id">
        </v-list-item>
        </v-skeleton-loader>
    </v-card>
</template>
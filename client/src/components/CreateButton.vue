<script setup>
import { useEntitiesStore } from '../stores/useEntitiesStore';

const entities = useEntitiesStore();
</script>

<template>
  <v-expand-transition>
    <v-hover v-slot="{ isHovering, props }">
      <v-btn :class="{ 'on-hover': isHovering, 'on-load': entities.loading }" v-bind="props"
        @click="entities.createEntity()" :disabled="entities.entity === null" :color="entities.entity === null ? 'transparent' : 'light-blue-darken-2'">
        <v-progress-circular color="#FFFFFF" model-value="20" :size="15" :width="2" v-if="entities.loading" indeterminate></v-progress-circular>
        <span v-else>Создать</span>
      </v-btn></v-hover>
  </v-expand-transition>
</template>
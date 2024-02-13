<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia';
import CreateButton from './components/CreateButton.vue'
import SelectBox from './components/SelectBox.vue';
import ResultBox from './components/ResultBox.vue';
import NameInput from './components/NameInput.vue';
// const actions = useEntitiesStore();
// const { createEntity } = storeToRefs(actions);
// createEntity('contract');

// const hover = ref('')
// const loading = ref(false);

// watch(loading, () => {
//   loading.value.class = ['cursor-progress', 'bg-indigo-accent-2']
//   setTimeout(() => (loading.value.status = false), 300)
// })

</script>

<template>
  <v-layout>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Создание сущности</v-app-bar-title>
    </v-app-bar>

    <v-main class="d-flex flex-wrap align-center justify-center">
      <v-sheet class="d-flex align-content-center w-100 ma-2">
        <v-sheet class="flex-1-0 ma-2">
          <SelectBox />
        </v-sheet>
        <v-sheet class="ma-4">
          <CreateButton />
        </v-sheet>
      </v-sheet>
      <NameInput />
      <v-divider></v-divider>
      <ResultBox />
    </v-main>
  </v-layout>
</template>

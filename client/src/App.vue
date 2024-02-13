<script setup>
import { ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia';
import { useActionsStore } from './stores/useActionsStore';

const actions = useActionsStore();
const { postLead } = storeToRefs(actions);
actions.postLead();

const hover = ref('')
const loading = ref(false);

watch(loading, () => {
  loading.value.class = ['cursor-progress', 'bg-indigo-accent-2']
  setTimeout(() => (loading.value.status = false), 300)
})

</script>

<template>
  <button :class="loading.class"
    class="bg-transparent hover:bg-blue-500 text-blue-700 transition-all font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    @click="loading.status = !loading.status">
    <div v-if="loading.status"
      class="border-transparent-300 h-5 w-5 animate-spin rounded-full border-2 border-t-blue-600"></div>
    <span v-else>Создать</span>
  </button>

  <select id="countries"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option selected>Choose a country</option>

    <option value="US">United States</option>

    <option value="CA">Canada</option>

    <option value="FR">France</option>
  </select>
</template>

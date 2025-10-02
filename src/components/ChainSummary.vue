<script lang="ts" setup>
import { useDashboard } from '@/stores';
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const dashboardStore = useDashboard();
const conf = computed(() => dashboardStore.chains[props.name] || {});

const addFavor = (e: Event) => {
  e.stopPropagation();
  e.preventDefault();
  dashboardStore.favoriteMap[props.name] = !dashboardStore?.favoriteMap?.[props.name];
  window.localStorage.setItem('favoriteMap', JSON.stringify(dashboardStore.favoriteMap));
};
</script>
<template>
  <RouterLink
    :to="`/${name}`"
    class="bg-base-100 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 dark:hover:from-[#373f59] dark:hover:to-[#2d3449] rounded-lg shadow-md hover:shadow-2xl flex items-center px-3 py-3 cursor-pointer transform transition-all duration-300 ease-out hover:scale-120 hover:-translate-y-1 border border-transparent hover:border-blue-200 dark:hover:border-blue-900"
  >
    <div class="w-8 h-8 rounded-full overflow-hidden transform transition-transform duration-300 hover:rotate-12 hover:scale-110">
      <img :src="conf.logo" class="w-full h-full object-cover" />
    </div>
    <div class="font-semibold ml-4 text-base flex-1 truncate capitalize transition-colors duration-300">
      {{ conf?.prettyName || props.name }}
    </div>
    <div
      @click="addFavor"
      class="pl-4 text-xl transform transition-all duration-300 hover:scale-125 active:scale-90"
      :class="{
        'text-warning hover:text-yellow-500 animate-pulse': dashboardStore?.favoriteMap?.[props.name],
        'text-gray-300 dark:text-gray-500 hover:text-yellow-400': !dashboardStore?.favoriteMap?.[props.name],
      }"
    >
      <Icon icon="mdi-star" class="drop-shadow-lg" />
    </div>
  </RouterLink>
</template>

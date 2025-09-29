<template>
  <div
    class="backdrop-blur-sm rounded-xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-800"
  >
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
    >
      <div>
        <h3 class="text-3xl font-bold text-violet-600 dark:text-violet-400">
          {{ title }}
        </h3>
        <div
          class="text-lg font-medium text-zinc-700 dark:text-zinc-300 flex flex-col gap-2"
        >
          {{ company }}
          <div class="text-sm text-zinc-500 dark:text-zinc-400">
            {{ dates }}
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mt-4 md:mt-0">
        <slot name="tech" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  company: string;
  dates: string;
}>();
</script>

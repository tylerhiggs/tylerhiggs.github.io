<template>
  <div
    class="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-300 text-zinc-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
  >
    <UIcon v-if="icon" :name="icon" size="16" />
    <span v-if="title">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string;
  title?: string;
}>();
</script>

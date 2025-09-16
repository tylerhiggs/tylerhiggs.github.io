<template>
  <ul class="flex flex-col gap-2">
    <li v-for="item in items" :key="item.id" class="ps-4">
      <a
        class="focus-visible:outline-violet-400 py-1 text-sm transition-colors"
        :class="
          item.isVisible
            ? 'text-violet-400 font-semibold'
            : 'text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300'
        "
        :href="`#${item.id}`"
        >{{ item.label }}</a
      >
      <OutlineItems v-if="item.items.length" :items="item.items" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Item } from "~/types";

defineProps<{
  items: Item[];
}>();
</script>

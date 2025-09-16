<script setup lang="ts">
import type { Item } from "~/types";

defineProps<{
  items: Item[];
}>();
</script>
<template>
  <nav
    class="z-10 pointer-events-auto flex max-h-full flex-col overflow-y-auto px-6 pt-24 pb-6"
  >
    <OutlineItems :items="items" />
  </nav>
</template>

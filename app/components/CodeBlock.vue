<!-- eslint-disable vue/no-v-html -->
<!-- XXS impossible since I am the only one who can edit this site -->
<template>
  <div class="group my-6 rounded-lg bg-zinc-800 text-zinc-100">
    <div
      v-if="highlightedHtml"
      class="**:[pre]:px-4 relative **:[pre]:py-3 bg-zinc-800 rounded-xl **:[pre]:rounded-xl **:[pre]:overflow-x-auto"
    >
      <button
        class="flex items-center cursor-pointer justify-center absolute sm:invisible group-hover:visible top-2 right-2 size-6 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 rounded transition-colors"
        title="Copy code"
        tabindex="0"
        @click="copyToClipboard"
      >
        <UIcon
          v-if="copied"
          name="heroicons:clipboard-document-check"
          size="16"
        />
        <UIcon v-else name="heroicons:clipboard-document" size="16" />
      </button>
      <div v-if="name" class="px-4 pt-3 pb-0 text-sm text-gray-400 font-mono">
        <UIcon v-if="icon" :name="icon" /> {{ name }}
      </div>
      <div v-html="highlightedHtml"></div>
    </div>
    <div v-else class="fallback">
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  code: string;
  name?: string;
  icon?: string;
  lang: "vue" | "ts" | "mdc";
}>();
const copied = ref(false);

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 5000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

// This will run at build time during SSG
const { data: highlightedHtml } = await useAsyncData(
  `highlight-${hashCode(props.code)}`,
  () => highlightCode(props.code, props.lang),
  {
    server: true, // Ensure this runs on the server
  }
);

// Simple hash function for cache key
function hashCode(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
}
</script>

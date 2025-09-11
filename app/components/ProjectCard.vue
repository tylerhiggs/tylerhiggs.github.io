<template>
  <article
    class="relative group border has-focus:outline-1 dark:border-zinc-700 border-zinc-200 isolate shadow-xl rounded-lg bg-zinc-200 dark:bg-zinc-800 hover:scale-105 transition-transform duration-300 ease-in-out"
  >
    <NuxtImg
      :src="imageUrl"
      :alt="altText"
      format="webp"
      class="w-full rounded-t-lg object-cover [img]:object-left"
      width="400"
      densities="x1 x2"
      quality="90"
      height="160"
      loading="lazy"
      sizes="sm:400px md:600px lg:800px"
      placeholder
    />
    <div class="p-4">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-zinc-50 mb-2">
        <NuxtLink
          class="group-hover:underline underline-offset-6 transition-all duration-300 ease-in-out"
          :to="link"
          tabindex="0"
        >
          <span class="absolute inset-0 z-10" />
          {{ title }}
        </NuxtLink>
      </h3>
      <p class="mt-2 text-pretty text-zinc-500 dark:text-zinc-300"><slot /></p>
    </div>
    <Icon
      class="invisible group-hover:visible absolute top-4 right-4 text-violet-300 w-6 h-6"
      name="heroicons:arrow-up-right"
    />
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  link: string;
  imageUrl: string;
  altText: string;
}>();
</script>

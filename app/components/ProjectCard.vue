<template>
  <article
    class="relative group isolate shadow-xl rounded-lg bg-white dark:bg-sky-900 hover:scale-105 transition-transform duration-300 ease-in-out"
  >
    <NuxtImg
      :src="imageUrl"
      :alt="altText"
      format="webp"
      class="w-full rounded-t-lg"
      fit="cover"
      width="400"
      densities="x1 x2"
      quality="90"
      height="192"
      loading="lazy"
      sizes="sm:400px md:600px lg:800px"
      placeholder
    />
    <div class="p-4">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-teal-50 mb-2">
        <NuxtLink
          class="group-hover:underline underline-offset-6 transition-all duration-300 ease-in-out"
          :to="link"
        >
          <span class="absolute inset-0 z-10" />
          {{ title }}
        </NuxtLink>
      </h3>
      <p class="mt-2 text-pretty text-gray-700 dark:text-teal-100"><slot /></p>
    </div>
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

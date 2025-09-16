<template>
  <nav
    class="fixed flex items-center justify-between top-0 py-3 px-6 left-0 w-full backdrop-blur-lg bg-white/70 dark:bg-zinc-900/70 border-b border-gray-200 dark:border-zinc-700 z-50"
  >
    <NuxtLink to="/" class="text-xl font-semibold hidden sm:flex"
      >Tyler Higgs</NuxtLink
    >
    <div class="flex items-center gap-2">
      <UTooltip text="Go back to the homepage" :delay-duration="0">
        <NuxtLink
          to="/"
          aria-label="Home"
          class="text-lg text-zinc-900 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 p-2"
        >
          <UIcon name="heroicons:home" class="size-5" />
        </NuxtLink>
      </UTooltip>
      <UTooltip text="View my resume" :delay-duration="0">
        <a
          href="/TylerHiggs-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="text-lg text-zinc-900 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 p-2"
        >
          My Resume
        </a>
      </UTooltip>
      <UTooltip text="Send me an email" :delay-duration="0">
        <a
          href="mailto:thiggs911@gmail.com"
          title="Email me"
          class="text-lg text-zinc-900 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 p-2"
        >
          <UIcon name="heroicons:paper-airplane" size="24" aria-label="Email" />
        </a>
      </UTooltip>
      <UTooltip
        text="See this page's source code"
        :delay-duration="0"
        :content="{ sideOffset: 4 }"
      >
        <a
          :href="ghLink || 'https://github.com/tylerhiggs'"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="text-lg text-zinc-900 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 p-2"
        >
          <UIcon size="32" aria-label="GitHub" name="mdi:github" />
        </a>
      </UTooltip>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  ghLink?: string;
}>();
</script>

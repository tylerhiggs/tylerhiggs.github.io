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
          tabindex="0"
          aria-label="Home"
          class="text-zinc-900 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 p-2"
        >
          <UIcon name="heroicons:home" class="size-8" />
        </NuxtLink>
      </UTooltip>
      <UTooltip text="Email">
        <a
          href="mailto:thiggs911@gmail.com"
          tabindex="0"
          class="text-zinc-900 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 p-2"
          aria-label="thiggs911@gmail.com"
          title="thiggs911@gmail.com"
        >
          <UIcon name="heroicons:paper-airplane" class="size-8" />
        </a>
      </UTooltip>
      <UTooltip text="GitHub (opens in a new tab)">
        <a
          href="https://github.com/tylerhiggs"
          target="_blank"
          tabindex="0"
          rel="noopener noreferrer"
          class="text-zinc-900 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 p-2"
          aria-label="GitHub (opens in a new tab)"
          title="GitHub"
        >
          <UIcon name="mdi:github" class="size-8" />
        </a>
      </UTooltip>

      <UTooltip text="LinkedIn (opens in a new tab)">
        <a
          href="https://www.linkedin.com/in/tyler-higgs-bba80614a/"
          target="_blank"
          tabindex="0"
          rel="noopener noreferrer"
          class="text-zinc-900 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 p-2"
          aria-label="LinkedIn (opens in a new tab)"
          title="LinkedIn"
        >
          <Icon name="mdi:linkedin" class="size-8" />
        </a>
      </UTooltip>

      <UTooltip text="Resume (opens in a new tab)">
        <a
          href="/TylerHiggs-resume.pdf"
          target="_blank"
          tabindex="0"
          rel="noopener noreferrer"
          class="text-zinc-900 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 p-2"
          aria-label="Resume (opens in a new tab)"
          title="Resume"
        >
          <UIcon name="heroicons:document-text" class="size-8" />
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

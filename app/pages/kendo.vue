<template>
  <div class="w-full min-h-full px-4 py-24 items-center flex flex-col">
    <div class="w-full sm:px-0 sm:w-2/3">
      <h1 class="text-5xl font-bold text-fuchsia-400">
        Kendo CSS Utilities Cheat Sheet
      </h1>
      <NuxtLink
        to="/"
        class="text-teal-400 hover:underline underline-offset-4 mb-8 inline-block"
      >
        &larr; Back to Home
      </NuxtLink>
      <div class="mb-12">
        <NuxtImg
          src="/kendo-example.png"
          alt="Screenshot of Kendo CSS Utilities Cheat Sheet"
          format="webp"
          class="w-full rounded-lg shadow-lg"
          fit="cover"
          width="800"
          densities="x1 x2"
          height="384"
          loading="lazy"
          sizes="sm:600px md:800px lg:1400px"
          placeholder
        />
      </div>
      <iframe
        src="https://kendo-utilities-cheatsheet.vercel.app/"
        class="w-full h-screen rounded-lg border-0"
        title="Kendo CSS Utilities Cheat Sheet"
      />
    </div>
  </div>
</template>

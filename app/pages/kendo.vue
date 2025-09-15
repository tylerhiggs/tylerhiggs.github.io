<template>
  <main
    class="flex items-center flex-col relative overflow-hidden min-h-screen"
  >
    <div class="fixed h-screen top-0 left-0 right-0">
      <div
        v-for="(pos, i) in positions"
        :key="i"
        class="absolute font-mono"
        :style="pos.pos"
        @click="copyToClipboard(pos.popover)"
      >
        <div
          name="heroicons:calculator"
          class="animate-float text-2xl text-zinc-500"
          :style="{
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${8 + i}s`,
          }"
          size="96"
        >
          <div class="peer">
            {{ pos.text }}
          </div>
          <div
            class="invisible peer-hover:visible mt-4 font-mono whitespace-pre bg-zinc-800 bg-opacity-70 text-zinc-100 shadow-xl text-xs rounded px-2 py-1"
          >
            {{ pos.popover }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full px-0 sm:px-12 py-24 md:w-2/3 lg:w-1/2 relative z-10 **:[p]:text-lg"
    >
      <h1
        class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Kendo CSS Utilities Cheat Sheet
      </h1>
      <div class="flex flex-wrap gap-3 mb-6">
        <a
          href="https://github.com/tylerhiggs/kendo-utilities-cheatsheet"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <Icon name="mdi:github" size="16" />
          View Source
        </a>
        <a
          href="https://kendo-utilities-cheatsheet.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <Icon name="heroicons:play" size="16" />
          Live Demo
        </a>
      </div>
      <section>
        <h2 class="text-3xl font-semibold mt-12 mb-4">
          My company decided to use Kendo CSS Utilities
        </h2>
        <p>
          Writing custom CSS classes is tedious and time consuming. It also
          requires a decent understanding of CSS to do well. Even then, it's
          easy to make mistakes or overlook edge cases. So we decided to use the
          predefined Kendo CSS Utilities to speed up development and ensure
          consistency across our codebase.
        </p>
        <p>
          But the Kendo CSS Utilities do not have very good documentation.
          <a
            href="https://www.telerik.com/design-system/docs/utils/get-started/introduction/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try going to their documentation site
          </a>
          and searching for "display: flex". At the time of writing this there
          are no results. Even when you do happen to find what you're looking
          for, site performance is poor and navigation is clunky.
        </p>
        <p>
          So I gave myself a week to build a cheat sheet that would make it easy
          to look up Kendo CSS Utility classes and copy them to my clipboard. I
          also wanted to make it visually appealing and fun to use.
        </p>
        <p>
          I also wanted to be able to share this with other developers who might
          find it useful. So if you find yourself using Kendo CSS Utilities, I
          hope this cheat sheet helps you out!
        </p>
      </section>
      <section>
        <h2 class="text-3xl font-semibold mt-12 mb-4">Why not Tailwind?</h2>
        <p>
          Why not just use Tailwind CSS, so you can look up utility classes
          easily on their excellent documentation site or even right in VSCode?
          Tailwind also automatically removes all unused CSS when building for
          production.
        </p>
        <p>
          Developers don't always get to choose their tools and that's okay.
          While bad decisions might have been made in the past, there is no
          reason to rewrite every line of HTML in your codebase when there are
          more important things to do.
        </p>
      </section>
      <section>
        <h2 class="text-3xl font-semibold mt-12 mb-4">Challenges</h2>
        <p>
          I only gave myself a week to build this, so I chose the simplest tools
          I knew well: Next.js, Tailwind, shadcn/ui, and Vercel.
        </p>
        <p>
          But that doesn't mean there weren't challenges. The biggest was
          getting the actual data. I wanted groups, sub-groups, class names and
          their CSS properties. So I wrote a script to scrape their
          documentation.
        </p>
        <p>
          Since the data is fairly static, I scrape the data at build time so
          that users don't have to wait for this every time they load the page.
        </p>
      </section>
      <section>
        <h2 class="text-3xl font-semibold mt-12 mb-4">
          Server Side Generation (SSG)
        </h2>
        <p>
          Since the data is fairly static, Next.js's Server Side Rendering (SSR)
          would be overkill, rerendering the same page for every user on every
          request. Instead, I used Static Site Generation (SSG) to generate the
          page at build time. This makes the site very fast since the HTML is
          pre-rendered and can be served from a CDN.
        </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const positions = [
  {
    text: "k-d-flex",
    popover: ".k-d-flex {\n  display: flex;\n}",
    pos: { left: "5%", top: "10%" },
  },
  {
    text: "k-p-md",
    popover: ".k-p-md {\n  padding: 0.75rem;\n}",
    pos: { right: "8%", top: "15%" },
  },
  {
    text: "k-sr-only",
    popover: `.k-sr-only {
  margin: -1px;
  padding: 0;
  width: 1px;
  height: 1px;
  border-width: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  position: absolute;
}`,
    pos: { left: "15%", top: "40%" },
  },
  {
    text: "k-gap-md",
    popover: ".k-gap-md {\n  gap: 0.75rem;\n}",
    pos: { right: "20%", top: "35%" },
  },
  {
    text: "k-h-screen",
    popover: ".k-h-screen {\n  height: 100vh;\n}",
    pos: { left: "8%", top: "70%" },
  },
  {
    text: "k-rounded-md",
    popover: ".k-rounded-md {\n  border-radius: 0.25rem;\n}",
    pos: { right: "5%", top: "65%" },
  },
  {
    text: "k-text-underline",
    popover: ".k-text-underline {\n  text-decoration: underline;\n}",
    pos: { left: "13%", top: "80%" },
  },
  {
    text: "k-grid-cols-3",
    popover:
      ".k-grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}",
    pos: { left: "75%", top: "85%" },
  },
  {
    text: "k-object-fit-cover",
    popover: ".k-object-fit-cover {\n  object-fit: cover;\n}",
    pos: { left: "2%", top: "50%" },
  },
  {
    text: "k-flex-initial",
    popover: ".k-flex-initial {\n  flex: initial;\n}",
    pos: { right: "2%", top: "45%" },
  },
  {
    text: "k-align-items-center",
    popover: ".k-align-items-center {\n  align-items: center;\n}",
    pos: { left: "12%", top: "20%" },
  },
  {
    text: "k-skew-x-30",
    popover: ".k-skew-x-30 {\n  transform: skewX(30deg);\n}",
    pos: { right: "12%", top: "75%" },
  },
];
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-40px) rotate(10deg);
  }
}

.animate-float {
  animation: float ease-in-out infinite;
}

.animate-float:hover {
  animation-play-state: paused;
}
</style>

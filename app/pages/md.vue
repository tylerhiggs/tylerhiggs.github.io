<template>
  <main
    class="flex items-center flex-col relative overflow-hidden min-h-screen"
  >
    <div
      class="w-full px-0 sm:px-12 py-24 md:w-2/3 lg:w-1/2 relative z-10 **:[p]:text-lg"
    >
      <h1
        class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Extended Markdown Editor
      </h1>
      <div class="flex flex-wrap gap-3 mb-6">
        <a
          href="https://github.com/tylerhiggs/mdxNuxt"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <Icon name="mdi:github" size="16" />
          View Source
        </a>
        <a
          href="https://md-me-dot-dev.nuxt.dev/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <Icon name="heroicons:play" size="16" />
          Live Demo
        </a>
      </div>
      <p>
        Is it better to rent or buy a home? This is a difficult question given
        that <strong>better</strong> is a subjective term. This calculator aims
        to clarify the tradeoffs and surface actionable retirement outcomes for
        users.
      </p>
    </div>
  </main>
</template>

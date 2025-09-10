<template>
  <main class="min-h-screen flex justify-center relative pb-24">
    <div class="absolute inset-0">
      <BackgroundSvg />
    </div>
    <div class="flex flex-col w-full px-8 sm:p-0 sm:w-2/3">
      <div class="relative pb-24">
        <h1 class="text-7xl font-bold mt-20 dark:text-teal-50">
          Tyler Higgs - <span class="text-teal-400">Software Engineer</span>
        </h1>
      </div>
      <section class="gap-8">
        <h2 class="text-5xl font-semibold mt-48 mb-10 dark:text-teal-50">
          About Me
        </h2>
        <div class="flex flex-col gap-8">
          <p class="text-xl text-pretty dark:text-teal-50">
            I'm a full stack software engineer with a passion for building web
            applications and exploring new technologies.
          </p>
          <p class="text-xl text-pretty dark:text-teal-50">
            Hauling hay and fixing equipment before sunrise on the farm taught
            me grit. That drive carried me through MIT, where I often outpaced
            classmates by putting in extra hours and tackling tough problems
            head-on. In my software engineering career, I've jumped into
            unfamiliar tech stacks like C#, .NET, and Angular, quickly becoming
            the go-to resource for my team. I thrive on learning fast, solving
            challenges, and helping others succeed.
          </p>
        </div>
      </section>
      <section>
        <h2 class="text-5xl font-semibold my-16 dark:text-teal-50">
          Solo Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <ProjectCard
            title="Kendo CSS Utilities Cheat Sheet"
            link="/kendo"
            image-url="/kendo-example.png"
            alt-text="Screenshot of Kendo CSS Utilities Cheat Sheet"
            >Searchable cheatsheet for Kendo CSS utilities using Next.js SSG and
            Fuse.js fuzzy search, improving accessibility and efficiency for
            developers. The site is search engine optimized, fully accessible,
            mobile-friendly, and supports light and dark modes</ProjectCard
          >
        </div>
      </section>

      <section>
        <h2 class="text-5xl font-semibold mb-16 dark:text-teal-50">
          Technologies I Work With
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <!-- Frontend -->
          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:bg-green-300 hover:scale-125 duration-300"
          >
            <Icon name="logos:vue" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">Vue.js</span>
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:nuxt-icon" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">Nuxt</span>
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:angular-icon" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">Angular</span>
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:react" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">React</span>
          </div>
          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:nextjs-icon" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">Next.js</span>
          </div>
          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:typescript-icon" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50"
              >TypeScript</span
            >
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:javascript" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50"
              >JavaScript</span
            >
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:tailwindcss-icon" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50"
              >Tailwind CSS</span
            >
          </div>

          <!-- Backend -->
          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:c-sharp" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">C#</span>
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:dotnet" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">.NET</span>
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:nodejs-icon" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">Node.js</span>
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:python" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">Python</span>
          </div>
          <div
            class="flex flex-col items-center justify-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:django" size="48" />
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:microsoft-azure" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">Azure</span>
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:google-cloud" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">GCP</span>
          </div>

          <!-- Databases & Tools -->
          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:postgresql" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50"
              >PostgreSQL</span
            >
          </div>
          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:firebase-icon" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">Firebase</span>
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:mongodb-icon" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">MongoDB</span>
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:docker-icon" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">Docker</span>
          </div>

          <div
            class="flex flex-col items-center p-6 bg-white dark:bg-sky-900 rounded-lg shadow-sm hover:shadow-xl transition ease-in-out hover:scale-125 duration-300"
          >
            <Icon name="logos:git-icon" size="48" class="mb-4" />
            <span class="text-lg font-medium dark:text-teal-50">Git</span>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

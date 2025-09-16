<template>
  <main class="min-h-screen flex justify-center relative pb-24">
    <div class="flex flex-col w-full px-8 sm:p-0 sm:w-2/3 z-10">
      <div class="relative pb-24">
        <h1 class="sm:text-9xl text-7xl font-bold mt-20">
          Tyler Higgs<br /><span class="text-violet-500"
            >Software Engineer</span
          >
        </h1>
      </div>
      <section class="gap-8">
        <h2 class="text-5xl font-semibold mt-48 mb-10">About Me</h2>
        <div class="flex flex-col">
          <p class="text-xl text-pretty">
            I'm a full stack software engineer with a passion for building web
            applications and exploring new technologies.
          </p>
          <p class="text-xl text-pretty">
            Hauling hay and fixing equipment before sunrise on the farm taught
            me grit. That drive carried me through MIT, where I often outpaced
            classmates by putting in extra hours and tackling tough problems
            head-on. In my software engineering career, I've jumped into
            unfamiliar tech stacks like C#, .NET, and Angular, quickly becoming
            the go-to resource for my team. I thrive on learning quickly,
            solving challenging bugs, and helping others succeed.
          </p>
        </div>
      </section>
      <section>
        <h2 class="text-5xl font-semibold my-16">Solo Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div class="[&_img]:contrast-175">
            <ProjectCard
              title="Extended Markdown Editor"
              link="/md"
              image-url="/mdc-table-collapse.png"
              alt-text="Screenshot of Extended Markdown Editor"
            >
              <div class="flex flex-col gap-4">
                An advanced markdown editor in the browser with Google OAuth,
                live preview, auto-saving to the cloud, extra components not
                usually found in markdown, and SEO + SSR friendly pages publish
                to a public and unique URL. CI/CD pipeline runs unit tests and
                deploys to Cloudflare.
                <div class="flex flex-wrap gap-2 mt-4">
                  <TechChip icon="logos:nuxt-icon" title="Nuxt" />
                  <TechChip icon="logos:vue" title="Vue" />
                  <TechChip icon="logos:oauth" title="OAuth" />
                  <TechChip icon="file-icons:sqlite" title="SQLite" />
                  <TechChip icon="simple-icons:drizzle" title="Drizzle ORM" />
                  <TechChip
                    icon="logos:tailwindcss-icon"
                    title="Tailwind CSS"
                  />
                  <TechChip icon="logos:typescript-icon" title="TypeScript" />
                  <TechChip icon="logos:cloudflare-icon" title="Cloudflare" />
                  <TechChip icon="i-heroicons:magnifying-glass" title="SEO" />
                  <TechChip icon="i-heroicons:server-stack" title="SSR" />
                  <TechChip
                    icon="i-heroicons:device-phone-mobile"
                    title="Responsive"
                  />
                  <TechChip
                    icon="i-lucide:accessibility"
                    title="Accessibility"
                  />
                  <TechChip icon="simple-icons:githubactions" title="CI/CD" />
                </div>
              </div>
            </ProjectCard>
          </div>
          <ProjectCard
            title="Sudoku"
            link="/sudoku"
            image-url="/sudoku-preview.png"
            alt-text="Screenshot of Sudoku"
          >
            <div class="flex flex-col gap-4">
              Rust puzzle generator and solver publishes puzzles to a Node
              server which saves them to a Firebase database. Angular frontend
              fetches and displays puzzles with a clean, responsive UI. Features
              include pencil marks, hints, and multiple difficulty levels. CI/CD
              pipeline runs unit tests and deploys to Firebase Hosting.
              IndexedDB is used for local storage and offline support.
              <div class="flex flex-wrap gap-2 mt-4">
                <TechChip icon="logos:rust" title="Rust" />
                <TechChip icon="logos:angular-icon" title="Angular" />
                <TechChip icon="logos:firebase-icon" title="Firebase" />
                <TechChip icon="logos:nodejs-icon" title="Node.js" />
                <TechChip icon="heroicons:circle-stack" title="IndexedDB" />
                <TechChip icon="logos:tailwindcss-icon" title="Tailwind CSS" />
                <TechChip icon="logos:typescript-icon" title="TypeScript" />
                <TechChip
                  icon="i-heroicons:device-phone-mobile"
                  title="Responsive"
                />
                <TechChip icon="simple-icons:githubactions" title="CI/CD" />
              </div>
            </div>
          </ProjectCard>
          <ProjectCard
            title="Kendo CSS Utilities Cheat Sheet"
            link="/kendo"
            image-url="/kendo-syntax.png"
            alt-text="Screenshot of Kendo CSS Utilities Cheat Sheet"
          >
            <div class="flex flex-col gap-4">
              Searchable cheatsheet for Kendo CSS utilities using Next.js SSG
              and Fuse.js fuzzy search, improving accessibility and efficiency
              for developers. The site is search engine optimized, fully
              accessible, mobile-friendly, and supports light and dark modes
              <div class="flex flex-wrap gap-2 mt-4">
                <TechChip icon="logos:nextjs-icon" title="Next.js" />
                <TechChip icon="logos:tailwindcss-icon" title="Tailwind CSS" />
                <TechChip icon="logos:typescript-icon" title="TypeScript" />
                <TechChip icon="logos:vercel-icon" title="Vercel" />
                <TechChip icon="logos:react" title="React" />
                <TechChip icon="i-heroicons:magnifying-glass" title="SEO" />
                <TechChip icon="i-heroicons:server-stack" title="SSG" />
                <TechChip
                  icon="i-heroicons:device-phone-mobile"
                  title="Responsive"
                />
                <TechChip icon="i-lucide:accessibility" title="Accessibility" />
              </div>
            </div>
          </ProjectCard>
          <ProjectCard
            title="Mortgage and Rent Retirement Calculator"
            link="/calculator"
            image-url="/rent-retirement.png"
            alt-text="Screenshot of Mortgage and Rent Retirement Calculator"
          >
            <div class="flex flex-col gap-4">
              Buy-vs-rent retirement calculator with reactive charts and
              light/dark support. UX to clarify tradeoffs and surface actionable
              retirement outcomes for users.
              <div class="flex flex-wrap gap-2 mt-4">
                <TechChip icon="logos:vue" title="Vue" />
                <TechChip icon="logos:tailwindcss-icon" title="Tailwind CSS" />
                <TechChip icon="logos:typescript-icon" title="TypeScript" />
                <TechChip
                  icon="i-heroicons:device-phone-mobile"
                  title="Responsive"
                />
                <TechChip icon="i-lucide:accessibility" title="Accessibility" />
                <TechChip icon="simple-icons:githubactions" title="CI/CD" />
                <TechChip icon="logos:firebase-icon" title="Firebase" />
                <TechChip icon="simple-icons:shadcnui" title="shadcn/ui" />
              </div>
            </div>
          </ProjectCard>
        </div>
      </section>
    </div>
    <div class="absolute inset-0">
      <BackgroundSvg />
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Tyler Higgs - Software Engineer",
  description:
    "Tyler Higgs is a full stack software engineer specializing in building web applications with a focus on performance, accessibility, and user experience.",
  meta: [
    {
      name: "description",
      content:
        "Tyler Higgs is a full stack software engineer specializing in building web applications with a focus on performance, accessibility, and user experience.",
    },
    {
      name: "keywords",
      content:
        "Tyler Higgs, Software Engineer, Full Stack Developer, Web Developer, Nuxt, Vue, TypeScript, Tailwind CSS, Cloudflare, Accessibility, SEO, SSR",
    },
  ],
});
</script>

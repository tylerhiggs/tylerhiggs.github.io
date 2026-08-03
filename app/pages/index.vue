<template>
  <main class="min-h-screen flex justify-center relative pb-24">
    <nav class="fixed top-0 left-0 w-full z-50">
      <div class="mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-end h-16">
          <div class="flex items-center space-x-2">
            <UTooltip text="Email">
              <a
                href="mailto:thiggs911@gmail.com"
                tabindex="0"
                class="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-pretty hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
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
                class="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-pretty hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
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
                class="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-pretty hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
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
                class="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-pretty hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
                aria-label="Resume (opens in a new tab)"
                title="Resume"
              >
                <UIcon name="heroicons:document-text" class="size-8" />
              </a>
            </UTooltip>
          </div>
        </div>
      </div>
    </nav>

    <div class="flex flex-col w-full px-1 sm:p-0 sm:w-5/6 2xl:w-2/3 z-10">
      <div class="relative pb-24 px-7 sm:px-0">
        <h1 class="sm:text-9xl text-7xl font-bold mt-20">
          Tyler Higgs<br /><span class="text-violet-500"
            >Software Engineer</span
          >
        </h1>
      </div>
      <section class="gap-8 px-8 sm:px-0">
        <h2 class="text-5xl font-semibold mt-48 mb-10">About Me</h2>
        <div class="flex flex-col">
          <p class="text-xl text-pretty">
            I'm a full stack software engineer with a passion for building web
            applications and exploring new technologies, so much that I do it in
            my free time.
          </p>
          <p class="text-xl text-pretty">
            MIT graduate in Computer Science. I enjoy having the highest
            possible impact, and learning as much as I can along the way.
          </p>
        </div>
      </section>
      <section>
        <h2 class="text-5xl font-semibold my-16 px-8 sm:px-0">Solo Projects</h2>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-32">
          <ProjectCard
            title="Eave - Software for Home Inspectors"
            link="/eave-inspect"
            image-url="/eave-landing.png"
            alt-text="Screenshot of Eave - Software for Home Inspectors"
          >
            <div class="flex flex-wrap gap-3 z-20 mb-4">
              <a
                href="https://eaveinspect.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex z-20 items-center gap-2 px-4 py-2 bg-violet-700 hover:bg-violet-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
              >
                <UIcon name="heroicons:play" size="16" />
                Live Demo
              </a>
              <a
                href="https://eaveinspect.com/help"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex z-20 items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
              >
                <UIcon name="heroicons:book-open" size="16" />
                Help Docs
              </a>
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
              <TechChip icon="logos:nuxt-icon" title="Nuxt" />
              <TechChip icon="logos:vue" title="Vue" />
              <TechChip icon="logos:oauth" title="OAuth" />
              <TechChip icon="file-icons:sqlite" title="SQLite" />
              <TechChip icon="simple-icons:drizzle" title="Drizzle ORM" />
              <TechChip icon="logos:tailwindcss-icon" title="Tailwind CSS" />
              <TechChip icon="logos:typescript-icon" title="TypeScript" />
              <TechChip icon="logos:swift" title="Swift/iOS" />
              <TechChip icon="logos:cloudflare-icon" title="Cloudflare" />
              <TechChip icon="logos:stripe" title="Stripe Connect" />
              <TechChip icon="logos:anthropic-icon" title="Claude API" />
              <TechChip icon="i-heroicons:magnifying-glass" title="SEO" />
              <TechChip icon="i-heroicons:server-stack" title="SSR" />
              <TechChip
                icon="i-heroicons:device-phone-mobile"
                title="Responsive"
              />
              <TechChip icon="i-lucide:accessibility" title="Accessibility" />
              <TechChip icon="simple-icons:githubactions" title="CI/CD" />
            </div>
            <div class="flex flex-col gap-4">
              <div>
                <p>
                  Solo SaaS startup providing software for home inspectors to
                  create and manage inspection reports, from custom templates
                  and on-site data entry to an automated warnings and home-care
                  rules engine that flags issues as inspectors work. New users
                  can migrate a template out of Spectora or HomeGauge in one
                  step: an AI import pipeline built on Claude with structured
                  outputs rebuilds their existing export as an editable Eave
                  template.
                </p>
                <p>
                  Inspectors publish signable, shareable reports, collect
                  e-signed pre-inspection agreements, take client payments by
                  card or ACH through Stripe Connect, offer built-in client
                  self-scheduling and free repair-request generation for buyer's
                  agents, and run their business — including multi-user
                  organizations and Stripe subscription billing — from one app.
                  A native Swift iOS app supports fast, offline-friendly data
                  capture in the field.
                </p>
              </div>
            </div>
          </ProjectCard>
          <div class="[&_img]:contrast-175">
            <ProjectCard
              title="Extended Markdown Editor"
              link="/md"
              image-url="/mdc-table-collapse.png"
              alt-text="Screenshot of Extended Markdown Editor"
            >
              <div class="flex flex-wrap gap-3 z-20 mb-4">
                <a
                  href="https://github.com/tylerhiggs/mdxNuxt"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex z-20 items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
                >
                  <UIcon name="mdi:github" size="16" />
                  View Source
                </a>
                <a
                  href="https://md-me-dot-dev.nuxt.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex z-20 items-center gap-2 px-4 py-2 bg-violet-700 hover:bg-violet-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
                >
                  <UIcon name="heroicons:play" size="16" />
                  Live Demo
                </a>
              </div>
              <div class="flex flex-wrap gap-2 mt-4">
                <TechChip icon="logos:nuxt-icon" title="Nuxt" />
                <TechChip icon="logos:vue" title="Vue" />
                <TechChip icon="logos:oauth" title="OAuth" />
                <TechChip icon="file-icons:sqlite" title="SQLite" />
                <TechChip icon="simple-icons:drizzle" title="Drizzle ORM" />
                <TechChip icon="logos:tailwindcss-icon" title="Tailwind CSS" />
                <TechChip icon="logos:typescript-icon" title="TypeScript" />
                <TechChip icon="logos:go" />
                <TechChip
                  icon="vscode-icons:file-type-wasm"
                  title="WebAssembly"
                />
                <TechChip icon="logos:cloudflare-icon" title="Cloudflare" />
                <TechChip icon="i-heroicons:magnifying-glass" title="SEO" />
                <TechChip icon="i-heroicons:server-stack" title="SSR" />
                <TechChip
                  icon="i-heroicons:device-phone-mobile"
                  title="Responsive"
                />
                <TechChip icon="i-lucide:accessibility" title="Accessibility" />
                <TechChip icon="simple-icons:githubactions" title="CI/CD" />
              </div>
              <div class="flex flex-col gap-4">
                <div>
                  <p>
                    An advanced markdown editor in the browser with Google
                    OAuth, live preview, auto-saving to the cloud, extra
                    components not usually found in markdown, and SEO + SSR
                    friendly pages publish to a public and unique URL. CI/CD
                    pipeline runs unit tests and deploys to Cloudflare.
                  </p>
                  <p>
                    I built this project 3 times, each time improving the tech
                    stack and usability. The first version was way too complex
                    for a new grad to implement solo and in free time, using
                    Dockerized Django, PostgreSQL, GraphQL, and Vue. The second
                    version was much better but still had some rough edges. The
                    WYSIWYG editor was clunky and hard to use, with far too many
                    edge cases for me to handle and test alone. This third
                    version is by far the best and most polished, optimizing
                    both the user and developer's experience.
                  </p>
                  <p>
                    I learned a lot about WebAssembly and Go building the
                    editor, and relied on performance benchmarks to decide the
                    fastest solutions, which is not always WebAssembly.
                  </p>
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
            <div class="flex flex-wrap gap-3 mb-4 z-20">
              <a
                href="https://github.com/tylerhiggs/sudoku-ng"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 z-20 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
              >
                <UIcon name="mdi:github" size="16" />
                View Source
              </a>
              <a
                href="https://sudoku-6fbd2.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center z-20 gap-2 px-4 py-2 bg-violet-700 hover:bg-violet-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
              >
                <UIcon name="heroicons:play" size="16" />
                Live Demo
              </a>
            </div>
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
              <TechChip icon="logos:playwright" title="Playwright" />
              <TechChip
                icon="logos:testing-library"
                title="Angular Testing Library"
              />
            </div>
            <p>
              Rust puzzle generator and solver publishes puzzles to a Node
              server which saves them to a Firebase database. Angular frontend
              fetches and displays puzzles with a clean, responsive UI. Features
              include pencil marks and multiple difficulty levels. CI/CD
              pipeline runs unit and end-to-end tests and deploys to Firebase
              Hosting. IndexedDB is used for local storage and offline support.
            </p>
            <p>
              Later on I thought it would be cool to make the games
              collaborative, so I added real-time multiplayer using Firebase
              real-time database. This was a fun challenge to implement, as I
              had to think about how to handle conflicts and merging changes
              from multiple users. I used an event-driven architecture and
              optimistic updates to make the experience as smooth as possible.
              To ensure consistency, I added end-to-end testing with Playwright
              to cover concurrent multi-user edge cases, including editing the
              same cell at the same time. I also added a chat feature!
            </p>
          </ProjectCard>
          <ProjectCard
            title="Kendo CSS Utilities Cheat Sheet"
            link="/kendo"
            image-url="/kendo-syntax.png"
            alt-text="Screenshot of Kendo CSS Utilities Cheat Sheet"
          >
            <div class="flex flex-wrap gap-3 mb-4 z-20">
              <a
                href="https://github.com/tylerhiggs/kendo-utilities-cheatsheet"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center z-20 gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
              >
                <UIcon name="mdi:github" size="16" />
                View Source
              </a>
              <a
                href="https://kendo-utilities-cheatsheet.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex z-20 items-center gap-2 px-4 py-2 bg-violet-700 hover:bg-violet-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
              >
                <UIcon name="heroicons:play" size="16" />
                Live Demo
              </a>
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
              <TechChip icon="logos:nextjs-icon" title="Next.js" />
              <TechChip icon="logos:react" title="React" />
              <TechChip icon="logos:tailwindcss-icon" title="Tailwind CSS" />
              <TechChip icon="logos:typescript-icon" title="TypeScript" />
              <TechChip icon="logos:vercel-icon" title="Vercel" />
              <TechChip icon="i-heroicons:magnifying-glass" title="SEO" />
              <TechChip icon="i-heroicons:server-stack" title="SSG" />
              <TechChip icon="simple-icons:shadcnui" title="shadcn/ui" />

              <TechChip
                icon="i-heroicons:device-phone-mobile"
                title="Responsive"
              />
              <TechChip icon="i-lucide:accessibility" title="Accessibility" />
            </div>
            <p>
              Searchable cheat-sheet for Kendo CSS utilities using Next.js SSG
              and Fuse.js fuzzy search, improving accessibility and efficiency
              for developers. The site is search engine optimized, fully
              accessible, mobile-friendly, and supports light and dark modes.
            </p>
            <p>
              I built this project to solve my own problem at my last company:
              Kendo UI is a powerful CSS framework, but its documentation is
              lacking. Finding the right utility class often requires digging
              through multiple pages of docs or trial and error. This cheat
              sheet makes it easy to quickly find the class you need, improving
              developer productivity.
            </p>
            <p>
              I challenged myself to build this project in a week, and I did it
              by going with the simplest solutions possible, while still using
              best practices to prevent future road blocks.
            </p>
          </ProjectCard>
          <ProjectCard
            title="Mortgage and Rent Retirement Calculator"
            link="/calculator"
            image-url="/rent-retirement.png"
            alt-text="Screenshot of Mortgage and Rent Retirement Calculator"
          >
            <div class="flex flex-wrap gap-3 mb-4 z-20">
              <a
                href="https://github.com/tylerhiggs/mortgage-rent-calculator"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex z-20 items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
              >
                <UIcon name="mdi:github" size="16" />
                View Source
              </a>
              <a
                href="https://mortgage-and-rent-calculator.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex z-20 items-center gap-2 px-4 py-2 bg-violet-700 hover:bg-violet-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
              >
                <UIcon name="heroicons:play" size="16" />
                Live Demo
              </a>
            </div>
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
            </div>
            <p>
              Buy-vs-rent retirement calculator with reactive charts and
              light/dark support. UX to clarify tradeoffs and surface actionable
              retirement outcomes for users.
            </p>
            <p>
              Several years ago, I wanted to know whether I should rent or buy a
              home. Homes build equity, but loss from opportunity cost of the
              down payment make this a difficult question to answer once and for
              all.
            </p>
            <p>
              Beyond engineering decisions, I needed to find a good way to
              fairly compare the two options, while communicating the tradeoffs
              to users. I decided to focus on retirement outcomes assuming users
              invest every dollar they have, as this is a long-term decision
              with significant financial implications.
            </p>
          </ProjectCard>
        </div>
      </section>
      <section>
        <h2 class="text-5xl font-semibold my-16 px-8 sm:px-0">
          Work Experience
        </h2>
        <div class="flex flex-col gap-12">
          <CompanyCard
            title="Software Engineer"
            company="Offstream (Startup ~10 employees)"
            dates="Dec 2025 — Jun 2026"
          >
            <template #tech>
              <TechChip icon="logos:nextjs" title="Next.js" />
              <TechChip icon="logos:vercel-icon" title="Vercel" />
              <TechChip icon="logos:typescript-icon" title="TypeScript" />
              <TechChip icon="logos:tailwindcss-icon" title="Tailwind CSS" />
              <TechChip icon="logos:prisma" title="Prisma" />
              <TechChip icon="logos:postgresql" title="PostgreSQL" />
              <TechChip icon="logos:graphql" title="GraphQL" />
              <TechChip icon="i-lucide:accessibility" title="Accessibility" />
              <TechChip icon="simple-icons:githubactions" title="CI/CD" />
              <TechChip
                icon="logos:testing-library"
                title="React Testing Library"
              />
            </template>
            <ul class="list-disc pl-6 space-y-2 text-lg">
              <li>
                Designed and implemented a public facing REST API for recording
                carbon removal events, enabling carbon removal companies to
                submit their data for verification and reporting.
              </li>
              <li>
                Built an AI powered custom form builder for carbon removal
                companies to submit their data.
              </li>
              <li>
                Added data export functionality to our platform, creating full
                auditability for carbon removal companies and enabling them to
                share their data with third parties.
              </li>
              <li>
                Implemented record locking for submissions under review,
                preventing edits mid-audit and preserving audit integrity.
              </li>
              <li>
                Implemented analytics tracking for our platform, allowing us to
                better understand how users are interacting with our platform
                and identify areas for improvement.
              </li>
              <li>
                Improved <strong>dashboard performance by 8x</strong> by
                optimizing GraphQL and SQL queries, reducing load times and
                improving user experience.
              </li>
            </ul>
          </CompanyCard>
          <CompanyCard
            title="Software Engineer"
            company="Patterson - Fuse"
            dates="Jul 2023 — Aug 2025"
          >
            <template #tech>
              <TechChip icon="logos:angular-icon" title="Angular" />
              <TechChip icon="logos:c-sharp" title="C#" />
              <TechChip icon="logos:dotnet" title=".NET" />
              <TechChip icon="logos:azure-icon" title="Azure" />
              <TechChip icon="logos:docker-icon" title="Docker" />
              <TechChip icon="logos:typescript-icon" title="TypeScript" />
              <TechChip icon="heroicons:circle-stack" title="SQL" />
              <TechChip icon="simple-icons:nx" title="Nx Workspaces" />
              <TechChip icon="i-lucide:accessibility" title="Accessibility" />
              <TechChip icon="simple-icons:githubactions" title="CI/CD" />
              <TechChip
                icon="logos:testing-library"
                title="Angular Testing Library"
              />
            </template>
            <ul class="list-disc pl-6 space-y-2 text-lg">
              <li>
                Developed and maintained a form-building microservice using Nx
                workspaces, Angular, C#, .NET, and Azure.
              </li>
              <li>
                Led the AngularJS→Angular migration for my team, pioneering best
                practices and improving bundle performance and maintainability.
              </li>
              <li>
                Authored comprehensive migration documentation, reducing
                onboarding time for new contributors.
              </li>
              <li>
                Delivered complex Angular features ahead of schedule,
                accelerating delivery and reducing backlog.
              </li>
              <li>
                Served as accessibility and component testing lead; completed a
                formal accessibility course and applied WCAG best practices to
                new and existing components.
              </li>
              <li>
                Discovered and fixed SQL injection vulnerabilities, removing
                critical security risks.
              </li>
            </ul>
          </CompanyCard>
          <CompanyCard
            title="Software Engineer"
            company="Vividly (Startup ~60 employees)"
            dates="Jul 2022 — Jun 2023"
          >
            <template #tech>
              <TechChip icon="logos:react" title="React" />
              <TechChip icon="logos:typescript-icon" title="TypeScript" />
              <TechChip icon="logos:graphql" title="GraphQL" />
              <TechChip icon="logos:python" title="Python" />
              <TechChip icon="logos:django" />
              <TechChip icon="logos:postgresql" title="PostgreSQL" />
              <TechChip icon="logos:docker-icon" title="Docker" />
              <TechChip
                icon="logos:testing-library"
                title="React Testing Library"
              />
            </template>
            <ul class="list-disc pl-6 space-y-2 text-lg">
              <li>
                Modernized legacy stack with Django, GraphQL, and TypeScript
                React, achieving 10× faster load times and improved developer
                safety.
              </li>
              <li>
                Migrated and cleansed over 1TB of customer data from Firebase to
                PostgreSQL using custom ETL pipelines.
              </li>
              <li>
                Designed and implemented end-to-end encryption for a data
                scraping tool, securing sensitive customer information.
              </li>
              <li>
                Enhanced deductions and reconciliation workflows by integrating
                a new API for invoice scanning and validation.
              </li>
              <li>
                Built comprehensive test suites (React Testing Library, GraphQL
                integration, PyTest), ensuring reliability and faster
                development cycles.
              </li>
            </ul>
          </CompanyCard>
          <CompanyCard
            title="Software Engineer Intern"
            company="Vividly (Startup ~60 employees)"
            dates="Jun 2021 — Aug 2021"
          >
            <template #tech>
              <TechChip icon="logos:react" title="React" />
              <TechChip icon="logos:python" title="Python" />
              <TechChip icon="material-icon-theme:gcp" title="GCP" />
              <TechChip icon="logos:javascript" title="JavaScript" />
              <TechChip icon="logos:firebase-icon" title="Firebase" />
              <TechChip icon="simple-icons:githubactions" title="CI/CD" />
            </template>
            <ul class="list-disc pl-6 space-y-2 text-lg">
              <li>
                Built a Chrome extension to upload email attachments directly to
                user accounts.
              </li>
              <li>
                Migrated GitHub Actions to self-hosted GCP runners, cutting CI
                costs by 50%.
              </li>
              <li>
                Piloted preview-site CI workflow for PRs, shortening QA feedback
                cycles with preview sites for every PR.
              </li>
              <li>
                Completed front end (React) and back end (Python) tasks to add
                features, make improvements, and fix bugs.
              </li>
            </ul>
          </CompanyCard>
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
        "Tyler Higgs, Software Engineer, Full Stack Developer, Web Developer, Nuxt, Vue, TypeScript, Tailwind CSS, Cloudflare, Stripe, Swift, iOS, AI, Claude API, Accessibility, SEO, SSR",
    },
  ],
});
</script>

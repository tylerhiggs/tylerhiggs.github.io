<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import type { Item } from "~/types";
useHead({
  title: "Tyler Higgs - Extended Markdown Editor",
});
definePageMeta({
  title: "Tyler Higgs - Extended Markdown Editor",
  ogTitle: "Tyler Higgs - Extended Markdown Editor",
  description:
    "A markdown editor with extended features like autosave, live preview, and public sharing, built with Nuxt 3 and Tailwind CSS.",
  ogDescription:
    "A markdown editor with extended features like autosave, live preview, and public sharing, built with Nuxt 3 and Tailwind CSS.",
  ogImage: "/md-preview.png",
  keywords:
    "markdown editor, nuxt, vue, drizzle orm, sqlite, oauth, tailwind css, typescript, cloudflare, ssr, seo, Tyler Higgs",
  author: "Tyler Higgs",
});
const journeySection = useTemplateRef("journeySection");
const version1Section = useTemplateRef("version1");
const version2Section = useTemplateRef("version2");
const version3Section = useTemplateRef("version3");
const featuresSection = useTemplateRef("features");
const mdEditorSection = useTemplateRef("md-editor");

const journeyVisible = useElementVisibility(journeySection);
const version1Visible = useElementVisibility(version1Section);
const version2Visible = useElementVisibility(version2Section);
const version3Visible = useElementVisibility(version3Section);
const featuresVisible = useElementVisibility(featuresSection);
const mdEditorVisible = useElementVisibility(mdEditorSection);

const outlineItems = computed(() => {
  return [
    {
      id: "the-journey",
      label: "The Journey",
      isVisible: journeyVisible.value,
      items: [
        {
          id: "version-1",
          label:
            "Version 1: PostgreSQL + Docker + Django + Vue + Auth0 + GraphQL",
          items: [],
          isVisible: version1Visible.value,
        },
        {
          id: "version-2",
          label: "Version 2: Firebase + Vue",
          items: [],
          isVisible: version2Visible.value,
        },
        {
          id: "version-3",
          label: "Version 3: Markdown + Nuxt",
          items: [],
          isVisible: version3Visible.value,
        },
      ],
    },
    {
      id: "features",
      label: "Features",
      isVisible: featuresVisible.value,
      items: [
        {
          id: "md-editor",
          label: "Markdown Editor",
          items: [],
          isVisible: mdEditorVisible.value,
        },
      ],
    },
  ] as Item[];
});

const content = shallowRef("Here is an example of editable content");
</script>

<template>
  <main class="grid grid-cols-12 relative min-h-screen">
    <PageNav
      gh-link="https://github.com/tylerhiggs/tylerhiggs.github.io/blob/main/app/pages/md.vue"
    />
    <div
      class="col-span-12 px-12 py-24 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 relative z-10 **:[p]:text-lg"
    >
      <h1
        class="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text text-transparent"
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
          <UIcon name="mdi:github" size="16" />
          View Source
        </a>
        <a
          href="https://md-me-dot-dev.nuxt.dev/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-violet-700 hover:bg-violet-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
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
        <TechChip icon="logos:cloudflare-icon" title="Cloudflare" />
        <TechChip icon="i-heroicons:magnifying-glass" title="SEO" />
        <TechChip icon="i-heroicons:server-stack" title="SSR" />
        <TechChip icon="i-heroicons:device-phone-mobile" title="Responsive" />
        <TechChip icon="i-lucide:accessibility" title="Accessibility" />
        <TechChip icon="simple-icons:githubactions" title="CI/CD" />
      </div>
      <section ref="journeySection">
        <h2 id="the-journey" class="text-3xl font-semibold mt-12 mb-4">
          The Journey
        </h2>
        <section ref="version1">
          <h3 id="version-1" class="text-2xl font-semibold mt-8 mb-2">
            Version 1: PostgreSQL + Docker + Django + Vue + Auth0 + GraphQL
          </h3>
          <a
            href="https://github.com/tylerhiggs/MyNotion/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
          >
            <UIcon name="mdi:github" size="16" />
            View Source
          </a>
          <p>
            I actually built this project 3 times! My first version was
            overcomplicated both in the features and the tech stack. My goal was
            to build a
            <a
              href="https://notion.so"
              target="_blank"
              rel="noopener noreferrer"
              >Notion-like</a
            >
            experience for users: A WYSIWYG rich text editor that autosaves
            pages which can also be published to a public URL. I used
            <strong>Docker, Python, Django, and PostgreSQL</strong> for the
            backend, <strong>Auth0</strong> for authorization,
            <strong>GraphQL</strong> for the API and
            <strong>full stack type safety</strong>, and
            <strong>Vue 3</strong> for the frontend. This might be a great stack
            for a large team, helping them stay on the same page, but for a solo
            project that I started 6 months into my first software engineering
            job, it was too much. I spent more time wrestling with the tech
            stack than building features.
          </p>
          <div
            class="bg-violet-100 dark:bg-violet-950/50 text-lg text-violet-500 dark:text-violet-200 p-2 flex items-center border border-violet-300 dark:border-violet-800/50 rounded-lg my-4"
          >
            <UIcon
              name="heroicons:light-bulb"
              class="inline size-32 sm:size-24 lg:size-20 xl:size-16 mr-3"
            />
            <span>
              <strong>YAGNI</strong> (You Aren't Gonna Need It): Overengineering
              kills productivity. Prefer the simplest design until complexity
              forces you otherwise.
            </span>
          </div>
          <p>
            I also realized that it would be a nightmare if my app ever needed a
            major refactor.
            <strong
              >As a fresh grad from MIT, I was so eager to add complexity
              wherever I could to flex my skills</strong
            >. But as a solo developer, I needed to be pragmatic. I decided to
            refactor the entire project with a simpler tech stack and a more
            focused feature set.
          </p>
        </section>
        <section ref="version2">
          <h3 id="version-2" class="text-2xl font-semibold mt-8 mb-2">
            Version 2: Firebase + Vue
          </h3>
          <a
            href="https://github.com/tylerhiggs/My-Notion-Vue"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
          >
            <UIcon name="mdi:github" size="16" />
            View Source
          </a>
          <p>
            So I built a second version with the very simplest stack I knew:
            <strong
              >Firebase for the API, database, blob storage, and
              authentication,</strong
            >
            and <strong>Vue 3</strong> for the frontend. This enabled very rapid
            development, but there were was one issue: Firebase's free tier
            began excluding blob storage and this was just a personal project I
            was using so I could write articles and learn new skills, not
            something I was willing to pay for.
          </p>
          <p>
            Additionally, building a WYSIWYG editor is unexpectedly difficult.
            None of them are very accessible, nor do they work on all browsers.
            <a
              href="https://www.reddit.com/r/javascript/comments/18xpyjf/askjs_on_a_scale_of_110_how_hard_is_building_a/"
              target="_blank"
              rel="noopener noreferrer"
              >See this thread to see what other devs say about building WYSIWYG
              rich text editors from scratch</a
            >. Most of these editors that exist use
            <code>contenteditable</code>, which is a complex and often
            frustrating API to work with, allowing you to directly edit HTML. I
            had to mannually decide where the cursor should go and which element
            it should be within (your cursor is right between bold and normal
            text right now, when you type are the new characters bold or
            normal). I also had to handle pasting from Word, Google Docs, and
            other sources. Every time you type in a contenteditable
            <code>div</code>, the cursor would jump to the beginning since a
            state update was necessary, and the cursor position would need to be
            mannually set back. Here is an example of the buggy behavior I had
            to fix:
          </p>
          <div
            contenteditable
            class="border rounded-lg p-4 mb-4 bg-zinc-200 dark:bg-zinc-800 shadow-lg"
            :innerText="content"
            @input="content = ($event.target as HTMLDivElement).innerText"
          ></div>
        </section>
        <section ref="version3">
          <h3 id="version-3" class="text-2xl font-semibold mt-8 mb-2">
            Version 3: Markdown + Nuxt
          </h3>
          <a
            href="https://github.com/tylerhiggs/mdxNuxt"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
          >
            <UIcon name="mdi:github" size="16" />
            View Source
          </a>
          <p>
            In the third and final version, I decided to scrap the WYSIWYG
            editor and switch to a <strong>markdown</strong> editor. This was a
            much easier feature to build, since plain markdown is just text
            which can be typed in a text area which has so many features built
            in.
          </p>
          <p>
            I also switched to <strong>Nuxt 3</strong> which is a full stack
            framework (similar to Next.js for React) so that I could use
            <strong>server-side rendering</strong> to optimize SEO and
            performance for the public rendered page.
          </p>
          <p>
            I also got back the <strong>end to end type safety</strong> I had
            with GraphQL by using <strong>Drizzle ORM</strong> to define my
            database schema in <strong>TypeScript</strong> and
            <strong>Nuxt</strong> automatically gives me type safety between the
            backend endpoints and Vue components.
          </p>
          <p>
            Auth should also be simple to remove as many opportunities for me to
            shoot myself in the foot as possible. I used
            <code
              ><a
                href="https://nuxt.com/modules/auth-utils"
                target="_blank"
                rel="noopener noreferrer"
                >nuxt-auth-utils</a
              ></code
            >
            with <strong>Google OAuth</strong> to easily handle authentication
            on both the server and client.
          </p>
          <p>
            I used an extended version of markdown that includes several extra
            components. I used the syntax used by
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ui.nuxt.com/getting-started/typography"
              >Nuxt UI Content Typography</a
            >. If you use Nuxt UI Content, you can create pages by adding
            <code>.md</code> files in your project, then you deploy your site
            somewhere using CI/CD. I wanted to build a similar experience, but
            with a live-updating editor that autosaves and publishes to a public
            URL, all in the browser, and without having to deal with
            deployments.
          </p>
        </section>
      </section>
      <section ref="features">
        <h2 id="features" class="text-3xl font-semibold mt-12 mb-4">
          Features
        </h2>
        <section ref="md-editor">
          <h3 id="md-editor" class="text-2xl font-semibold mt-8 mb-2">
            Markdown Editor
          </h3>
          <p>
            The editor uses a simple <code>textarea</code> for input, with
            syntax highlighting provided by
            <a
              href="https://shiki.style/"
              target="_blank"
              rel="noopener noreferrer"
              >shiki</a
            >. It works on all browsers and is accessible. Since you cannot
            change the color of individual characters in a
            <code>textarea</code>, I make the <code>textarea</code> transparent
            and place a syntax highlighted <code>pre</code> behind it. This
            allows you to see the syntax highlighting while you type. The
            alternative would be to use a contenteditable div, but that is a
            mess <a href="/#version-2">as we talked about earlier</a>.
            <a
              href="https://shiki.style/guide/#playground"
              target="_blank"
              rel="noopener noreferrer"
              >This is how it works on the shiki docs</a
            >. Here is an example of an editable TypeScript code block using
            this technique:
          </p>
          <CodeEditor />
        </section>
      </section>
    </div>
    <div
      class="lg:flex lg:flex-col sticky top-0 hidden max-h-screen md:col-span-2"
    >
      <PageOutline :items="outlineItems" />
    </div>
  </main>
</template>

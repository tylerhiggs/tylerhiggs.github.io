<template>
  <main class="grid grid-cols-12 relative min-h-screen">
    <PageNav
      gh-link="https://github.com/tylerhiggs/tylerhiggs.github.io/blob/main/app/pages/sudoku.vue"
    />
    <div class="fixed h-screen top-0 left-0 right-0 pointer-events-none">
      <div v-for="(pos, i) in positions" :key="i" class="absolute" :style="pos">
        <div class="animate-float">
          <SudokuAnimation
            :animation-delay="i + 0.5"
            :num="(i % 9) + 1 as (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9)"
          />
        </div>
      </div>
    </div>

    <div
      class="col-span-12 px-12 py-24 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 relative z-10 **:[p]:text-lg"
    >
      <h1
        class="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text text-transparent"
      >
        Sudoku
      </h1>
      <div class="flex flex-wrap gap-3 mb-6">
        <a
          href="https://github.com/tylerhiggs/sudoku-ng"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <UIcon name="mdi:github" size="16" />
          View Source
        </a>
        <a
          href="https://sudoku-6fbd2.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-violet-700 hover:bg-violet-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <UIcon name="heroicons:play" size="16" />
          Live Demo
        </a>
      </div>
      <p>
        I enjoy a relaxing game of Sudoku, but I just wanted to play the game
        without ads or tracking. So, I built a simple Sudoku web app that lets
        me play the game in my browser.
      </p>
      <p>
        One of the goals of the project was to keep the app as simple as
        possible, while still delivering a game that plays well on browser and
        mobile devices with or without constant internet connection.
      </p>
      <p>
        Another goal was to learn new technologies and tools, like Swift,
        SwiftUI, Rust, and Angular.
      </p>
      <iframe
        src="https://www.youtube.com/embed/SZ3ziCQ8IhU"
        title="Sudoku web app"
        class="my-4 aspect-video w-full rounded-lg border border-neutral-200 dark:border-neutral-700"
        allowfullscreen
      ></iframe>
      <section ref="frontend">
        <h2 id="frontend" class="text-3xl font-semibold mt-12 mb-4">
          Angular Frontend
        </h2>
        <p>
          The currently selected row and column are highlighted to make it
          easier to see where you are on the board. The app also highlights all
          cells and notes with the same number of the selected cell. This makes
          it easier to see where a number can go.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg shadow-lg my-4"
            src="/sudoku-highlighting.png"
            alt="Screenshot of Sudoku"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          You can also toggle between note taking mode and fully entering
          numbers into the cells.
        </p>
        <p>
          You can also use the "Quick Pencil" button to automatically fill in
          pencil marks for all empty cells. This is a great way to quickly get
          started on a puzzle.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="rounded-lg shadow-lg my-4"
            src="/sudoku-actions.png"
            alt="Screenshot of Sudoku"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          When I started this project I was new to Angular. It was by coding
          projects like this, taking an idea and making it a reality, building
          it from the ground up, that took me from a novice to a pro on my team.
          I was the one who helped others learn Angular and was the go-to person
          for solving challenging bugs at my full time job.
        </p>
        <p>
          This project is very modern, using the latest Angular features like
          standalone components, signals, and zoneless.
        </p>
        <p>
          The UI is clean and simple, with a focus on usability. Features
          include pencil marks, and multiple difficulty levels. The app is also
          responsive, working well on both desktop and mobile devices.
        </p>
      </section>
      <section ref="first-try">
        <h2 id="first-try" class="text-3xl font-semibold mt-12 mb-4">
          First Try
        </h2>
        <a
          href="https://github.com/tylerhiggs/MySudoku"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >View source for the Swift app</a
        >
        <video
          class="w-1/2 rounded-lg shadow-lg my-4"
          controls
          muted
          preload="metadata"
        >
          <source
            src="https://private-user-images.githubusercontent.com/58869618/246179449-31263e59-9b87-4cb8-94de-a907c593c664.mov?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTc5NDY4NjAsIm5iZiI6MTc1Nzk0NjU2MCwicGF0aCI6Ii81ODg2OTYxOC8yNDYxNzk0NDktMzEyNjNlNTktOWI4Ny00Y2I4LTk0ZGUtYTkwN2M1OTNjNjY0Lm1vdj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA5MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwOTE1VDE0MjkyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlhZWFiNzU2NjcwNDRhN2ZkMzc5ZjY5ZDk2NTdmMzY2YjRiMjk2Mzc4NGQ2MTMzZWViZWEzODg4MWRhOTI3NDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.B20u45b-ozut6fWaWrXinkwayJs8vhThgFKVjJlddJw"
            type="video/quicktime"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          Before I started building the web app, I tried implementing an
          application in iOS using Swift and SwiftUI, all without any
          server-side code.
        </p>
        <p>
          One issue with my approach was that generating hard puzzles would take
          a long time (up to 5 minutes), heat up the iPhone, and drain the
          battery quickly. My initial thought was that I needed to take
          advantage of multithreading to speed things up, but even the most
          optimal solution was only bringing the average time down by a couple
          of minutes.
        </p>
        <p>
          I set up experiments to test new algorithms and optimizations, but
          none of them were able to generate hard puzzles in under a minute. I
          finally discovered that there were 2 fundamental problems with my
          approach:
        </p>
        <ul class="list-disc list-inside">
          <li>
            <p>
              The biggest performance bottleneck was how the algorithm decided
              when to give up on a puzzle and start to try generating a new one.
              My initial implementation would try to generate a puzzle until it
              found one with a unique solution, which could take a long time for
              hard puzzles. I later realized that I could set a limit on the
              number of attempts to generate a puzzle before giving up and
              starting over. This drastically reduced the average time to
              generate hard puzzles.
            </p>
          </li>
          <li>
            <p>
              The second issue was that Sudoku generation is unpredictable as
              stated in the previous point. I was trying to generate a puzzle
              when the user clicks "Start new game", when I should have been
              generating puzzles in the background while the user is playing.
            </p>
          </li>
        </ul>
        <p>
          Given these realizations, I decided there was no reason to continue
          trying to generate puzzles on the client. And since I wasn't going to
          generate on the client, I didn't need to use Swift on the client for
          the performance boost over JavaScript.
        </p>
        <p>
          Mobile applications are much more complicated to develop and take a
          significant amount of time and effort to create. And this is just a
          fun project for me, I don't want to pay Apple over $100 per year to
          publish to the app store if I don't need to. By moving the puzzle
          generation to the server, I can leverage the power of Rust and its
          ecosystem to create a more efficient and performant solution.
        </p>
      </section>
      <section ref="rust">
        <h2 id="rust" class="text-3xl font-semibold mt-12 mb-4">
          Generate Puzzles with Rust
        </h2>
        <p>
          There are many ways to generate Sudoku puzzles with different
          difficulties, including creating and using a solver that only knows a
          subset of solving techniques.
          <a
            href="https://www.conceptispuzzles.com/index.aspx?uri=puzzle/sudoku/techniques"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 hover:underline"
            >Conceptis Puzzles has a great list of techniques</a
          >. I chose to use a backtracking algorithm to generate puzzles, which
          is a brute-force method that ensures a unique solution. The algorithm
          works by filling in numbers one by one, and backtracking when it
          encounters a conflict.
        </p>
        <p>
          The backtracking difficulty comes from the number of cells that are
          initially filled in. More filled cells generally lead to an easier
          puzzle, while fewer filled cells lead to a harder puzzle.
        </p>
      </section>
      <section ref="server">
        <h2 id="server" class="text-3xl font-semibold mt-12 mb-4">
          Node Server
        </h2>
        <p>
          Keeping this app as simple as possible was a top priority for me. I
          knew I could quickly set up a Node + Express server and have the rust
          code send over the generated puzzles via HTTP requests. It is also
          very easy to have the Node server send those puzzles to a Firebase DB.
        </p>
        <p>
          There may be a way to send messages to Firebase directly from Rust,
          but that would definitely be an overcomplication. This especially
          satisfies the <strong>YAGNI (You Aren't Gunna Need It)</strong> and
          <strong>KISS (Keep It Simple, Stupid)</strong> principles.
        </p>
        <p>
          To keep costs low and to avoid server maintenance, I run the Rust and
          Node code on my own machine, creating batches of puzzles and posting
          them to the remote database.
        </p>
      </section>
      <section ref="database">
        <h2 id="database" class="text-3xl font-semibold mt-12 mb-4">
          Firebase Database
        </h2>
        <p>
          I chose Firebase for the database because it is easy to set up and
          manage, and it has a generous free tier. The Firebase Realtime
          Database is a NoSQL database that stores data in JSON format. It is
          also easy to integrate with the Angular frontend.
        </p>
        <p>
          The database structure is simple, with a collection of puzzles
          categorized by difficulty level. Each difficulty level has a
          collection of batches, and each batch stores 50 puzzles which can be
          returned efficiently in a single query. Each puzzle is stored as a 2D
          array of numbers, with 0 representing an empty cell. The Rust code
          creates a hash for each puzzle which is also stored to ensure
          uniqueness.
        </p>
      </section>
      <section ref="client-storage">
        <h2 id="client-storage" class="text-3xl font-semibold mt-12 mb-4">
          Client Storage
        </h2>
        <p>
          To minimize the number of requests to the database, the Angular app
          stores puzzles in the browser's local storage. When the user starts a
          new game, the app first checks if there are any puzzles stored
          locally. If there are, it retrieves a puzzle from local storage. If
          not, it fetches a batch of puzzles from the database and stores them
          locally for future use. If there are fewer than 50 puzzles left, it
          stores another batch.
        </p>
        <p>
          Now if you get on a plane without internet access, you can still play
          with at most 50 puzzles for each difficulty level if you have already
          loaded the site into the browser.
        </p>
      </section>
    </div>
    <div
      class="lg:flex lg:flex-col sticky top-0 hidden max-h-screen md:col-span-2"
    >
      <PageOutline :items="outlineItems" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import type { Item } from "~/types";

const positions = [
  { left: "5%", top: "10%" },
  { right: "8%", top: "15%" },
  { left: "15%", top: "40%" },
  { right: "20%", top: "35%" },
  { left: "8%", top: "70%" },
  { right: "5%", top: "65%" },
  { left: "25%", top: "80%" },
  { right: "25%", top: "85%" },
  { left: "2%", top: "50%" },
  { right: "2%", top: "45%" },
  { left: "12%", top: "20%" },
  { right: "12%", top: "75%" },
];

const frontendSection = useTemplateRef("frontend");
const firstTrySection = useTemplateRef("first-try");
const rustSection = useTemplateRef("rust");
const serverSection = useTemplateRef("server");
const databaseSection = useTemplateRef("database");
const clientStorageSection = useTemplateRef("client-storage");

const frontendSectionVisible = useElementVisibility(frontendSection);
const firstTrySectionVisible = useElementVisibility(firstTrySection);
const rustSectionVisible = useElementVisibility(rustSection);
const serverSectionVisible = useElementVisibility(serverSection);
const databaseSectionVisible = useElementVisibility(databaseSection);
const clientStorageSectionVisible = useElementVisibility(clientStorageSection);

const outlineItems = computed(
  () =>
    [
      {
        id: "frontend",
        label: "Angular Frontend",
        items: [],
        isVisible: frontendSectionVisible.value,
      },
      {
        id: "first-try",
        label: "First Try - Swift App",
        items: [],
        isVisible: firstTrySectionVisible.value,
      },
      {
        id: "rust",
        label: "Generate Puzzles with Rust",
        items: [],
        isVisible: rustSectionVisible.value,
      },
      {
        id: "server",
        label: "Node Server",
        items: [],
        isVisible: serverSectionVisible.value,
      },
      {
        id: "database",
        label: "Firebase Database",
        items: [],
        isVisible: databaseSectionVisible.value,
      },
      {
        id: "client-storage",
        label: "Client Storage",
        items: [],
        isVisible: clientStorageSectionVisible.value,
      },
    ] as Item[]
);
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
</style>

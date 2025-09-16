<template>
  <main class="grid grid-cols-12 relative min-h-screen">
    <PageNav
      gh-link="https://github.com/tylerhiggs/tylerhiggs.github.io/blob/main/app/pages/calculator.vue"
    />
    <!-- Floating Calculator Background -->
    <div class="fixed h-screen top-0 left-0 right-0 pointer-events-none">
      <div
        v-for="(pos, i) in positions"
        :key="i"
        class="absolute opacity-10 text-gray-400"
        :style="pos"
      >
        <UIcon
          name="heroicons:calculator"
          class="animate-float"
          :style="{
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${8 + i}s`,
          }"
          size="96"
        />
      </div>
    </div>

    <div
      class="col-span-12 px-12 py-24 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 relative z-10 **:[p]:text-lg"
    >
      <h1
        class="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text text-transparent"
      >
        Mortgage and Rent Retirement Calculator
      </h1>
      <div class="flex flex-wrap gap-3 mb-6">
        <a
          href="https://github.com/tylerhiggs/mortgage-rent-calculator"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <UIcon name="mdi:github" size="16" />
          View Source
        </a>
        <a
          href="https://mortgage-and-rent-calculator.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <UIcon name="heroicons:play" size="16" />
          Live Demo
        </a>
      </div>
      <p>
        Is it better to rent or buy a home? This is a difficult question given
        that <strong>better</strong> is a subjective term. This calculator aims
        to clarify the tradeoffs and surface actionable retirement outcomes for
        users.
      </p>
      <section ref="motivation">
        <h2 id="motivation" class="text-3xl font-semibold mt-12 mb-4">
          Motivation
        </h2>
        <p>
          A few years ago, I was trying to decide whether to rent or buy a home.
          Some tell you that buying is always better since renting causes you to
          throw away money on rent, while mortgage payments build equity. Others
          say that renting is better since investments in the stock market will
          outperform real estate over time. Both sides make compelling
          arguments, and I found myself confused about which option was actually
          better for me.
        </p>
      </section>
      <section ref="approach">
        <h2 id="approach" class="text-3xl font-semibold mt-12 mb-4">
          Approach - Value of Money
        </h2>
        <p>
          Let's say you have $200k to put down on a house. How
          <strong>valuable</strong> is having that money for an emergency? Or
          how about just spending the money on a boat? Or spending a third on a
          nice car, and investing the rest?
        </p>
        <p>
          Because different people prefer to spend their money differently, it
          is helpful to pick a single point in time to compare the two options.
          This calculator uses your retirement date as that point in time.
        </p>
        <NuxtPicture
          class="w-full rounded-lg **:rounded-lg shadow-lg my-4"
          src="/retirement-charts.png"
          alt="Comparing Retirement Outcomes of Renting vs Buying a Home"
          width="1000"
          sizes="sm:600px md:800px lg:1400px"
          format="webp"
          placeholder
        />
        <p>
          The retirement outcome calculations assume the user invests every
          penny saved by not choosing the other option.
          <strong>
            You might not choose to invest all of your money this way, but the
            value to you of being able to spend it however you choose will be
            roughly equal to the potential investment gains you could have
            earned.
          </strong>
        </p>
      </section>
      <section ref="short-term-considerations">
        <h2
          id="short-term-considerations"
          class="text-3xl font-semibold mt-12 mb-4"
        >
          Short Term Considerations - Monthly Losses
        </h2>
        <NuxtPicture
          class="w-full rounded-lg **:rounded-lg shadow-lg mb-4"
          src="/asset-loss.png"
          alt="Monthly Asset Losses of Buying a Home"
          width="1000"
          format="webp"
          placeholder
        />
        <p>
          In addition to comparing retirement outcomes, this calculator also
          shows the monthly asset losses of buying a home. Some of your mortgage
          goes back to you in the form of equity, but there are also many costs
          that do not. Property taxes, insurance, interest, and HOA take money
          from your pocket that you will never get back. These costs are
          summarized in the monthly losses section.
        </p>
      </section>
      <section ref="math">
        <h2 id="math" class="text-3xl font-semibold mt-12 mb-4">Math</h2>
        <p>
          <a
            tabindex="0"
            href="https://github.com/tylerhiggs/mortgage-rent-calculator?tab=readme-ov-file#equations"
            class="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            You can see all the math in the GitHub README here!
          </a>
          By using math tricks, this calculator avoids summing over every month
          from now until retirement date. Instead, it uses formulas to calculate
          the future value of investments and the amortization of a mortgage.
          This makes the calculator fast and reactive, even on mobile devices.
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
const motivationSection = useTemplateRef("motivation");
const approachSection = useTemplateRef("approach");
const shortTermConsiderationsSection = useTemplateRef(
  "short-term-considerations"
);
const mathSection = useTemplateRef("math");

const motivationSectionVisible = useElementVisibility(motivationSection);
const approachSectionVisible = useElementVisibility(approachSection);
const shortTermConsiderationsSectionVisible = useElementVisibility(
  shortTermConsiderationsSection
);
const mathSectionVisible = useElementVisibility(mathSection);

const outlineItems = computed(
  () =>
    [
      {
        id: "motivation",
        label: "Motivation",
        items: [],
        isVisible: motivationSectionVisible.value,
      },
      {
        id: "approach",
        label: "Approach - Value of Money",
        items: [],
        isVisible: approachSectionVisible.value,
      },
      {
        id: "short-term-considerations",
        label: "Short Term Considerations - Monthly Losses",
        items: [],
        isVisible: shortTermConsiderationsSectionVisible.value,
      },
      {
        id: "math",
        label: "Math",
        items: [],
        isVisible: mathSectionVisible.value,
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

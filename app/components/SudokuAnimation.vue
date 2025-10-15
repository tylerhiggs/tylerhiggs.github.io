<template>
  <div class="sudoku-animation">
    <svg width="100" height="100" viewBox="0 0 100 100">
      <!-- Box -->
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        fill="none"
        stroke-dasharray="320"
        stroke-dashoffset="320"
        class="box-animation stroke-gray-300 dark:stroke-gray-700"
        stroke-width="2"
      />

      <!-- Hand-written number -->
      <path
        ref="numberPathRef"
        :key="num"
        :d="numberPath"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        :stroke-dasharray="`${numberLength}, 10000`"
        :stroke-dashoffset="`${numberLength}`"
        class="number-animation stroke-gray-300 dark:stroke-gray-700"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  animationDelay: number;
  num: keyof typeof numberPaths;
}>();
const delayString = computed(() => `${props.animationDelay}s`);
const numberRef = useTemplateRef("numberPathRef");
const numberLength = computed(
  () => `${numberRef.value ? numberRef.value.getTotalLength() : 1000}`
);

const numberPaths = {
  1: "M45 25 L45 75 M35 35 L45 25",
  2: "M30 35 Q30 25 40 25 Q50 25 50 35 Q50 45 30 65 L70 65",
  3: "M30 25 Q50 25 60 35 Q60 45 45 50 Q60 55 60 65 Q60 75 50 75 Q30 75 30 65",
  4: "M35 25 L35 50 L65 50 L55 25 L55 75",
  5: "M65 25 L30 25 L30 50 L50 50 Q65 50 65 60 Q65 70 50 70 Q35 70 35 60",
  6: "M55 25 Q40 25 30 35 Q30 45 30 55 Q30 65 40 75 Q50 75 60 65 Q60 55 50 50 Q40 50 30 55",
  7: "M30 25 L70 25 L45 75",
  8: "M30 40 Q30 25 50 25 Q70 25 70 40 Q70 50 50 50 Q30 50 30 60 Q30 75 50 75 Q70 75 70 60 Q70 50 50 50",
  9: "M30 65 Q30 75 40 75 Q50 75 60 65 Q60 55 60 45 Q60 35 60 25 Q50 25 40 25 Q30 25 30 35 Q30 45 40 50 Q50 50 60 45",
};

const numberPath = computed(() => numberPaths[props.num]);
</script>

<style scoped>
.sudoku-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}

.box-animation {
  animation-name: drawBox;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: v-bind(delayString);
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}

.number-animation {
  animation-name: drawNumber;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: v-bind(delayString);
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}

@keyframes drawBox {
  0% {
    stroke-dashoffset: 320;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes drawNumber {
  0% {
    stroke-dashoffset: v-bind(numberLength);
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>

<!-- inspired by https://yujisatojr.github.io/react-portfolio-template/ 
 I improved this by making it an SVG instead of a png and adding animation -->
<template>
  <div class="background-svg-wrapper">
    <svg
      viewBox="0 0 1280 640"
      class="background-svg"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width="100%"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#a855f7" />
          <stop offset="100%" stop-color="#8b5cf6" />
        </linearGradient>
      </defs>
      <g class="w-screen">
        <!-- Multiple thin lines for the ribbon effect -->
        <template v-for="i in 24" :key="i">
          <path
            :d="`M0,${420 + i * 4} Q400,${220 + i * 2} 700,${
              420 - i * 6
            } T1280,${320 + i * 3}`"
            fill="none"
            stroke="url(#purpleGradient)"
            :stroke-width="1.2"
            :opacity="0.08 + i * 0.03"
            :style="`animation-delay: ${i * 0.15}s`"
            class="ribbon-anim"
          />
        </template>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.background-svg-wrapper {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.background-svg {
  width: 100vw;
  height: 100vh;
  display: block;
}

.ribbon-anim {
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: waveMove 6s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
  animation-fill-mode: backwards;
  will-change: transform;
}

@keyframes waveMove {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-16px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>

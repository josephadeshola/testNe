<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { elasticOut, backOut } from 'svelte/easing';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  function goHome() {
    goto('/');
  }

  $: is404 = $page.status === 404;
</script>

<svelte:head>
  <title>{$page.status === 404 ? 'Page Under Construction' : 'Error'} | NECTA Network</title>
  <meta
    name="description"
    content="{$page.status === 404
      ? 'This page is currently under development'
      : 'An error occurred'}. Return to NECTA Network homepage."
  />
</svelte:head>

<div
  class="min-h-screen bg-[#0A0701] flex items-center justify-center px-4 py-8 relative overflow-hidden"
>
  <div class="absolute inset-0 opacity-5">
    <div
      class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-tl from-[#FFE37D] to-transparent rounded-full blur-3xl"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full blur-3xl"
    ></div>
  </div>

  <div class="relative z-10 text-center max-w-2xl mx-auto">
    {#if mounted}
      <div
        class="mb-8"
        in:scale={{
          duration: 1000,
          delay: 200,
          easing: backOut,
          start: 0.3,
        }}
      >
        <div class="relative inline-block animate-float">
          <svg
            width="400"
            height="240"
            viewBox="0 0 400 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[280px] h-[168px] sm:w-[350px] sm:h-[210px] lg:w-[400px] lg:h-[240px] drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:1" />
                <stop offset="25%" style="stop-color:#D3D0C8;stop-opacity:1" />
                <stop offset="75%" style="stop-color:#FFE37D;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFFFFF;stop-opacity:0.6" />
              </linearGradient>

              <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:0.1" />
                <stop offset="100%" style="stop-color:#FFE37D;stop-opacity:0.05" />
              </linearGradient>

              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                <feOffset dx="2" dy="2" result="offset" />
              </filter>
            </defs>

            <g transform="translate(20, 20)">
              <text
                x="0"
                y="140"
                font-family="Inter, system-ui, sans-serif"
                font-size="160"
                font-weight="800"
                fill="url(#shadowGradient)"
                opacity="0.3"
                transform="translate(4, 4)">4</text
              >

              <text
                x="0"
                y="140"
                font-family="Inter, system-ui, sans-serif"
                font-size="160"
                font-weight="800"
                fill="url(#textGradient)"
                filter="url(#glow)">4</text
              >

              <g transform="translate(120, 0)">
                <circle
                  cx="60"
                  cy="100"
                  r="55"
                  fill="none"
                  stroke="url(#textGradient)"
                  stroke-width="8"
                  opacity="0.8"
                  filter="url(#glow)"
                />
                <circle cx="60" cy="100" r="35" fill="url(#shadowGradient)" opacity="0.2" />
                <circle cx="60" cy="100" r="25" fill="url(#textGradient)" opacity="0.6" />
                <circle cx="60" cy="100" r="12" fill="#FFE37D" opacity="0.9" />
              </g>

              <text
                x="240"
                y="140"
                font-family="Inter, system-ui, sans-serif"
                font-size="160"
                font-weight="800"
                fill="url(#shadowGradient)"
                opacity="0.3"
                transform="translate(4, 4)">4</text
              >

              <text
                x="240"
                y="140"
                font-family="Inter, system-ui, sans-serif"
                font-size="160"
                font-weight="800"
                fill="url(#textGradient)"
                filter="url(#glow)">4</text
              >
            </g>

            <g opacity="0.3">
              <path
                d="M50 200 Q200 180 350 200"
                stroke="url(#textGradient)"
                stroke-width="2"
                fill="none"
                opacity="0.5"
              />
              <circle cx="100" cy="195" r="2" fill="#FFE37D" opacity="0.8">
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="200" cy="188" r="1.5" fill="#FFFFFF" opacity="0.6">
                <animate
                  attributeName="opacity"
                  values="0.2;0.6;0.2"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="300" cy="195" r="2" fill="#D3D0C8" opacity="0.7">
                <animate
                  attributeName="opacity"
                  values="0.4;0.7;0.4"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        </div>
      </div>

      <div
        in:fly={{
          y: 30,
          duration: 600,
          delay: 800,
          easing: elasticOut,
        }}
        class="mb-6"
      >
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 bg-gradient-to-r from-[#D3D0C8] to-[#FFFFFF] bg-clip-text text-transparent"
        >
          Oops, the page you're looking for doesn't exist.
        </h2>
      </div>

      <div
        in:fade={{
          duration: 500,
          delay: 1100,
        }}
        class="mb-12"
      >
        <p class="text-white/70 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto">
          You may have mistyped the address or the page may have moved.
        </p>
      </div>

      <div
        in:fly={{
          y: 20,
          duration: 500,
          delay: 1400,
        }}
        class="flex justify-center"
      >
        <button
          on:click={goHome}
          class="group relative bg-gradient-to-b from-white to-[#D7D3E0] text-[#0A0701] px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 active:translate-y-0 active:shadow-lg overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"
          ></div>
          <span class="relative z-10 flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </span>
        </button>
      </div>

      <div
        in:fade={{
          duration: 400,
          delay: 1700,
        }}
        class="mt-16"
      >
        <div class="inline-flex items-center gap-2 text-white/40 text-sm">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error Code: {$page.status || 404}</span>
        </div>
      </div>
    {/if}
  </div>

  <div
    class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0701] to-transparent pointer-events-none"
  ></div>
  <div
    class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0A0701] to-transparent pointer-events-none"
  ></div>
</div>

<style>
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
</style>

<script>
  import { Menu, X } from 'lucide-svelte';
  import horiLogoWhite from '../assets/logonew.svg';
  import { fadeIn, parallax } from '$lib/components/animations/animations.js';

  let isMenuOpen = false;

  export let button_link = '#';
  export let button_text = 'NECTA Genesis Protocol';
  // Menu items array
  const menuItems = [
    { label: 'Whitepaper', href: '/whitepaper' },
    { label: 'Support', href: '/support' },
    { label: 'Documentations', href: '/documentations' },
    { label: 'Resources', href: '/resources' },
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<nav class="fixed top-0 px-5 md:px-10 lg:px-42 left-0 right-0 z-50">
  <div
    use:fadeIn={{ delay: 0, direction: 'down', offset: 40, duration: 400 }}
    class="w-full mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div class="flex items-center justify-between h-16 lg:h-18">
      <!-- Logo -->
      <a href="/"
        ><div class="flex items-center gap-3 cursor-pointer">
          <img src={horiLogoWhite} alt="NECTA Logo" class="w-[30px] h-[35px]" />
          <p style="font-family:'new-science', sans-serif ;" class="font-[700] text-[18px] text-[#FFFFFF]">NECTER</p>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <div
        class="hidden bg-gradient-to-b from-[#19140C33] to-[#FFE37D1A] lg:flex h-[37px] border-[1px] px-9 border-[#483B2670] rounded-[200px] items-center gap-5 lg:gap-7 backdrop-blur-sm"
      >
        {#each menuItems as item}
          <a
            href={item.href}
            class="hover:text-[var(--necta-kova-200)] font-[500] text-[#FFFFFF] text-[14px] transition-colors duration-200"
          >
            {item.label}
          </a>
        {/each}
      </div>

      <!-- Desktop CTA Button -->
      <div class="hidden lg:block">
        <a href={button_link}>
          <button
            class="bg-gradient-to-b from-white h-[35px]  to-[#D7D3E0] cursor-pointer px-6 rounded-full font-[500] text-[14px] transition-all text-[#0A0701] duration-200 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
          >
            {button_text}
          </button>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="block lg:hidden p-2 rounded-lg cursor-pointer hover:bg-white/10 transition-colors duration-200"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        {#if isMenuOpen}
          <X size={24} class="text-white" />
        {:else}
          <Menu size={24} class="text-white" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div
      class="block lg:hidden bg-black/80 backdrop-blur-md border-b border-[#483B2670] animate-in slide-in-from-top duration-300"
    >
      <div class="px-4 py-6 space-y-4">
        {#each menuItems as item}
          <a
            href={item.href}
            class="block text-[var(--necta-grey)] hover:text-[var(--necta-kova-200)] font-medium py-3 border-b border-[#483B2670] transition-colors duration-200"
            on:click={closeMenu}
          >
            {item.label}
          </a>
        {/each}
        <div class="pt-4">
          <a href={button_link} class="block">
            <button
              class="w-full bg-gradient-to-b  from-white cursor-pointer to-[#D7D3E0] text-zinc-900 py-4 rounded-2xl font-semibold hover:bg-zinc-100 transition-colors duration-200"
            >
              {button_text}
            </button>
          </a>
        </div>
      </div>
    </div>
  {/if}
</nav>

<style>
  @keyframes slide-in-from-top {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-in {
    animation: slide-in-from-top 0.3s ease-out;
  }
</style>

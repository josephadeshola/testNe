<script>
  import horiLogoWhite from '../assets/logonew.svg';

  import SDBlur from '$lib/assets/system-design-blur.svg';
  import beeNet1 from '$lib/assets/bee-net1.svg';
  import footerLogo from '../assets/Hori Logo (White).png';
</script>

<aside
  class="md:mt-[160px] px-4 md:px-8 relative rounded-2xl md:rounded-[40px] border-t-1 border-transparent"
  style="border-image: linear-gradient(to right, #FFE37D00, #FFE37D00, #FFE37D, #FFE37D00, #FFE37D00) 1; "
>
  <div
    class="absolute top-0 left-0 w-full h-full"
    style="background-image: linear-gradient(to bottom, #0A070100, #0A0701, #0A0701,#0A0701) 1; "
  ></div>
  <div class="absolute top-0 -left-1 right w-full h-full pointer-events-none overflow-hidden">
    <img src={SDBlur} alt="" class="object-fill rounded-2xl md:rounded-[40px] w-full" />
  </div>
  <div class="absolute top-0 z-10 left-0 w-full md:h-full rounded-t-[40px] overflow-hidden">
    <img
      src={beeNet1}
      class="object-contain md:object-cover w-full h-full mix-blend-overlay"
      alt=""
    />
  </div>

  <!-- Footer Content -->
  <div class="relative z-20 pt-10 pb-3">
    <!-- Main Footer Content -->
    <div class="lg:flex justify-between">
      <!-- Logo Section -->
      <div class="">
        <a href="/">
          <div class="flex items-center gap-3 cursor-pointer">
            <img src={horiLogoWhite} alt="NECTA Logo" class="w-[55px] h-[63px]" />
            <p
              style="font-family:'new-science', sans-serif ;"
              class="font-[700] text-[32.64px] text-[#FFFFFF]"
            >
              NECTER
            </p>
          </div>
        </a>
      </div>

      <!-- Company -->
      <div class="mt-3">
        <h3 class="text-white font-[500] text-[14px] md:text-[16px] mb-[10px] ">Company</h3>
        <ul class="space-y-3 md:space-y-2">
          <li>
            <a
              href="/blog"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="/careers"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >Careers</a
            >
          </li>
          <li>
            <a
              href="/contact"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>

      <!-- Resources -->
      <div class="mt-3">
        <h3 class="text-white font-[500] text-[14px] md:text-[16px] mb-[10px]">Resources</h3>
        <ul class="space-y-3 md:space-y-4">
          <li>
            <a
              href="/documentation"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >Documentation</a
            >
          </li>
          <li>
            <a
              href="/whitepaper"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >Whitepaper</a
            >
          </li>
        </ul>
      </div>

      <!-- Solutions -->
      <div class="mt-3">
        <h3 class="text-white font-[500] text-[14px] md:text-[16px] mb-[10px]">Solutions</h3>
        <ul class="space-y-3 md:space-y-4">
          <li>
            <a
              href="/alum"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >Alum</a
            >
          </li>
          <li>
            <a
              href="/dockhive"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >Dockhive</a
            >
          </li>
          <li>
            <a
              href="/tiwa-agent"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >TIWA Agent</a
            >
          </li>
          <li>
            <a
              href="/necta"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >$NECTA</a
            >
          </li>
        </ul>
      </div>

      <!-- Legal & Compliance -->
      <div class="mt-3">
        <h3 class="text-white font-[500] text-[14px] md:text-[16px] mb-[10px]">
          Legal & Compliance
        </h3>
        <ul class="space-y-3 md:space-y-4">
          <li>
            <a
              href="/terms"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >Terms of Service</a
            >
          </li>
          <li>
            <a
              href="/privacy"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >Privacy Policy</a
            >
          </li>
          <li>
            <a
              href="/cookies"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >Cookie Policy</a
            >
          </li>
        </ul>
      </div>

      <!-- Pages -->
      <div class="mt-3">
        <h3 class="text-white font-[500] text-[14px] md:text-[16px] mb-[10px]">Pages</h3>
        <ul class="space-y-3 md:space-y-4">
          <li>
            <a
              href="/about"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >About</a
            >
          </li>
          <li>
            <a
              href="/roadmap"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >Roadmap</a
            >
          </li>
          <li>
            <a
              href="/necta-genesis"
              class="text-white/60 hover:text-white text-[12px] md:text-[14px] transition-colors"
              >$NECTA Genesis Protocol</a
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- Divider -->
    <div class="w-full h-[1px] border-[1px] border-[#FFFFFF3B] my-12 md:my-8"></div>

    <!-- Bottom Footer -->
    <div
      class="flex w-full justify-center md:flex-row items-center md:items-center space-y-4 md:space-y-0"
    >
      <p class="text-[#FFFFFF]/60 text-[12px] font-[400] md:text-[14px]">
        ©2025 <span class="font-[500] hover:underline cursor-pointer text-[#FFFFFF]"
          ><a href="https://www.hiveinnovationlab.com/" target="_blank">HIVE INNOVATION LAB</a
          ></span
        >. All rights reserved
      </p>
    </div>
  </div>
</aside>

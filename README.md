# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.


<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import beeNet1 from '$lib/assets/bee-net1.svg';
  import bottomWax1 from '$lib/assets/bottom-wax1.svg';
  import nectaCoinCurveBg from '$lib/assets/necta-coin-bg-curve.svg';
  import nectaHerocoin from '$lib/assets/necta-coin-hero.png';
  import nectaCoinVideo from '$lib/assets/necta-coin-video.mp4';
  import SDBlur from '$lib/assets/system-design-blur.svg';
  import bee from '$lib/assets/bee.png';
  import pillars from '$lib/assets/pillars.png';
  import slab from '$lib/assets/slab_stack.png';
  import timer from '$lib/assets/timer.png';
  import user_up from '$lib/assets/user-up.svg';
  import star from '$lib/assets/star.svg';
  import line_chart from '$lib/assets/line-chart-up.svg';
  import coins from '$lib/assets/coins.svg';
  import GradientText from '$lib/components/GradientText.svelte';
  import secondBlur from '$lib/assets/second-blur.svg';
  import handCoins from '$lib/assets/coins-hand.svg';
  import users_up from '$lib/assets/users-up.svg';
  import { fadeIn, parallax } from '$lib/components/animations/animations.js';
  import Modal from '$lib/components/Modal.svelte';

  const tokenomicsData = [
    {
      category: 'Whitelist Opens',
      notes: '[Insert Date]',
    },
    {
      category: 'NGT Mining Live',
      notes: '[Insert Date]',
    },
    {
      category: 'TGE & Claim Period',
      notes: 'Q4 2025',
    },
  ];

  let showModal = false;

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<section class="text-white px-4 font-['Satoshi'] sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pb-5 flex flex-col gap-9 bg-[#0A0701] min-h-screen">
  <NavBar />
  
  <!-- Hero Section with Video -->
  <aside class="min-h-[90vh] lg:h-[100vh] flex items-center relative rounded-[20px] lg:rounded-b-[40px] overflow-hidden">
    <!-- Background overlays for desktop -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A070140] to-[#0A0701] z-10"></div>
    
    <!-- Bottom wax decoration -->
    <div class="absolute bottom-0 left-0 w-full h-auto scale-x-[-1] z-20">
      <img src={bottomWax1} class="w-full h-auto object-cover" alt="" />
    </div>

    <!-- Main content container -->
    <div class="relative z-30 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">
      <!-- Text content -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center">
        <h1
          use:fadeIn={{ delay: 100, direction: 'down', offset: 40, duration: 600 }}
          class="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] xl:text-5xl font-bold bg-gradient-to-r from-[#D3D0C8] to-[#FFFFFF] bg-clip-text text-transparent leading-[120%] tracking-normal mb-4 lg:mb-6"
        >
          NECTA Genesis Protocol
          <br />
          Early Access Airdrop
        </h1>
        
        <p
          use:fadeIn={{ delay: 400, direction: 'in', duration: 600 }}
          class="text-sm sm:text-base lg:text-lg xl:text-xl leading-[140%] text-white mb-6 lg:mb-8 max-w-2xl"
        >
          Get early access to NECTA by minting a NECTA Genesis Token (NGT) — a
          voucher for $NECTA airdrops. Legacy Dockhive users can convert old
          assets. New users can complete tasks to mint their NGT and join the ecosystem.
        </p>

        <button
          on:click={openModal}
          use:fadeIn={{ delay: 500, direction: 'in', duration: 600 }}
          class="w-fit px-6 py-3 lg:px-8 lg:py-4 rounded-full bg-gradient-to-b from-[#FFE37D] to-[#FF9809] text-sm lg:text-base font-semibold text-[#0A0701] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Whitelist Your Wallet
        </button>
      </div>

      <!-- Video content -->
      <div class="w-full lg:w-1/2 relative">
        <div class="relative aspect-video lg:aspect-square rounded-2xl lg:rounded-t-[12px] overflow-hidden bg-black/20 backdrop-blur-sm">
          <video 
            class="w-full h-full object-cover rounded-2xl lg:rounded-t-[12px]" 
            autoplay 
            loop 
            muted 
            playsinline
          >
            <source src={nectaCoinVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <!-- Video overlay for better text contrast on mobile -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A0701]/60 via-transparent to-transparent lg:hidden"></div>
        </div>
      </div>
    </div>
  </aside>

  <!-- Who Can Participate Section -->
  <aside class="mt-10 lg:mt-16 relative rounded-2xl md:rounded-[40px]">
    <p class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium leading-[120%] text-center mb-8 lg:mb-16">
      <GradientText edgeOpacity={0.3}>Who Can Participate?</GradientText>
    </p>

    <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
      <!-- Legacy Users -->
      <div class="flex-1 flex flex-col items-center">
        <div class="relative mb-6">
          <img src={pillars} alt="" class="grayscale w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] xl:max-w-[356px]" />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0701]"></div>
        </div>
        <div class="w-full max-w-md text-center lg:text-left">
          <h3 class="text-xl lg:text-2xl font-medium mb-4">Legacy Users:</h3>
          <ul class="text-sm sm:text-base lg:text-lg text-[#FFFFFFCC] leading-[140%] space-y-2 text-left">
            <li class="flex items-start">
              <span class="text-[#FFE37D] mr-2">•</span>
              <span>Convert old DHT tokens or Dockhive NFTs Mint your NGT to claim</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#FFE37D] mr-2">•</span>
              <span>1 DHT = 4 NECTA • NFT = Bonus based on rarity</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#FFE37D] mr-2">•</span>
              <span>future NECTA allocation</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="hidden lg:block w-px bg-[#362E21]"></div>

      <!-- New Users -->
      <div class="flex-1 flex flex-col items-center">
        <div class="relative mb-6">
          <img src={slab} alt="" class="grayscale w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] xl:max-w-[356px]" />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0701]"></div>
        </div>
        <div class="w-full max-w-md text-center lg:text-left">
          <h3 class="text-xl lg:text-2xl font-medium mb-4">New Users</h3>
          <ul class="text-sm sm:text-base lg:text-lg text-[#FFFFFFCC] leading-[140%] space-y-2 text-left">
            <li class="flex items-start">
              <span class="text-[#FFE37D] mr-2">•</span>
              <div>
                <strong>Complete quests:</strong>
                <ul class="mt-1 ml-4 space-y-1">
                  <li class="flex items-start">
                    <span class="text-[#FFE37D] mr-2 text-xs">•</span>
                    <span>Follow Hive projects on Twitter.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-[#FFE37D] mr-2 text-xs">•</span>
                    <span>Join Telegram & Discord.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-[#FFE37D] mr-2 text-xs">•</span>
                    <span>Repost the pinned tweet.</span>
                  </li>
                </ul>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-[#FFE37D] mr-2">•</span>
              <span>Mint your NGT for a NECTA airdrop (vested).</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>

  <!-- NECTA Token Section -->
  <aside class="mt-16 lg:mt-24 overflow-hidden relative rounded-[20px] lg:rounded-[40px] px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
    <!-- Background layers -->
    <div class="absolute inset-0 overflow-hidden">
      <img src={beeNet1} class="w-full h-full object-cover mix-blend-overlay opacity-60" alt="" />
    </div>
    <div class="absolute inset-0 overflow-hidden">
      <img src={secondBlur} class="w-full h-full object-cover opacity-40" alt="" />
    </div>
    <div class="absolute inset-0 overflow-hidden">
      <img src={nectaCoinCurveBg} class="w-full h-full object-cover opacity-30" alt="" />
    </div>

    <div class="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <!-- Text content -->
      <div class="flex-1 space-y-6">
        <div class="inline-block rounded-lg px-4 py-2 text-sm bg-[#FFFFFF14] ring-1 ring-white/15 backdrop-blur-sm">
          One Token. Every Layer.
        </div>

        <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal leading-[120%]">
          <GradientText edgeOpacity={0.5}>
            NECTA Token —
            <br /> The Convergent Fuel of the Hive
          </GradientText>
        </h2>

        <p class="text-base lg:text-lg leading-[140%] text-white/90">
          Total Campaign Allocation: 0.5% of NECTA Supply (~3,087,000 NOT)<br />
          Vesting: 6-month cliff • 12-month linear
        </p>

        <ul class="text-sm lg:text-base leading-[140%] space-y-3 ml-4">
          <li class="flex items-start">
            <span class="text-[#FFE37D] mr-3">•</span>
            <span>Complete all tasks.</span>
          </li>
          <li class="flex items-start">
            <span class="text-[#FFE37D] mr-3">•</span>
            <span>Mint your non-transferable NGT.</span>
          </li>
          <li class="flex items-start">
            <span class="text-[#FFE37D] mr-3">•</span>
            <span>Track your airdrop allocation.</span>
          </li>
          <li class="flex items-start">
            <span class="text-[#FFE37D] mr-3">•</span>
            <span>Claim vested NECTA after TGE.</span>
          </li>
        </ul>
      </div>

      <!-- Timer image -->
      <div class="flex-1 flex justify-center lg:justify-end">
        <img src={timer} alt="Timer" class="w-full max-w-[400px] lg:max-w-[600px] xl:max-w-[700px]" />
      </div>
    </div>
  </aside>

  <!-- Bonuses & Leaderboard Section -->
  <aside class="mt-16 lg:mt-24 relative rounded-2xl md:rounded-[40px] px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
    <!-- Background layers -->
    <div class="absolute inset-0 overflow-hidden rounded-2xl md:rounded-[40px]">
      <img src={SDBlur} alt="" class="w-full h-full object-cover" />
    </div>
    <div class="absolute inset-0 overflow-hidden rounded-2xl md:rounded-[40px]">
      <img src={beeNet1} class="w-full h-full object-cover mix-blend-overlay opacity-40" alt="" />
    </div>

    <div class="relative z-10">
      <h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium leading-[120%] text-center mb-12 lg:mb-16">
        <GradientText edgeOpacity={0.4}>Bonuses & Leaderboard</GradientText>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center">
            <img src={coins} alt="Coins" class="w-full h-full object-contain" />
          </div>
          <p class="text-sm lg:text-base leading-[140%]">
            Top Referrers: Earn extra NECTA<br />from referral pool
          </p>
        </div>

        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center">
            <img src={handCoins} alt="Hand with coins" class="w-full h-full object-contain" />
          </div>
          <p class="text-sm lg:text-base leading-[140%]">
            Top Task Completers: Ranked and<br />rewarded
          </p>
        </div>

        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center">
            <img src={users_up} alt="Users trending up" class="w-full h-full object-contain" />
          </div>
          <p class="text-sm lg:text-base leading-[140%]">
            Invite Bonus: Referrals boost<br />allocation (on-chain tracking)
          </p>
        </div>
      </div>
    </div>
  </aside>

  <!-- Campaign Timeline Section -->
  <aside class="mt-16 lg:mt-24 relative rounded-[20px] lg:rounded-[40px] px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
    <!-- Background decorative elements -->
    <img src={bee} alt="bee" class="absolute z-20 w-32 lg:w-52 hidden lg:block top-8 left-8" />
    <img src={bee} alt="bee" class="absolute z-20 scale-x-[-1] w-24 lg:w-36 hidden lg:block bottom-8 right-8" />

    <!-- Background layers -->
    <div class="absolute inset-0 overflow-hidden rounded-[20px] lg:rounded-[40px]">
      <img src={beeNet1} class="w-full h-full object-cover mix-blend-overlay opacity-30" alt="" />
    </div>
    <div class="absolute inset-0 overflow-hidden rounded-[20px] lg:rounded-[40px]">
      <img src={nectaCoinCurveBg} class="w-full h-full object-cover opacity-40" alt="" />
    </div>

    <div class="relative z-30 text-center space-y-8">
      <div class="inline-block rounded-lg px-4 py-2 text-sm bg-[#FFFFFF14] ring-1 ring-white/15 backdrop-blur-sm">
        One Token. Every Layer
      </div>

      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Campaign Timeline
      </h2>

      <p class="text-sm lg:text-base leading-[140%] max-w-4xl mx-auto">
        $NECTA coordinates value, access, and accountability across products, networks, and user types.
      </p>

      <!-- Timeline Table -->
      <div class="max-w-4xl mx-auto space-y-4">
        <!-- Header -->
        <div class="grid grid-cols-2 gap-2 lg:gap-4">
          <div class="bg-[#0C0801]/16 ring-1 ring-[#3B2C13]/15 rounded-lg lg:rounded-2xl p-3 lg:p-6 text-center">
            <span class="text-sm lg:text-xl font-medium text-white/80">Events</span>
          </div>
          <div class="bg-[#0C0801]/16 ring-1 ring-[#3B2C13]/15 rounded-lg lg:rounded-2xl p-3 lg:p-6 text-center">
            <span class="text-sm lg:text-xl font-medium text-white/80">Dates</span>
          </div>
        </div>

        <!-- Data rows -->
        {#each tokenomicsData as item, index}
          <div class="grid grid-cols-2 gap-2 lg:gap-4">
            <div class="bg-[#0C0801]/31 border border-[#3B2C13] rounded-lg lg:rounded-2xl p-3 lg:p-6 backdrop-blur-sm text-center">
              <span class="text-xs lg:text-lg text-white/80">{item.category}</span>
            </div>
            <div class="bg-[#0C0801]/31 border border-[#3B2C13] rounded-lg lg:rounded-2xl p-3 lg:p-6 backdrop-blur-sm text-center">
              <span class="text-xs lg:text-lg text-white/80">{item.notes}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </aside>

  <!-- Let's Grow Together Section -->
  <aside class="mt-16 lg:mt-24 relative rounded-2xl md:rounded-[40px] px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
    <!-- Background layers -->
    <div class="absolute inset-0 overflow-hidden rounded-2xl md:rounded-[40px]">
      <img src={SDBlur} alt="" class="w-full h-full object-cover" />
    </div>
    <div class="absolute inset-0 overflow-hidden rounded-2xl md:rounded-[40px]">
      <img src={beeNet1} class="w-full h-full object-cover mix-blend-overlay opacity-40" alt="" />
    </div>

    <div class="relative z-10">
      <h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium leading-[120%] text-center mb-12 lg:mb-16">
        <GradientText edgeOpacity={0.4}>Let's Grow Together!</GradientText>
      </h2>

      <!-- Features grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-20 h-16 lg:w-32 lg:h-24 flex items-center justify-center">
            <img src={user_up} alt="User trending up" class="w-full h-full object-contain" />
          </div>
          <p class="text-xs lg:text-base leading-[140%]">
            Weekly Leaderboard<br />highlights
          </p>
        </div>

        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-20 h-16 lg:w-32 lg:h-24 flex items-center justify-center">
            <img src={coins} alt="Coins" class="w-full h-full object-contain" />
          </div>
          <p class="text-xs lg:text-base leading-[140%]">
            Telegram AMAs &<br />community Q&As
          </p>
        </div>

        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-20 h-16 lg:w-32 lg:h-24 flex items-center justify-center">
            <img src={star} alt="Star" class="w-full h-full object-contain" />
          </div>
          <p class="text-xs lg:text-base leading-[140%]">
            Influencer campaigns &<br />micro-rewards
          </p>
        </div>

        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-20 h-16 lg:w-32 lg:h-24 flex items-center justify-center">
            <img src={line_chart} alt="Line chart" class="w-full h-full object-contain" />
          </div>
          <p class="text-xs lg:text-base leading-[140%]">
            Live tracker for total ETH<br />raised
          </p>
        </div>
      </div>

      <p class="text-base lg:text-xl text-center mb-12">
        Be early. Contribute. Get rewarded
      </p>

      <!-- Hero coins -->
      <div class="relative flex justify-center items-center min-h-[300px] lg:min-h-[400px]">
        <div class="absolute -top-8 -right-4 lg:-top-16 lg:-right-8 w-40 lg:w-80 -rotate-12 opacity-80">
          <img src={nectaHerocoin} class="w-full" alt="NECTA coin" />
        </div>
        <div class="absolute -bottom-8 -left-4 lg:-bottom-16 lg:-left-8 w-48 lg:w-96 rotate-12">
          <img src={nectaHerocoin} class="w-full" alt="NECTA coin" />
        </div>
      </div>

      <!-- Final CTA -->
      <div class="text-center space-y-6 mt-16">
        <h3 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[120%]">
          $NECTA is your access key to the Hive<br />
          <GradientText edgeOpacity={0.3}>Innovation Economy. Whether you're:</GradientText>
        </h3>
        
        <p class="text-lg lg:text-xl leading-[140%]">
          You earn through contribution, not speculation.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button class="px-6 py-3 bg-gradient-to-b from-white to-[#D7D3E0] text-[#0A0701] rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap">
            NECTA Genesis Protocol
          </button>
          <button class="px-6 py-3 text-white text-sm rounded-full ring-1 ring-white/15 bg-gradient-to-b from-[#FFFFFF40] to-[#C0BECD40] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap">
            Join Our Telegram
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom curve -->
    <div class="absolute bottom-0 left-0 w-full rotate-180 overflow-hidden">
      <img src={nectaCoinCurveBg} class="w-full h-auto object-cover" alt="" />
    </div>
  </aside>

  <Footer />
</section>

<Modal isOpen={showModal} on:close={closeModal} />
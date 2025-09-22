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

<section class="bg-black text-white font-['Satoshi'] h-full pb-5">
  <div class="max-w-6xl mx-auto bg-[#0A0701] px-6 sm:px-8 lg:px-8">

  <NavBar />
  <aside class="h-[100dvh] flex items-center relative rounded-[20px] lg:rounded-b-[40px]">
    <div class="absolute right-0 h-[100dvh] w-[100%] lg:w-[60%]">
      <video class="object-cover w-full h-full" autoplay loop muted playsinline>
        <source src={nectaCoinVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div
      class="absolute w-full bottom-0 h-full bg-gradient-to-b from-transparent via-[#0A070140] to-[#0A0701] lg:hidden"
    ></div>

    <div
      class="absolute hidden lg:block right-0 top-0 h-[100dvh] w-[60%] rounded-t-[12px] bg-gradient-to-t from-[#0A0701] via-[#0A070180] via-85% to-transparent"
    ></div>

    <div
      class="absolute hidden lg:block right-0 top-0 h-[100dvh] w-[60%] rounded-t-[12px] bg-gradient-to-r from-[#0A0701CC] via-[#0A070160] via-70% to-transparent"
    ></div>

    <div
      class="absolute bottom-0 scale-x-[-1] left-0 w-full h-fit rounded-t-[40px] overflow-hidden"
    >
      <img src={bottomWax1} class="object-cover w-full h-full" alt="" />
    </div>

    <!-- Content Section -->
    <div class="z-10 px-4">
      <div class="h-full pb-[10%]">
        <h1
          use:fadeIn={{ delay: 100, direction: 'down', offset: 40, duration: 600 }}
          class="lg:text-[45px] font-[700] text-[38.66px] bg-gradient-to-r from-[#D3D0C8] to-[#FFFFFF] bg-clip-text text-transparent leading-[120%] tracking-[0%]"
        >
          NECTA Genesis Protocol
          <br />
          Early Access Airdrop
        </h1>
        <p
          use:fadeIn={{ delay: 400, direction: 'in', duration: 600 }}
          class="text-[14px] lg:text-[20px] leading-[140%] mt-[14px] text-white mb-8"
        >
          Get early access to NECTA by minting a NECTA Genesis Token (NGT) — a<br />
          voucher for $NECTA airdrops. Legacy Dockhive users can convert old<br />
          assets. New users can complete tasks to mint their NGT and join the ecosystem.
        </p>

        <button
          on:click={openModal}
          use:fadeIn={{ delay: 500, direction: 'in', duration: 600 }}
          class="h-[44px] cursor-pointer rounded-[40px] bg-gradient-to-b from-[#FFE37D] to-[#FF9809] px-[30px] text-[14px] leading-[120%] font-medium tracking-[0%] text-[#0A0701] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg lg:h-[52px] lg:px-[40px] lg:text-[16px]"
        >
          Whitelist Your Wallet
        </button>
      </div>
    </div>
  </aside>

  <aside class="mt-10 lg:mt-16 relative rounded-2xl md:rounded-[40px]">
    <p
      class="text-[23px] sm:text-[23px] lg:text-[36px] font-[500] leading-[120%] text-center mb-8 lg:mb-16"
    >
      <GradientText edgeOpacity={0.3}>Who Can Participate?</GradientText>
    </p>

    <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
      <!-- Legacy Users -->
      <div class="flex-1 flex flex-col items-center">
        <div class="relative mb-6">
          <img
            src={pillars}
            alt=""
            class="grayscale w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] xl:max-w-[356px]"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0701]"></div>
        </div>
        <div class="w-full max-w-md text-center lg:text-left">
          <h3 class="text-[20px] lg:text-[24px] font-[500] mb-4">Legacy Users:</h3>
          <ul
            class="text-[16px] lg:text-[18px] text-[#FFFFFFCC] leading-[140%] space-y-2 text-left"
          >
            <li class="flex items-start">
              <span class="text-[#FFFFFFCC] mr-2">•</span>
              <span>Convert old DHT tokens or Dockhive NFTs Mint your NGT to claim</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#FFFFFFCC] mr-2">•</span>
              <span>1 DHT = 4 NECTA • NFT = Bonus based on rarity</span>
            </li>
            <li class="flex items-start">
              <span class="text-[#FFFFFFCC] mr-2">•</span>
              <span>future NECTA allocation</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="hidden lg:block w-px bg-[#362E21]"></div>

      <div class="flex-1 flex flex-col items-center">
        <div class="relative mb-6">
          <img
            src={slab}
            alt=""
            class="grayscale w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] xl:max-w-[356px]"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0701]"></div>
        </div>
        <div class="w-full max-w-md text-center lg:text-left">
          <h3 class="text-[20px] lg:text-[24px] font-[500] mb-4">New Users</h3>
          <ul
            class="text-[16px] lg:text-[18px] text-[#FFFFFFCC] leading-[140%] space-y-2 text-left"
          >
            <li class="flex items-start">
              <span class="text-[#FFFFFFCC] mr-2">•</span>
              <div>
                <strong>Complete quests:</strong>
                <ul class="mt-1 ml-4 space-y-1">
                  <li class="flex items-start">
                    <span class="text-[#FFFFFFCC] mr-2 text-xs">-</span>
                    <span>Follow Hive projects on Twitter.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-[#FFFFFFCC] mr-2 text-xs">-</span>
                    <span>Join Telegram & Discord.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-[#FFFFFFCC] mr-2 text-xs">-</span>
                    <span>Repost the pinned tweet.</span>
                  </li>
                </ul>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-[#FFFFFFCC] mr-2">•</span>
              <span>Mint your NGT for a NECTA airdrop (vested).</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>

  <aside
    class="mt-16 lg:mt-24 overflow-hidden relative rounded-[20px] lg:rounded-[40px] px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
  >
    <div class="absolute top-0 z-10 left-0 w-full h-[100%] rounded-t-[40px] overflow-hidden">
      <img src={beeNet1} class="object-cover w-full h-full mix-blend-overlay" alt="" />
    </div>

    <div class="absolute top-0 lg:-top-[17px] left-0 w-full h-fit rounded-t-[40px] overflow-hidden">
      <img src={secondBlur} class="object-cover w-full h-fit" alt="" />
    </div>
    <div class="absolute top-0 lg:-top-[72px] left-0 w-full h-fit rounded-t-[40px] overflow-hidden">
      <img src={nectaCoinCurveBg} class="object-cover w-full h-fit" alt="" />
    </div>

    <div class="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div class="flex-1 space-y-6">
        <div
          class="inline-block rounded-lg px-4 py-2 text-[14px] text-[#FFFFFF] bg-[#FFFFFF14] ring-1 ring-white/15 backdrop-blur-sm"
        >
          One Token. Every Layer.
        </div>

        <h2 class="text-[23px] text-[#FFFFFF] lg:text-[36px] font-normal leading-[120%]">
          <GradientText edgeOpacity={0.5}>
            NECTA Token —
            <br /> The Convergent Fuel of the Hive
          </GradientText>
        </h2>

        <p class="text-[16px] lg:text-[18px] leading-[140%] text-[#FFFFFF]">
          Total Campaign Allocation: 0.5% of NECTA Supply (~3,087,000 NOT)<br />
          Vesting: 6-month cliff • 12-month linear
        </p>

        <ul class="text-[16px] text-[#FFFFFFB2] lg:text-[18px] leading-[140%] space-y-3 ml-4">
          <li class="flex items-start">
            <span class="text-[#FFFFFFCC] mr-3">•</span>
            <span>Complete all tasks.</span>
          </li>
          <li class="flex items-start">
            <span class="text-[#FFFFFFCC] mr-3">•</span>
            <span>Mint your non-transferable NGT.</span>
          </li>
          <li class="flex items-start">
            <span class="text-[#FFFFFFCC] mr-3">•</span>
            <span>Track your airdrop allocation.</span>
          </li>
          <li class="flex items-start">
            <span class="text-[#FFFFFFCC] mr-3">•</span>
            <span>Claim vested NECTA after TGE.</span>
          </li>
        </ul>
      </div>

      <div class="flex-1 flex justify-center lg:justify-end">
        <img
          src={timer}
          alt="Timer"
          class="w-full max-w-[400px] lg:max-w-[600px] xl:max-w-[700px]"
        />
      </div>
    </div>
  </aside>

  <aside
    class="mt-16 lg:mt-24 relative rounded-2xl md:rounded-[40px] px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
  >
    <div
      class="absolute top-0 left-0 w-full h-full"
      style="background-image: linear-gradient(to bottom, #0A070100, #0A0701, #0A0701,#0A0701) 1; "
    ></div>

    <div class="absolute top-0 -left-1 right w-full h-full pointer-events-none overflow-hidden">
      <img src={SDBlur} alt="" class="object-fill rounded-2xl md:rounded-[40px] w-full" />
    </div>
    <div class="absolute top-0 z-10 left-0 w-full lg:h-full rounded-t-[40px] overflow-hidden">
      <img
        src={beeNet1}
        class="object-contain lg:object-cover w-full h-full mix-blend-overlay"
        alt=""
      />
    </div>

    <div class="relative z-10">
      <h2
        class="text-[23px] lg:text-[36px] xl:text-[36px] font-[500] text-[#FFFFFF] leading-[120%] text-center mb-12 lg:mb-16"
      >
        <GradientText edgeOpacity={0.4}>Bonuses & Leaderboard</GradientText>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-[62px] h-[62px] lg:w-[62px] lg:h-[62px] flex items-center justify-center">
            <img src={coins} alt="Coins" class="w-full h-full object-contain" />
          </div>
          <p class="text-[16px] lg:text-[18px] text-[#FFFFFF] leading-[140%]">
            Top Referrers: Earn extra NECTA<br />from referral pool
          </p>
        </div>

        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-[62px] h-[62px] lg:w-[62px] lg:h-[62px] flex items-center justify-center">
            <img src={handCoins} alt="Hand with coins" class="w-full h-full object-contain" />
          </div>
          <p class="text-[16px] lg:text-[18px] text-[#FFFFFF] leading-[140%]">
            Top Task Completers: Ranked and<br />rewarded
          </p>
        </div>

        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-[62px] h-[62px] lg:w-[62px] lg:h-[62px] flex items-center justify-center">
            <img src={users_up} alt="Users trending up" class="w-full h-full object-contain" />
          </div>
          <p class="text-[16px] lg:text-[18px] text-[#FFFFFF] leading-[140%]">
            Invite Bonus: Referrals boost<br />allocation (on-chain tracking)
          </p>
        </div>
      </div>
    </div>
  </aside>

  <aside
    class="mt-16 lg:mt-24 relative rounded-[20px] lg:rounded-[40px] px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
  >
    <img src={bee} alt="bee" class="absolute z-20 w-32 lg:w-52 hidden lg:block top-8 left-8" />
    <img
      src={bee}
      alt="bee"
      class="absolute z-20 scale-x-[-1] w-24 lg:w-36 hidden lg:block bottom-8 right-8"
    />

    <div
      class="absolute top-0 left-0 w-full h-full rounded-[20px] lg:rounded-[40px] overflow-hidden z-0"
    >
      <img src={beeNet1} class="object-cover w-full z-20 h-[100%] mix-blxend-overlay" alt="" />
    </div>
    <div
      class="absolute top-0 left-0 w-full h-fit rounded-[20px] lg:rounded-[40px] overflow-hidden z-0"
    >
      <img src={nectaCoinCurveBg} class="object-cover w-full h-full" alt="" />
    </div>

    <div class="relative z-30 text-center space-y-8">
      <div class="space-y-3">
        <div
        class="inline-block rounded-lg px-4 py-2 text-sm bg-[#FFFFFF14] ring-1 ring-white/15 backdrop-blur-sm"
        >
        One Token. Every Layer
      </div>
      
      <h2 class="text-[23px] lg:text-[36px] font-[500] text-[#FFFFFF]">Campaign Timeline</h2>
      
      <p class="text-[16px] lg:text-[18px] text-[#FFFFFF] font-[500] leading-[140%] max-w-4xl mx-auto">
        $NECTA coordinates value, access, and accountability across products, networks, and user
        types.
      </p>
    </div>
      
      <!-- Timeline Table -->
      <div class="max-w-3xl  mx-auto space-y-4">
        <!-- Header -->
        <div class="grid grid-cols-2 gap-2 lg:gap-2">
          <div
            class="bg-[#0C0801]/16 flex justify-center items-center border-[1px] border-[#3B2C132B] rounded-lg lg:rounded-2xl mx-auto lg:w-[360px] w-full lg:h-[74px] py-[16px] lg:py-0   text-center"
          >
            <span class="text-[18px] lg:text-[21px] font-[500] text-[#FFFFFF]">Events</span>
          </div>
          <div
            class="bg-[#0C0801]/16 border-[1px] justify-center items-center flex border-[#3B2C132B] rounded-lg lg:rounded-2xl mx-auto lg:w-[360px] w-full lg:h-[74px] py-[16px] lg:py-0   text-center"
          >
            <span class="text-[18px] lg:text-[21px] font-[500] text-[#FFFFFF]">Dates</span>
          </div>
        </div>

        <!-- Data rows -->
        {#each tokenomicsData as item, index}
          <div class="grid grid-cols-2 gap-2 lg:gap-4">
            <div
              class="bg-[#0C0801]/31 border border-[#3B2C13] rounded-lg lg:rounded-2xl justify-center items-center flex mx-auto lg:w-[360px] lg:h-[74px] w-full py-[16px] lg:py-0 backdrop-blur-sm text-center"
            >
              <span class="text-[16px] lg:text-[18px] font-[400] text-[#FFFFFFCC]">{item.category}</span>
            </div>
            <div
              class="bg-[#0C0801]/31 border border-[#3B2C13] rounded-lg lg:rounded-2xl justify-center items-center flex mx-auto lg:w-[360px] lg:h-[74px] w-full py-[16px] lg:py-0 backdrop-blur-sm text-center"
            >
              <span class="text-[16px] lg:text-[18px] font-[400]g text-[#FFFFFFCC]">{item.notes}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </aside>

  <aside
    class="lg:mt-[120px] lg:pr-8 lg:pb-30 flex overflow-hidden flex-col items-center pb-8 lg:px-20 relative rounded-2xl md:rounded-[40px] border-t-1 border-transparent"
    style="border-image: linear-gradient(to right, #FFE37D00, #FFE37D00, #FFE37D, #FFE37D00, #FFE37D00) 1; "
  >
    <div
      class="absolute top-0 left-0 w-full h-full"
      style="background-image: linear-gradient(to bottom, #0A070100, #0A0701, #0A0701,#0A0701) 1; "
    ></div>

    <div class="absolute top-0 -left-1 right w-full h-full pointer-events-none overflow-hidden">
      <img src={SDBlur} alt="" class="object-fill rounded-2xl md:rounded-[40px] w-full" />
    </div>
    <div class="absolute top-0 z-10 left-0 w-full lg:h-full rounded-t-[40px] overflow-hidden">
      <img
        src={beeNet1}
        class="object-contain lg:object-cover w-full h-full mix-blend-overlay"
        alt=""
      />
    </div>
    <p
      class="text-[16px] md:text-[36px] w-full lg:mt-[67px] mt-[50px] font-[#FFFFFF] font-[500] leading-[120%] text-center"
    >
      <GradientText edgeOpacity={0.4}>Let's Grow Together!</GradientText>
    </p>

    <div
      class="grid w-full lg:w-fit my-8 grid-cols-2 gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-4"
    >
      <div
        use:fadeIn={{ delay: 200, direction: 'in', duration: 700 }}
        class=" flex items-center flex-col gap-2"
      >
        <div class="w-[62px] h-[62px] flex items-center justify-center">
          <img src={user_up} alt="w-full h-full" />
        </div>
        <p class="text-[16px] lg:text-[18px] text-center font-[400] leading-[140%]">
          Weekly Leaderboard <br /> highlights
        </p>
      </div>

      <div
        use:fadeIn={{ delay: 300, direction: 'in', duration: 700 }}
        class=" flex items-center flex-col gap-2"
      >
        <div class="w-[62px] h-[62px] flex items-center justify-center">
          <img src={coins} alt="w-full h-full" />
        </div>
        <p class="text-[16px] lg:text-[18px] text-center font-[400] leading-[140%]">
          Telegram AMAs & <br /> community Q&As
        </p>
      </div>

      <div
        use:fadeIn={{ delay: 400, direction: 'in', duration: 700 }}
        class=" flex items-center flex-col gap-2"
      >
        <div class="w-[62px] h-[62px] flex items-center justify-center">
          <img src={star} alt="w-full h-full" />
        </div>
        <p class="text-[16px] lg:text-[18px] text-center font-[400] leading-[140%]">
          Influencer campaigns & <br /> micro-rewards
        </p>
      </div>

      <div
        use:fadeIn={{ delay: 500, direction: 'in', duration: 700 }}
        class=" flex items-center flex-col gap-2"
      >
        <div class="w-[62px] h-[62px] flex items-center justify-center">
          <img src={line_chart} alt="w-full h-full" />
        </div>
        <p class="text-[16px] lg:text-[18px] text-center font-[400] leading-[140%]">
          Live tracker for total ETH <br /> raised
        </p>
      </div>
    </div>

    <p
      use:fadeIn={{ delay: 700, direction: 'up', duration: 700 }}
      class="text-[16px] mb-10 lg:text-[24px] w-full text-[#FFFFFF] font-[400] mt-10 lg:mt-[67px] leading-[140%] text-center"
    >
      Be early. Contribute. Get rewarded
    </p>

    <div class="absolute bottom-6 right-4 hidden lg:block w-fit -rotate-[17.98deg]">
      <img src={nectaHerocoin} class=" h-[194px] max-w-[367px]" alt="" />
      <div
        class="absolute bg-gradient-to-b w-full from-[#0A070100] bottom-0 h-full to-[#0A0701]/50 block md:hidden"
      ></div>
    </div>
    <div
      class="absolute bottom-0 rotate-180 z-10 left-0 w-full h-fit rounded-t-[40px] overflow-hidden"
    >
      <img src={nectaCoinCurveBg} class="object-cover w-full h-full" alt="" />
    </div>

    <div class="lg:absolute my-18 lg:mt-0 lg:bottom-1/4 mt-20 lg:left-4 w-fit rotate-[17.74deg]">
      <img src={nectaHerocoin} class="md:max-w-[584.1px] lg:h-[300px] max-w-[402.89px]" alt="" />
      <div
        class="absolute bg-gradient-to-b w-full from-[#0A070100] bottom-0 h-full to-[#0A0701]/50 block md:hidden"
      ></div>
    </div>

    <div class=" lg:mt-[323px] text-center flex items-center gap-6 py-3 flex-col w-full z-20">
      <p
        use:fadeIn={{ delay: 150, direction: 'down', offset: 20, duration: 400 }}
        class="text-[32px] lg:text-[48px] leading-[120%] font-[700]"
      >
        $NECTA is your access key to the Hive <br />
        <GradientText edgeOpacity={0.3}>Innovation Economy. Whether you're:</GradientText>
      </p>
      <p
        use:fadeIn={{ delay: 300, direction: 'down', offset: 10, duration: 400 }}
        class="text-[20px] lg:text-[24px] font-[400] leading-[140%]"
      >
        You earn through contribution, not speculation.
      </p>
      <div
        use:fadeIn={{ delay: 500, direction: 'in', duration: 600 }}
        class="flex px-3 lg:px-0 md:flex-row justify-center w-full flex-col gap-2 md:gap-3"
      >
        <button
          class="bg-gradient-to-b from-white to-[#D7D3E0] cursor-pointer text-(--necta-cod) font-[500] px-6 py-3 rounded-full text-[16px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
        >
          NECTA Genesis Protocol
        </button>
        <div
          class="text-white text-[16px] px-6 font-[500] cursor-pointer py-3 rounded-full tracing-[2%] ring-1 ring-white/[0.15] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.05)] bg-gradient-to-b from-[#FFFFFF40] bg-[#C0BECD40] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
        >
          Join Our Telegram
        </div>
      </div>
    </div>
  </aside>
  <Footer />
</div>
</section>

<Modal isOpen={showModal} on:close={closeModal} />

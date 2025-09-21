<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import heroWave from '$lib/assets/NECTER waves.mp4';
  import heroWavePlaceholder from '$lib/assets/hero-wave-placeholder.png';
  import heroRectangle1 from '$lib/assets/Rectangle 1.svg';
  import heroRectangle2 from '$lib/assets/Rectangle 2.svg';
  import heroVideo2 from '$lib/assets/hero_video_2.mp4';
  import beeNet1 from '$lib/assets/bee-net1.svg';
  import bottomWax1 from '$lib/assets/bottom-wax1.svg';
  import nectaCoinCurveBg from '$lib/assets/necta-coin-bg-curve.svg';
  import nectaHerocoin from '$lib/assets/necta-coin-hero.png';
  import computePaymentImage from '$lib/assets/compute-payments.png';
  import aiAgentMonitizationImage from '$lib/assets/ai-agent-monitization.png';
  import dataVaultImage from '$lib/assets/data-vault.png';
  import deviceStakingImage from '$lib/assets/device-staking.png';
  import decentralizedGovernanceImage from '$lib/assets/decentralized-governance.png';
  import cpsImage from '$lib/assets/cps-image.png';
  import nectaCoinVideo from '$lib/assets/necta-coin-video.mp4';
  import SDBlur from '$lib/assets/system-design-blur.svg';
  import nectaWall from '$lib/assets/necta-architecture-wall.png';
  import nectaBrick from '$lib/assets/necta-contract-bricks.png';
  import bee from '$lib/assets/bee.png';
  import rubixBox from '$lib/assets/rubix-box.svg';
  import secondBlur from '$lib/assets/second-blur.svg';
  import GradientText from '$lib/components/GradientText.svelte';
  import { fadeIn, parallax } from '$lib/components/animations/animations.js';
  import Modal from '$lib/components/Modal.svelte';

  const features = [
    {
      image: computePaymentImage,
      title: 'Compute Payments',
    },
    {
      image: aiAgentMonitizationImage,
      title: 'AI Agent Microtransactions & Customization',
    },
    {
      image: dataVaultImage,
      title: 'Data Vault Access & Monetization',
    },
    {
      image: deviceStakingImage,
      title: 'Device Staking & Node Validation',
    },
    {
      image: decentralizedGovernanceImage,
      title: 'Decentralized Governance & Upgrades',
    },
    {
      image: cpsImage,
      title: 'Cross-product Synergy & Identity Layer',
    },
  ];

  const tokenomicsData = [
    {
      category: 'Mining Reserve',
      percentage: '65%',
      notes: 'Proof-Of-Contribution Release',
    },
    {
      category: 'Ecosystem Incentives',
      percentage: '15%',
      notes: 'Early Users, Bounties',
    },
    {
      category: 'Liquidity Provision',
      percentage: '4.6%',
      notes: 'CEX, DEX, LPs',
    },
    {
      category: 'Public Listing',
      percentage: '0.4%',
      notes: 'Launch Price: $0.20',
    },
    {
      category: 'Presale',
      percentage: '3.24%',
      notes: 'Price: $0.05, 6m Cliff + 12m Linear',
    },
    {
      category: 'Founding Team',
      percentage: '1%',
      notes: '4-Year Vesting',
    },
    {
      category: 'Hive Treasury',
      percentage: '10%',
      notes: 'Grants, Dev Support',
    },
    {
      category: 'DAO Reserve',
      percentage: '0.76%',
      notes: 'Contingency & Upgrades',
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

<section
  class="px-6 font-['Satoshi'] sm:px-6 md:px-8 lg:px-36 xl:px-36 bg-black 2xl:px-40"
>
  <div class="text-white pb-5 lg:px-7 font-light flex flex-col gap-9 bg-[#0A0701] h-full">
    <NavBar button_link="/protocol" />

    <aside class="rounded-[20px] h-screen lg:rounded-b-[40px] relative">
      <video
        class="absolute top-0 rounded-b-[40px] left-0 w-full h-screen object-cover"
        autoplay
        loop
        muted
        playsinline
        poster={heroWavePlaceholder}
      >
        <source src={heroWave} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Gradient overlays -->
      <div
        class="absolute bottom-0 left-0 w-full h-[full] rounded-b-[40px] pointer-events-none overflow-hidden"
      >
        <img src={heroRectangle1} alt="" class="object-cover w-full h-full" />
      </div>
      <div
        class="absolute bottom-0 left-0 w-full h-full rounded-b-[40px] pointer-events-none overflow-hidden"
      >
        <img src={heroRectangle2} alt="" class="object-cover w-full h-full" />
      </div>

      <div class="absolute bottom-0 inset-x-0 z-10 text-center px-4">
        <div class="h-full pb-[10%]">
          <h1
            use:fadeIn={{ delay: 100, direction: 'down', duration: 600 }}
            class="lg:text-[58px] text-[38.66px] font-[700] bg-gradient-to-r from-[#D3D0C8] to-[#FFFFFF] bg-clip-text text-transparent leading-[120%] tracking-[0%]"
          >
            Necter Network:
            <br />
            Powering Decentralized Intelligence
          </h1>
          <p
            use:fadeIn={{ delay: 300, direction: 'in', duration: 600 }}
            class="text-[14px] lg:text-[20px] font-['Figtree'] leading-[100%] font-[400] mt-[14px] text-[#FFFFFFD9] mb-8"
          >
            A Modular Blockchain for DePIN, AI Agents, IoT, and Data Sovereignty
          </p>
          <button
            on:click={openModal}
            use:fadeIn={{ delay: 500, direction: 'in', duration: 600 }}
            class="text-[13.45px] px-[30px] bg-gradient-to-b font-[500] from-white cursor-pointer to-[#D7D3E0] md:lg:text-[16px] lg:text-[16px] leading-[120%] tracking-[0%] py-[14px] text-[#0A0701] rounded-[40px] h-[47px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Download Whitepaper
          </button>
        </div>
      </div>
    </aside>

    <aside class="grid py-[100px] w-full lg:grid-cols-2 gap-5 items-center justify-between">
      <div
        use:fadeIn={{ delay: 150, direction: 'left', offset: 60 }}
        class="flex w-full flex-col gap-4"
      >
        <div
          class="flex items-center w-fit justify-center rounded-lg px-3 text-[#FFFFFF] h-[30px] text-[14px] leading-[120%] font-[400] tracking-[2%] ring ring-white/[0.15] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.05)] bg-[#FFFFFF14]"
        >
          Built for Developers
        </div>

        <div class="flex flex-col gap-6">
          <GradientText edgeOpacity={0.4}>
            <p
              class="text-[22px] md:text-[25px] text-[#FFFFFF] lg:text-[25px] leading-[120%] font-[500] tracking-[0%]"
            >
              NECTER is a next-gen modular blockchain built to decentralize physical infrastructure,
              AI-native economies, data, IoT, and hardware staking.
            </p>
          </GradientText>
          <p class="text-[14px] md:text-[18px] lg:text-[18px] font-[300] leading-[140%]">
            From edge devices to autonomous AI agents, NECTER provides the programmable
            infrastructure for a smarter, user-owned internet — optimized for compute, bandwidth,
            identity, and privacy.
            <br /> <br />
            NECTER Network is where hardware meets intelligence, and where every contribution — whether
            data, compute, or training — is rewarded through a convergent economic model.
          </p>
        </div>
      </div>

      <div
        use:fadeIn={{ delay: 300, direction: 'in', offset: 60 }}
        class="flex relative justify-center w-full lg:justify-end"
      >
        <video class="h-[537px] w-[585px]" autoplay loop muted playsinline>
          <source src={heroVideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          class="absolute inset-0 pointer-events-none"
          style="
          background: radial-gradient(
        circle at center,
        transparent 0%,
        #0A0701 75%,
        #0A0701 100%
      );
  "
        ></div>
      </div>
    </aside>
    <aside
      class="relative overflow-hidden px-4 lg:px-8 text-center lg:h-[1165px] py-10 lg:py-28 rounded-[20px] lg:rounded-[40px] flex justify-center flex-col gap-5 items-center"
    >
      <div
        class="absolute -top-[236px] z-10 left-0 w-full h-[100%] rounded-t-[40px] overflow-hidden"
      >
        <img src={beeNet1} class="object-cover w-full h-full mix-blend-overlay" alt="" />
      </div>
      <div
        class="absolute top-0 lg:-top-[17px] left-0 w-full h-fit rounded-t-[40px] overflow-hidden"
      >
        <img src={secondBlur} class="object-cover w-full h-fit" alt="" />
      </div>
      <div
        class="absolute top-0 lg:-top-[72px] left-0 w-full h-fit rounded-t-[40px] overflow-hidden"
      >
        <img src={nectaCoinCurveBg} class="object-cover relative lg:top-16 w-full h-fit" alt="" />
      </div>
      <div class="absolute bottom-0 left-0 w-full h-fit rounded-t-[40px] overflow-hidden">
        <img src={bottomWax1} class="object-cover w-full h-full" alt="" />
      </div>

      <div class="flex flex-col items-center gap-6">
        <div
          use:fadeIn={{ delay: 100, direction: 'up', duration: 300 }}
          class="rounded-lg px-3 w-fit py-[10px] text-white text-[14px] leading-[120%] tracing-[2%] ring-1 ring-white/[0.15] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.05)] bg-[#FFFFFF14]"
        >
          One Token. Every Layer
        </div>

        <div use:fadeIn={{ delay: 200, direction: 'up', duration: 500 }} class="text-center">
          <GradientText edgeOpacity={0.1}>
            <p class="text-[28px] md:text-[36px] max-w-[608px] font-medium leading-[120%]">
              NECTA Token — <br /> The Convergent Fuel of the Hive
            </p>
          </GradientText>
        </div>

        <p
          use:fadeIn={{ delay: 400, direction: 'up', duration: 500 }}
          class="text-[16px] md:text-[18px] leading-[140%] font-[300] max-w-[343px] md:max-w-[855px] text-center"
        >
          $NECTA (NCT) is the native utility, governance, and incentive token powering every corner
          of the NECTER ecosystem. From running compute nodes in Dockhive to deploying intelligent
          agents on TIWA. $NECTA coordinates value, access, and accountability across products,
          networks, and user types.
        </p>
      </div>
      <img
        src={nectaHerocoin}
        class="lg:max-w-[968.71px] lg:h-[512px] max-w-[448.98px] !my-[30px]"
        alt=""
      />
      <div
        class="grid w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4 lg:gap-3"
      >
        {#each features as feature, index}
          <div
            use:fadeIn={{ delay: 200 + index * 100, direction: 'in', duration: 700 }}
            class="flex flex-col items-center text-center min-h-[140px] group"
          >
            <div
              class="w-full max-w-[80px] md:max-w-[100px] lg:max-w-[120px] mb-3 transition-transform duration-300 group-hover:scale-105"
            >
              <img
                src={feature.image}
                alt={feature.title}
                class="w-[97px] h-[97px] object-contain drop-shadow-lg mx-auto"
              />
            </div>
            <h3
              class="text-white text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px] font-[300] leading-[120%] max-w-full overflow-hidden"
            >
              {feature.title}
            </h3>
          </div>
        {/each}
      </div>
    </aside>

    <aside class="px-4 sm:px-6 lg:px-16 pb-32 mt-[60px] lg:mt-[67px] relative">
      <video
        class="rounded-t-[12px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px] xl:max-h-[681px] object-cover"
        autoplay
        loop
        muted
        playsinline
      >
        <source src={nectaCoinVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        class="absolute w-full bg-gradient-to-b from-[#0A070100] left-0 bottom-0 h-full to-[#0A0701]"
      ></div>
      <div
        class="absolute px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24  left-0 -lg:bottom-16 sm:-bottom-20 md:-bottom-24 flex w-full gap-4 md:gap-6 lg:gap-8 items-start justify-between flex-col lg:flex-row"
      >
        <div
          use:fadeIn={{ delay: 200, direction: 'right', duration: 500 }}
          class="font-kode text-[#FFFFFF] mx-auto text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] w-full leading-[140%] md:max-w-[527px] lg:max-w-[527px] mb-4 md:mb-0"
        >
          Inspired by <span class="font-semibold">Kaprekar's 6174</span> and
          <span class="font-semibold"> honeycomb modularity</span>, NECTA enforces sustainable token
          flow through staking, contribution-based mining, burn-to-use logic, and dynamic supply
          locking.
        </div>

        <div
          use:fadeIn={{ delay: 200, direction: 'left', duration: 500 }}
          class="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] font-kode w-full flex flex-col lg:items-end leading-[140%] text-white"
        >
          <div class="flex mx-auto flex-row gap-2 sm:gap-4 md:gap-1">
            <div class="space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-[#FFE37D] lg:text-white text-[14px] font-[400]">Token Name</span>
                <div
                  class="flex-1 border-b border-dot md:w-40ted w-10 lg:w-30 border-[#FFE37D] lg:border-white mx-2"
                ></div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-[#FFE37D] lg:text-white text-[14px] font-[400]">Ticker</span>
                <div
                  class="flex-1 border-b border-dotted w-10 md:w-40 lg:w-30 border-[#FFE37D] lg:border-white mx-2"
                ></div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-[#FFE37D] lg:text-white text-[14px] font-[400]">Total Supply</span
                >
                <div
                  class="flex-1 border-b border-dotted w-10 md:w-40 lg:w-30 border-[#FFE37D] lg:border-white mx-2"
                ></div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-[#FFE37D] lg:text-white text-[14px] font-[400]">Token Type</span>
                <div
                  class="flex-1 border-b border-dotted w-10 md:w-40 lg:w-30 border-[#FFE37D] lg:border-white mx-2"
                ></div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-[#FFE37D] lg:text-white text-[14px] font-[400]"
                  >Initial Network</span
                >
                <div
                  class="flex-1 border-b border-dotted w-10 md:w-40 lg:w-30 border-[#FFE37D] lg:border-white mx-2"
                ></div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-[#FFE37D] lg:text-white text-[14px] font-[400]">Migration</span>
                <div
                  class="flex-1 border-b border-dotted w-10 md:w-40 lg:w-30 border-[#FFE37D] lg:border-white mx-2"
                ></div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-[#FFE37D] lg:text-white text-[14px] font-[400]">Governance</span>
                <div
                  class="flex-1 border-b border-dotted w-10 md:w-40 lg:w-30 border-[#FFE37D] lg:border-white mx-2"
                ></div>
              </div>
            </div>
            <div class="space-y-1 text-white text-[14px] font-[400] min-w-fit">
              <div class="flex items-center text-white text-[14px] font-[400]">
                <span>NECTA</span>
              </div>
              <div class="flex items-center text-white text-[14px] font-[400]">
                <span>NCT</span>
              </div>
              <div class="flex items-center text-white text-[14px] font-[400]">
                <span>617,400,000</span>
              </div>
              <div class="flex items-center text-white text-[14px] font-[400]">
                <span>Utility + Governance</span>
              </div>
              <div class="flex items-center text-white text-[14px] font-[400]">
                <span>Base</span>
              </div>
              <div class="flex items-center text-white text-[14px] font-[400]">
                <span>NECTAR Native Chain (2026)</span>
              </div>
              <div class="flex items-center text-white text-[14px] font-[400]">
                <span>DAO-enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <aside
      class="mt-32 lg:mt-[200px] relative rounded-2xl md:rounded-[40px] border-t-1 border-transparent"
      style="border-image: linear-gradient(to right, #FFE37D00, #FFE37D00, #FFE37D, #FFE37D00, #FFE37D00) 1; "
    >
      <div
        class="absolute top-0 left-0 w-full h-full"
        style="background-image: linear-gradient(to bottom, #0A070100, #0A0701, #0A0701,#0A0701) 1; "
      ></div>
      <div class="absolute top-0 -left-1 right w-full h-full pointer-events-none overflow-hidden">
        <img src={SDBlur} alt="" class="object-fill rounded-2xl md:rounded-[40px] w-full" />
      </div>
      <div class="absolute top-0 z-10 left-0 w-full h-full rounded-t-[40px] overflow-hidden">
        <img src={beeNet1} class="object-fill w-full h-full mix-blend-overlay" alt="" />
      </div>
      <div class="w-full flex justify-center">
        <GradientText edgeOpacity={0.2}>
          <p
            class="text-[30px] w-58 lg:text-[36px] lg:w-full lg:mt-[67px] mt-[50px] font-medium leading-[120%] text-center"
          >
            System Design & Architecture
          </p>
        </GradientText>
      </div>

      <div
        class="mt-[40px] lg:mt-[133px] flex flex-col lg:flex-row gap-[45px] justify-between px-4 md:px-20"
      >
        <div class="pt-[14px] flex flex-col items-center flex-1">
          <div class="relative h-fit">
            <img src={nectaWall} alt="" class="grayscale-100 max-w-[176.98px] md:max-w-[356px]" />
            <div
              class="absolute w-full max-w-[176.98px] md:max-w-[356px] bg-gradient-to-b from-[#0A070100] top-0 h-[100%] to-[#0A0701]"
            ></div>
          </div>
          <div class="flex flex-col w-full px-4 gap-4">
            <p class="text-[11.91px] lg:text-[24px] leading-[120%] font-medium">
              NECTA's architecture is:
            </p>
            <ul class="ml-6 list-disc text-[#FFFFFFCC] text-[8px] lg:text-[18px] leading-[140%]">
              <li>Modular: Like a honeycomb – every project is a functional cell</li>
              <li>Convergent: Like 6174 – flows naturally into equilibrium</li>
              <li>Governed: DAO-enabled + burn-and-lock mechanisms for control</li>
              <li>Scalable: Multi-chain ready + Proof-of-Usage token minting</li>
            </ul>
          </div>
        </div>

        <div class="w-px hidden lg:flex bg-[#362E21]"></div>

        <div class="pt-[14px] flex flex-col items-center flex-1">
          <div class="relative">
            <img src={nectaBrick} alt="" class="grayscale-100 max-w-[176.98px] md:max-w-[356px]" />
            <div
              class="absolute w-full max-w-[176.98px] md:max-w-[356px] bg-gradient-to-b from-[#0A070100] top-0 h-[100%] to-[#0A0701]"
            ></div>
          </div>
          <div class="flex flex-col w-full px-4 gap-4">
            <p class="text-[11.91px] lg:text-[24px] leading-[120%] font-medium">Smart Contracts:</p>
            <ul class="ml-6 list-disc text-[#FFFFFFCC] text-[8px] lg:text-[18px] leading-[140%]">
              <li>Agent Payments</li>
              <li>Compute Credits</li>
              <li>Vault Access</li>
              <li>Dynamic Supply Locks & DAO Voting</li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
    <aside class="relative overflow-y-hidden mt-[100px] rounded-[20px] lg:rounded-[40px]">
      <!--    bee image-->
      <img
        src={bee}
        alt="bee"
        class="absolute z-20 hidden h-42 lg:block top-20 left-16 xl:top-24 xl:left-0"
      />
      <img
        src={bee}
        alt="bee"
        class="absolute z-20 scale-x-[-1] w-[138px] hidden lg:block bottom-20 right-16 xl:bottom-32 xl:right-0"
      />
      <!-- LAYER 1: Background images (z-0) -->
      <div
        class="absolute top-0 left-0 w-full h-full rounded-[20px] lg:rounded-[40px] overflow-hidden z-0"
      >
        <img src={beeNet1} class="object-cover w-full z-20 h-[100%] mix-blxend-overlay" alt="" />
      </div>
      <div
        class="absolute top-0 lg:-top-[17px] left-0 w-full h-fit rounded-t-[40px] overflow-hidden"
      >
        <img src={secondBlur} class="object-cover w-full h-fit" alt="" />
      </div>
      <div
        class="absolute top-0 lg:-top-[72px] left-0 w-full h-fit rounded-t-[40px] overflow-hidden"
      >
        <img src={nectaCoinCurveBg} class="object-cover w-full h-fit" alt="" />
      </div>

      <div
        class="flex px-4 lg:px-20 py-10 lg:py-28 justify-center flex-col relative z-20 gap-5 text-center items-center"
      >
        <div
          class="rounded-lg px-3 w-fit flex justify-center items-center text-white text-[14px] h-[30px] leading-[120%] tracking-[2%] ring-1 ring-white/[0.15] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.05)] bg-[#FFFFFF14]"
        >
          One Token. Every Layer
        </div>

        <div class="">
          <GradientText edgeOpacity={0.2}>
            <p
              class="text-[23px] md:text-[32px] max-w-[343px] font-[500] md:max-w-[608px] leading-[120%] text-white"
            >
              Tokenomics Snapshot
            </p>
          </GradientText>
        </div>

        <p class="text-[14px] md:text-[18px] font-[400] leading-[140%] md:max-w-[855px] text-white">
          $NECTA coordinates value, access, and accountability across products, networks, and user
          types.
        </p>

        <div class="w-full max-w-4xl mx-auto space-y-4">
          <!-- Header Row -->
          <div class="flex gap-1 lg:gap-4">
            <div
              class="bg-[#0C0801]/16 ring-[0.4px] h-[30px] md:h-[74px] flex-1 ring-[#3B2C13]/[0.15] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.05)] rounded-md md:rounded-2xl p-3 flex items-center justify-center text-center font-medium text-[10px] md:text-[21px] leading-[120%] text-white/80"
            >
              Categories
            </div>
            <div
              class="bg-[#0C0801]/16 ring-[0.4px] w-14 md:w-36 h-[30px] md:h-[74px] ring-[#3B2C13]/[0.15] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.05)] rounded-md md:rounded-2xl p-3 flex items-center justify-center text-center font-medium text-[10px] md:text-[21px] leading-[120%] text-white/80"
            >
              %
            </div>
            <div
              class="bg-[#0C0801]/16 ring-[0.4px] flex-1 h-[30px] md:h-[74px] ring-[#3B2C13]/[0.15] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.05)] rounded-md md:rounded-2xl p-3 flex items-center justify-center text-center font-medium text-[10px] lg:text-[21px] leading-[120%] text-white/80"
            >
              Notes
            </div>
          </div>

          <!-- Data Rows -->
          {#each tokenomicsData as item, index}
            <div
              use:fadeIn={{ delay: 150 + index * 100, direction: 'up', offset: 30 }}
              class="flex gap-1 lg:gap-4"
            >
              <div
                class="bg-[#0C0801]/31 border backdrop-blur-[23.3px] h-[30px] md:h-[74px] border-[#3B2C13] rounded-md md:rounded-2xl p-3 flex items-center justify-center text-center font-normal text-[10px] md:text-[18px] leading-[120%] text-white/80 flex-1"
              >
                {item.category}
              </div>
              <div
                class="bg-[#0C0801]/31 border border-[#3B2C13] h-[30px] md:h-[74px] rounded-md md:rounded-2xl p-3 flex items-center justify-center text-center font-normal text-[10px] md:text-[18px] leading-[120%] text-white/80 backdrop-blur-[23.3px] w-14 md:w-36"
              >
                {item.percentage}
              </div>
              <div
                class="bg-[#0C0801]/31 border border-[#3B2C13] h-[30px] md:h-[74px] rounded-md md:rounded-2xl p-3 flex items-center justify-center text-center font-normal text-[10px] md:text-[18px] leading-[120%] text-white/80 backdrop-blur-[23.3px] flex-1"
              >
                {item.notes}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </aside>

    <aside
      class="lg:mt-[109px] px-4 lg:px-8 relative rounded-2xl md:rounded-[40px] border-t-1 border-transparent"
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
      <div class="w-full flex justify-center">
        <GradientText edgeOpacity={0.2}>
          <p
            class="text-[16px] md:text-[32px] w-full lg:mt-[67px] mt-[50px] font-[500] leading-[120%] text-center"
          >
            Roadmap Highlights
          </p>
        </GradientText>
      </div>
      <p
        class="text-[11px] md:text-[18px] font-[400] w-full md:mt-4 mt-1 leading-[140%] text-center"
      >
        We're moving toward a future where we will harness our cluster's full power to solve
        intractable problems.<br /> What's one seemingly impossible question you'd answer for humanity?
      </p>

      <div class="relative z-20 hidden lg:block lg:mt-[80px] mt-[40px] lg:mb-[80px] mb-[40px]">
        <div class="flex justify-between mb-8 text-[10px] lg:text-[14px] text-white/60">
          <div class="text-center">Q2 2025</div>
          <div class="text-center">Q2 2025</div>
          <div class="text-center">Q3 2025</div>
          <div class="text-center">Q4 2025</div>
          <div class="text-center">Q4 2025</div>
          <div class="text-center">Q1 2026</div>
          <div class="text-center">Q1 2026</div>
          <div class="text-center">Q2 2026</div>
          <div class="text-center">Q2-Q3 2026</div>
        </div>

        <div class="relative">
          <div class="absolute -top-8 left-0 w-full h-8">
            <div class="absolute top-0 bottom-0 w-[1px] bg-white/20" style="left: 0%;"></div>
            <div class="absolute top-0 bottom-0 w-[1px] bg-white/20" style="left: 11.11%;"></div>
            <div class="absolute top-0 bottom-0 w-[1px] bg-white/20" style="left: 22.22%;"></div>
            <div class="absolute top-0 bottom-0 w-[1px] bg-white/20" style="left: 33.33%;"></div>
            <div class="absolute top-0 bottom-0 w-[1px] bg-white/20" style="left: 44.44%;"></div>
            <div class="absolute top-0 bottom-0 w-[1px] bg-white/20" style="left: 55.55%;"></div>
            <div class="absolute top-0 bottom-0 w-[1px] bg-white/20" style="left: 66.66%;"></div>
            <div class="absolute top-0 bottom-0 w-[1px] bg-white/20" style="left: 77.77%;"></div>
            <div class="absolute top-0 bottom-0 w-[1px] bg-white/20" style="left: 88.88%;"></div>
            <div class="absolute top-0 bottom-0 w-[1px] bg-white/20" style="left: 100%;"></div>
          </div>

          <div class="h-[1px] bg-white/20 w-full"></div>

          <!-- Milestone markers positioned along the timeline -->
          <div class="absolute top-0 left-0 w-full h-0">
            <!-- Q2 2025 - First marker (completed) -->
            <div class="absolute -top-[4px] w-2 h-2 bg-[#FFF3C6]" style="left: 0%;"></div>

            <!-- Q2 2025 - Second marker (completed) -->
            <div class="absolute -top-[4px] w-2 h-2 bg-[#FFF3C6]" style="left: 11.11%;"></div>

            <!-- Q2 2025 - Current marker with border and label -->

            <div class="absolute -top-[8px]" style="left: 11.11%; margin-left: 6px;">
              <div class="p-1 border-[1.3px] border-[#FFF3C6]">
                <div class="w-[6px] h-[6px] bg-[#FFF3C6] border border-[#FFE37D]"></div>
              </div>
              <div
                class="absolute -top-8 left-1/2 transform -translate-x-1/2 text-[10px] lg:text-[12px] text-white/60 whitespace-nowrap"
              >
                In Progress..
              </div>
            </div>

            <!-- Q3 2025 - planned marker (green) -->
            <div class="absolute -top-[4px] w-2 h-2 bg-[#63E695]" style="left: 22.22%;"></div>

            <!-- Q4 2025 - First marker (completed) -->
            <div class="absolute -top-[4px] w-2 h-2 bg-[#FFF3C6]" style="left: 33.33%;"></div>

            <!-- Q4 2025 - Second marker (planned) -->
            <div class="absolute -top-[4px] w-2 h-2 bg-[#63E695]" style="left: 44.44%;"></div>

            <!-- Q1 2026 - First marker (completed) -->
            <div class="absolute -top-[4px] w-2 h-2 bg-[#FFF3C6]" style="left: 55.55%;"></div>

            <!-- Q1 2026 - Second marker (planned) -->
            <div class="absolute -top-[4px] w-2 h-2 bg-[#63E695]" style="left: 66.66%;"></div>

            <!-- Q2 2026 - marker (completed) -->
            <div class="absolute -top-[4px] w-2 h-2 bg-[#FFF3C6]" style="left: 77.77%;"></div>

            <!-- Q2-Q3 2026 - First marker (planned) -->
            <div class="absolute -top-[4px] w-2 h-2 bg-[#63E695]" style="left: 88.88%;"></div>

            <!-- Q2-Q3 2026 - Audit marker (special) -->
            <div
              class="absolute -top-[6px] w-3 h-3 bg-[#FFF3C6] border border-[#FFE37D]"
              style="left: 100%; margin-left: -12px;"
            ></div>
          </div>
        </div>

        <div class="flex items-center justify-end mt-[60px] lg:mt-[80px]">
          <div class="flex items-center space-x-3">
            <div class="p-1 border-[1.3px] border-[#FFF3C6]">
              <div class="w-[6px] h-[6px] bg-[#FFF3C6] border border-[#FFE37D]"></div>
            </div>
            <span class="text-[10px] lg:text-[14px] text-white/60">Smart Contract Audit</span>
          </div>
        </div>
      </div>

      <!-- Mobile Vertical Timeline Component -->
      <div class="relative z-20 lg:hidden mt-[40px] mb-[40px]">
        <div class="flex justify-around items-start">
          <!-- Timeline Chart -->
          <div class="relative pl-8">
            <!-- Vertical line -->
            <div class="absolute left-4 top-0 bottom-0 w-[1px] bg-white/20"></div>

            <!-- Timeline items -->
            <div class="space-y-8">
              <!-- Q2 2025 - First item -->
              <div class="relative flex items-center">
                <div class="absolute left-[-12px] w-2 h-2 bg-[#FFF3C6]"></div>
                <div class="ml-8 text-[14px] text-white/60">Q2 2025</div>
              </div>

              <!-- Q2 2025 - Current item with In Progress -->
              <div class="relative flex items-center">
                <div class="absolute left-[-16px]">
                  <div class="p-1 border-[1.3px] border-[#FFF3C6]">
                    <div class="w-[6px] h-[6px] bg-[#FFF3C6] border border-[#FFE37D]"></div>
                  </div>
                </div>
                <div class="ml-8 text-[14px] text-white/60">In Progress..</div>
              </div>

              <!-- Q2 2025 - Second item -->
              <div class="relative flex items-center">
                <div class="absolute left-[-12px] w-2 h-2 bg-[#63E695]"></div>
                <div class="ml-8 text-[14px] text-white/60">Q2 2025</div>
              </div>

              <!-- Q3 2025 -->
              <div class="relative flex items-center">
                <div class="absolute left-[-12px] w-2 h-2 bg-[#63E695]"></div>
                <div class="ml-8 text-[14px] text-white/60">Q3 2025</div>
              </div>

              <!-- Q4 2025 - First -->
              <div class="relative flex items-center">
                <div class="absolute left-[-12px] w-2 h-2 bg-[#FFF3C6]"></div>
                <div class="ml-8 text-[14px] text-white/60">Q4 2025</div>
              </div>

              <!-- Q4 2025 - Second -->
              <div class="relative flex items-center">
                <div class="absolute left-[-12px] w-2 h-2 bg-[#63E695]"></div>
                <div class="ml-8 text-[14px] text-white/60">Q4 2025</div>
              </div>

              <!-- Q1 2026 - First -->
              <div class="relative flex items-center">
                <div class="absolute left-[-12px] w-2 h-2 bg-[#FFF3C6]"></div>
                <div class="ml-8 text-[14px] text-white/60">Q1 2026</div>
              </div>

              <!-- Q1 2026 - Second -->
              <div class="relative flex items-center">
                <div class="absolute left-[-12px] w-2 h-2 bg-[#63E695]"></div>
                <div class="ml-8 text-[14px] text-white/60">Q1 2026</div>
              </div>

              <!-- Q2 2026 -->
              <div class="relative flex items-center">
                <div class="absolute left-[-12px] w-2 h-2 bg-[#FFF3C6]"></div>
                <div class="ml-8 text-[14px] text-white/60">Q2 2026</div>
              </div>

              <!-- Q2-Q3 2026 - Regular -->
              <div class="relative flex items-center">
                <div class="absolute left-[-12px] w-2 h-2 bg-[#63E695]"></div>
                <div class="ml-8 text-[14px] text-white/60">Q2-Q3 2026</div>
              </div>

              <!-- Q2-Q3 2026 - Audit -->
              <div class="relative flex items-center">
                <div
                  class="absolute left-[-14px] w-3 h-3 bg-[#FFF3C6] border border-[#FFE37D]"
                ></div>
                <div class="ml-8 text-[14px] text-white/60">Q2-Q3 2026</div>
              </div>
            </div>
          </div>

          <!-- Legend on the right -->
          <div class="flex items-center mt-12">
            <div class="p-1 border-[1.3px] border-[#FFF3C6]">
              <div class="w-[6px] h-[6px] bg-[#FFF3C6] border border-[#FFE37D]"></div>
            </div>
            <span class="ml-3 text-[14px] text-white/60">Smart Contract Audit</span>
          </div>
        </div>
      </div>
    </aside>

    <aside
      class="relative overflow-hidden px-4 lg:px-8 lg:pt-[174px] py-10 lg:py-28 rounded-[20px] lg:rounded-[40px] flex justify-center items-center flex-col gap-5"
    >
      <div class="absolute bottom-9 right-5 hidden lg:block w-fit -rotate-[17.98deg]">
        <img src={nectaHerocoin} class="max-w-[367.33px] relative left-10 h-[194px]" alt="" />
        <div
          class="absolute bg-gradient-to-b w-full from-[#0A070100] bottom-0 h-full to-[#0A0701]/50 block md:hidden"
        ></div>
      </div>

      <div class="absolute top-0 z-10 left-0 w-full h-[100%] rounded-t-[40px] overflow-hidden">
        <img src={beeNet1} class="object-cover w-full h-full mix-blend-overlay" alt="" />
      </div>
      <div
        class="absolute bottom-0 rotate-180 z-10 left-0 w-full h-[30%] rounded-t-[40px] overflow-hidden"
      >
        <img src={beeNet1} class="object-cover w-full h-full mix-blend-overlay" alt="" />
      </div>

      <div
        class="absolute top-0 lg:-top-[72px] left-0 z-10 w-full h-fit rounded-t-[40px] overflow-hidden"
      >
        <img src={nectaCoinCurveBg} class="object-cover w-full h-fit" alt="" />
      </div>
      <div
        class="absolute top-0 lg:-top-[17px] left-0 w-full h-fit rounded-t-[40px] overflow-hidden"
      >
        <img src={secondBlur} class="object-cover w-full h-fit" alt="" />
      </div>
      <div
        class="absolute bottom-0 rotate-180 z-10 left-0 w-full h-fit rounded-t-[40px] overflow-hidden"
      >
        <img src={nectaCoinCurveBg} class="object-cover w-full h-full" alt="" />
      </div>

      <div class="lg:flex px-0 grid grid-cols-1">
        <div
          use:fadeIn={{ delay: 150, direction: 'left', offset: 80, duration: 600 }}
          class="flex-col border border-red-500 lg:w-1/2 mx-auto flex gap-5"
        >
          <div
            class="rounded-lg px-3 w-fit h-[30px] items-center flex justify-center text-white text-[14px] leading-[120%] tracing-[2%] ring-1 ring-white/[0.15] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.05)] bg-[#FFFFFF14]"
          >
            Kaprekar's Constant
          </div>
          <div class="!mb-6">
            <GradientText edgeOpacity={0.3}>
              <p class="text-[22px] md:text-[36px] md:max-w-[608px] font-[500] leading-[120%]">
                6174 Flow —
                <br /> Designed for Economic Balance
              </p>
            </GradientText>
          </div>
          <p class="text-[14px] md:text-[18px] font-[400] leading-[140%] md:max-w-[855px]">
            From edge devices to autonomous AI agents, NECTER provides the programmable
            infrastructure for a smarter, user-owned internet — optimized for compute, bandwidth,
            identity, and privacy.
            <br /><br />
            NECTER Network is where hardware meets intelligence, and where every contribution — whether
            data, compute, or training — is rewarded through a convergent economic model.
          </p>
        </div>
        <div class="border mx-auto border-red-500 w-1/2">
          <img
            use:fadeIn={{ delay: 150, direction: 'right', offset: 80, duration: 600 }}
            src={rubixBox}
            class="lg:h-[552px] lg:w-[470px]"
            alt=""
          />
        </div>
      </div>
      <div class="lg:absolute my-7 lg:mt-0 lg:bottom-1/4 lg:left-4 w-fit rotate-[17.74deg]">
        <img src={nectaHerocoin} class="md:max-w-[584.1px] h-[309px] max-w-[402.89px]" alt="" />
        <div
          class="absolute bg-gradient-to-b w-full from-[#0A070100] bottom-0 h-full to-[#0A0701]/50 block md:hidden"
        ></div>
      </div>

      <div
        class="lg:mt-[323px] text-center relative -top-10 flex items-center gap-6 py-3 flex-col w-full z-20"
      >
        <p
          use:fadeIn={{ delay: 150, direction: 'down', offset: 20, duration: 400 }}
          class="text-[32px] lg:text-[48px] bottom-0 font-[700] leading-[120%]"
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
          class="flex md:flex-row flex-col gap-1 md:gap-3"
        >
          <a href="/protocol">
            <button
              class="bg-gradient-to-b from-white to-[#D7D3E0] cursor-pointer text-(--necta-cod) px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
            >
              NECTA Genesis Protocol
            </button>
          </a>
          <div
            class="text-white text-sm px-6 cursor-pointer py-3 rounded-full tracing-[2%] ring-1 ring-white/[0.15] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.05)] bg-gradient-to-b from-[#FFFFFF40] bg-[#C0BECD40] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
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

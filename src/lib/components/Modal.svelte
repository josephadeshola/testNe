<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';

  export let isOpen = false;

  const dispatch = createEventDispatcher();
  let email = '';
  let isSubmitting = false;
  let isSuccess = false;
  let emailInput;

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mblazgvp';

  function closeModal() {
    dispatch('close');
  }

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  async function handleSubmit() {
    if (!email || isSubmitting) return;

    isSubmitting = true;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          subject: 'NECTA Whitepaper Request',
          message: `Email: ${email} has requested the NECTA whitepaper.`,
        }),
      });

      if (response.ok) {
        isSuccess = true;
        email = '';
        setTimeout(() => {
          closeModal();
          setTimeout(() => {
            isSuccess = false;
          }, 300);
        }, 2000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      isSubmitting = false;
    }
  }

  onMount(() => {
    if (isOpen && emailInput) {
      emailInput.focus();
    }
  });

  $: if (isOpen && emailInput) {
    emailInput.focus();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
    on:click={handleOverlayClick}
    transition:fade={{ duration: 200 }}
  >
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

    <div class="relative w-full max-w-md mx-auto" transition:scale={{ duration: 300, start: 0.95 }}>
      <div
        class="bg-[#0A0701] border border-white/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-2xl backdrop-blur-xl"
      >
        <button
          on:click={closeModal}
          class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-200 group"
        >
          <svg
            class="w-4 h-4 text-white/60 group-hover:text-white/80 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {#if !isSuccess}
          <div class="text-center mb-6">
            <h2
              class="text-2xl lg:text-3xl font-medium bg-gradient-to-r from-[#D3D0C8] to-[#FFFFFF] bg-clip-text text-transparent mb-3"
            >
              Coming Soon
            </h2>
            <p class="text-white/70 text-sm lg:text-base">
              Be the first to access the NECTA whitepaper when it's released
            </p>
          </div>

          <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <div class="space-y-2">
              <input
                bind:this={emailInput}
                bind:value={email}
                type="email"
                placeholder="Enter your email address"
                required
                disabled={isSubmitting}
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-200 disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !email}
              class="w-full bg-gradient-to-b from-white to-[#D7D3E0] text-[#0A0701] py-3 px-6 rounded-xl font-medium text-sm lg:text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center"
            >
              {#if isSubmitting}
                <svg
                  class="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0A0701]"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              {:else}
                Notify Me
              {/if}
            </button>
          </form>

          <div class="mt-6 text-center">
            <p class="text-white/40 text-xs">
              We'll notify you as soon as the whitepaper is available
            </p>
          </div>
        {:else}
          <div class="text-center py-4">
            <div
              class="w-16 h-16 bg-gradient-to-b from-[#63E695] to-[#4ADE80] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3
              class="text-xl lg:text-2xl font-medium bg-gradient-to-r from-[#D3D0C8] to-[#FFFFFF] bg-clip-text text-transparent mb-2"
            >
              Success!
            </h3>
            <p class="text-white/70 text-sm lg:text-base">
              You'll be notified when the whitepaper is ready
            </p>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<script>
  // Props (white centre → black edge)
  export let centerOpacity = 1; // full white at centre
  export let edgeOpacity = 0; // fully transparent at edge (reveals #0A0701)

  $: gradientStyle = `
    radial-gradient(
      circle at center,
      rgba(255, 255, 255, ${centerOpacity}) 0%,
      rgba(255, 255, 255, ${edgeOpacity}) 100%
    )
  `;
</script>

<!-- Black text colour underneath + white-to-transparent radial on top -->
<span
  class="gradient-text-wrapper"
  style:color="#0A0701"
  style:background={gradientStyle}
  style:-webkit-background-clip="text"
  style:background-clip="text"
  style:-webkit-text-fill-color="transparent"
>
  <slot />
</span>

<style>
  .gradient-text-wrapper {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>

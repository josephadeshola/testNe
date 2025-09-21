<script lang="ts">
  import favicon from "$lib/assets/Favicon.png";

  let { children } = $props();
  import "../app.css";
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<script>
  import { onMount } from "svelte";
  import toast, { Toaster } from "svelte-french-toast";

  onMount(() => {
    // Global toast styles or setup if needed
  });
</script>

<Toaster />
<slot />

<style>
  :global(body) {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
</style>

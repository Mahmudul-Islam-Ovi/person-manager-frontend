<!-- <script>
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
</style> -->

<script>
  import { Toaster } from "svelte-sonner";
</script>

<Toaster
  position="top-right"
  toastOptions={{
    style: "font-family: Arial, sans-serif;",
  }}
/>

<slot />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background: #f4f4f4;
    font-family: Arial, sans-serif;
  }
</style>

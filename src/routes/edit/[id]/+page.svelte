<script>
  import { page } from "$app/stores";
  import toast from "svelte-french-toast";
  import { goto } from "$app/navigation";
  import { updatePerson } from "$lib/api";

  // Get data from server load
  $: person = $page.data.person;
  $: id = $page.params.id;

  let name = "";
  let email = "";
  let phone = "";

  // Populate form when person loads
  $: if (person) {
    name = person.name;
    email = person.email;
    phone = person.phone;
  }

  async function handleSubmit() {
    if (!name || !email || !phone) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      await updatePerson(id, { name, email, phone });
      toast.success("Person updated");
      goto("/");
    } catch (err) {
      console.error("Update error:", err);
      toast.error(err.message);
    }
  }
</script>

<svelte:head>
  <title>Edit Person</title>
</svelte:head>

<div class="container">
  {#if $page.data.person}
    <h1>Edit Person</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <label>
        Name:
        <input bind:value={name} required />
      </label>
      <label>
        Email:
        <input bind:value={email} type="email" required />
      </label>
      <label>
        Phone:
        <input bind:value={phone} required />
      </label>
      <div class="buttons">
        <button type="submit" class="btn">Update</button>
        <a href="/" class="btn cancel">Cancel</a>
      </div>
    </form>
  {:else}
    <div class="loading">Loading...</div>
  {/if}
</div>

<style>
  .container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin: 15px 0;
    display: flex;
    flex-direction: column;
  }
  input {
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  .btn {
    flex: 1;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
  }
  .cancel {
    background: #6c757d;
  }
  .loading {
    text-align: center;
    padding: 20px;
  }

  @media (max-width: 600px) {
    .container {
      padding: 10px;
    }
    .buttons {
      flex-direction: column;
    }
  }
</style>

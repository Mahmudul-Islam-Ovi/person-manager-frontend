<script>
  import { goto } from "$app/navigation";
  import { toast } from "svelte-sonner";
  import { createPerson } from "$lib/api";

  let name = "";
  let email = "";
  let phone = "";

  async function handleSubmit() {
    try {
      await createPerson({ name, email, phone });
      toast.success("Person created");
      goto("/");
    } catch (err) {
      toast.error(err.message);
    }
  }
</script>

<div class="container">
  <h1>Add Person</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <label>Name: <input bind:value={name} required /></label>
    <label>Email: <input bind:value={email} type="email" required /></label>
    <label>Phone: <input bind:value={phone} required /></label>
    <div class="buttons">
      <button type="submit" class="btn">Add Person</button>
      <a href="/" class="btn cancel">Cancel</a>
    </div>
  </form>
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
    margin: 10px 0;
  }
  input {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
  .btn {
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    margin-bottom: 10px;
  }
  .buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  .cancel {
    background: #6c757d;
  }
  @media (max-width: 600px) {
    .container {
      padding: 10px;
    }
  }
</style>

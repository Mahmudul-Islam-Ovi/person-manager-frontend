<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { toast } from "svelte-sonner";
  import { getPersons, deletePerson } from "$lib/api";

  let persons = [];

  onMount(async () => {
    try {
      persons = await getPersons();
    } catch (err) {
      toast.error(err.message);
    }
  });

  async function handleDelete(id) {
    if (confirm("Are you sure?")) {
      try {
        await deletePerson(id);
        persons = persons.filter((p) => p._id !== id);
        toast.success("Person deleted");
      } catch (err) {
        toast.error(err.message);
      }
    }
  }
</script>

<div class="container">
  <h1>Person Manager</h1>
  <a href="/add" class="btn">Add Person</a>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each persons as person}
        <tr>
          <td>{person.name}</td>
          <td>{person.email}</td>
          <td>{person.phone}</td>
          <td>
            <a href="/edit/{person._id}" class="btn edit">Edit</a>
            <button on:click={() => handleDelete(person._id)} class="btn delete"
              >Delete</button
            >
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  h1 {
    text-align: center;
  }
  .btn {
    display: inline-block;
    padding: 8px 12px;
    margin: 5px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
  .edit {
    background: #ffc107;
  }
  .delete {
    background: #dc3545;
    border: none;
    cursor: pointer;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  @media (max-width: 600px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    tr {
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }
    td {
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }
    td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      content: attr(data-label);
      font-weight: bold;
    }
    td:nth-of-type(1):before {
      content: "Name";
    }
    td:nth-of-type(2):before {
      content: "Email";
    }
    td:nth-of-type(3):before {
      content: "Phone";
    }
    td:nth-of-type(4):before {
      content: "Actions";
    }
  }
</style>

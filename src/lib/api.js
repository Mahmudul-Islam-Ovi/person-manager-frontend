const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://person-manager-backend.onrender.com/api";

export async function getPersons() {
  const res = await fetch(`${API_URL}/persons`);
  if (!res.ok) throw new Error("Failed to fetch persons");
  return res.json();
}

export async function getPerson(id) {
  const res = await fetch(`${API_URL}/persons/${id}`);
  if (!res.ok) throw new Error("Failed to fetch person");
  return res.json();
}

export async function createPerson(data) {
  const res = await fetch(`${API_URL}/persons`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create person");
  return res.json();
}

export async function updatePerson(id, data) {
  const res = await fetch(`${API_URL}/persons/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update person");
  return res.json();
}

export async function deletePerson(id) {
  const res = await fetch(`${API_URL}/persons/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete person");
  return res.json();
}
